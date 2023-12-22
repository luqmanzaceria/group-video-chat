import {createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react";

const appId = "ad43225cf464417e887ce8f4f6e5e883"
const token = "007eJxTYPjf8Z1vnUmz7clKzfDDbVqGcy58cJPbfPfC9auvbm1fnn9agSExxcTYyMg0Oc3EzMTE0DzVwsI8OdUizSTNLNUUyDEOut6S2hDIyHBQT5OJkQECQXwWhtzEzDwGBgAteiIm"

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";