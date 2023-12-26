import React, { useState, useEffect } from "react";
import {
  createAgoraConfig,
  useMicrophoneAndCameraTracks,
  channelName,
} from "./settings.js";
import { Grid } from "@material-ui/core";
import Video from "./Video";
import Controls from "./Controls";
import AgoraRTC from 'agora-rtc-sdk-ng'; // import AgoraRTC

export default function VideoCall(props) {
  const { setInCall } = props;
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const [client, setClient] = useState(() => AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })); // Initialize the client here
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(() => {
    let mounted = true; // To prevent state update if the component is unmounted
    const uid = Math.floor(Math.random() * 10000); // Generate a random UID for demo purpose

    // Asynchronously join the channel
    const joinChannel = async () => {
      try {
        const agoraConfig = await createAgoraConfig(channelName, uid); // Get the Agora config with the token
        await client.join(agoraConfig.appId, channelName, agoraConfig.token, uid);
        if (tracks) {
          await client.publish(tracks);
        }
        setStart(true);
      } catch (error) {
        console.log("Error joining Agora channel: ", error);
      }
    };

    if (ready && tracks && !start && mounted) {
      joinChannel();
    }

    return () => {
      if (client && start) { // Check both client instance and if it has started/joined
        client.leave().then(() => {
          console.log('Left the channel successfully');
        }).catch((error) => {
          console.error('Failed to leave the channel:', error);
        });
        client.removeAllListeners();
      }
    };
  }, [client, ready, tracks, start]);

  // Handling the published/unpublished events
  useEffect(() => {
    if (client) {
      const handleUserPublished = async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => [...prevUsers, user]);
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      };

      const handleUserUnpublished = (user, mediaType) => {
        if (mediaType === "audio" && user.audioTrack) {
          user.audioTrack.stop();
        }
        if (mediaType === "video") {
          setUsers((prevUsers) => prevUsers.filter((User) => User.uid !== user.uid));
        }
      };

      client.on("user-published", handleUserPublished);
      client.on("user-unpublished", handleUserUnpublished);
      client.on("user-left", (user) => {
        setUsers((prevUsers) => prevUsers.filter((User) => User.uid !== user.uid));
      });

      return () => {
        client.off("user-published", handleUserPublished);
        client.off("user-unpublished", handleUserUnpublished);
        client.off("user-left");
      };
    }
  }, [client, users]);

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid item style={{ height: "5%" }}>
        {ready && tracks && (
          // Inside the VideoCall component's return statement
          <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} client={client} />

        )}
      </Grid>
      <Grid item style={{ height: "95%" }}>
        {start && tracks && <Video tracks={tracks} users={users} />}
      </Grid>
    </Grid>
  );
}
