import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Screens/Home/Home";
import { Chats } from "../Screens/Chats/Chats";
import { Profile } from "../Screens/Profile/Profile";

export function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats/:chatId" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />

        {/*  <Route path="/profile" element={<Profile />} />*/}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
