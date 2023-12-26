# Group Video Chat
Built with React and Agora

<img width="1506" alt="group_video_chat_demo" src="https://github.com/luqmanzaceria/group-video-chat/assets/47729606/b72cb6a9-9ec5-4e0f-9c5c-209141882e0a">

## Setup

- [Install Node.js](https://nodejs.org/en/)
- `cd group-video-chat`
- `npm install`
- `yarn start or npm start` to start client
- `cd server`
- `npm install`
- Define constants by creating a `.env` file like the `.env.example` file. Add Agora Credentials and the `PORT` we’re going to use to listen for requests.
- `yarn start or npm start` to start server
  
## Docker demo

```bash
docker run -itd --rm -v /app/node_modules -p 3001:3000 -p 8080:8080 -e CHOKIDAR_USEPOLLING=true luqmanzaceria/group-video-chat
```
Open `localhost:3001` in your browser and you will find the app running!

## Hosting app publicly
- `npm start` and note the port your dev build is running on
- `cd server` and start with `npm start`
- Download ngrok
- Place ngrok.exe in chosen directory
- Navigate to that directory and run `./ngrok http <port of dev build>`
- Share the generated ngrok forwarding link with friends to video chat!
