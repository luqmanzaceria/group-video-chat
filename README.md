# Group Video Chat
Built with React and Agora

<img width="1506" alt="group_video_chat_demo" src="https://github.com/luqmanzaceria/group-video-chat/assets/47729606/b72cb6a9-9ec5-4e0f-9c5c-209141882e0a">

## Agora Token
First, generate a [new temp token](https://docs.agora.io/en/video-calling/reference/manage-agora-account?platform=web#generate-a-temporary-token) and replace the appId and token in `settings.js`.
## Setup

- [Install Node.js](https://nodejs.org/en/)
- `cd group-video-chat`
- `npm install`
- `yarn start or npm start`
  
## Docker demo

```bash
docker run -itd --rm -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true luqmanzaceria/group-video-chat
```
Open `localhost:3001` in your browser and you will find the app running!

## Hosting app publicly
- `npm start` and note the port your dev build is running on
- Download ngrok
- Place ngrok.exe in chosen directory
- Navigate to that directory and run `./ngrok HTTP <port of dev build>`
- Share the generated ngrok forwarding link with friends to video chat!
