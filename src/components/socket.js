import { io } from "socket.io-client";

export const initSocket = async () => {
  const option = {
    'force new connection': true,
    reconnectionAttempt: "infinity",
    timout: 10000,
    transports: ["websocket"],
  };
  return io(process.env.NEXT_PUBLIC_URL, option);
}