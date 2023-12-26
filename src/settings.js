import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "ad43225cf464417e887ce8f4f6e5e883"; // Your Agora App ID
export const channelName = "main"; // The channel name for the Agora session

// Function to fetch the token from your token server
export const fetchToken = async (channelName, uid) => {
    try {
        const response = await fetch(`http://localhost:8080/rtc/${channelName}/publisher/uid/${uid}`);
        const data = await response.json();
        if (data.rtcToken) {
            return data.rtcToken;
        } else {
            throw new Error('Token not found in response');
        }
    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
};

// Function to create the Agora client configuration
export const createAgoraConfig = async (channelName, uid) => {
    const token = await fetchToken(channelName, uid);
    return { mode: "rtc", codec: "vp8", appId: appId, token: token };
};

// Export a function to create the client with the configuration
export const useClient = async (channelName, uid) => {
    const config = await createAgoraConfig(channelName, uid);
    return createClient(config);
};

// Export the microphone and camera tracks hook
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
