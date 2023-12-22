# Group Video Chat
Built with React and Agora

<img width="1506" alt="group_video_chat_demo" src="https://github.com/luqmanzaceria/group-video-chat/assets/47729606/b72cb6a9-9ec5-4e0f-9c5c-209141882e0a">

## Setup

- [Install Node.js](https://nodejs.org/en/)
- `cd group-video-chat`
- `npm install`
- `yarn start or npm start`
  
## Docker Installation

### Unix
```bash
docker run -itd --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true luqmanzaceria/group-video-chat
```

### Windows

#### CMD
```bash
docker run -itd --rm -v %cd%:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true luqmanzaceria/group-video-chat
```
#### PowerShell
```bash
docker run -itd --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true luqmanzaceria/group-video-chat
```
