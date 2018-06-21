import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "../components/ChatWindow";

const Main = ({ user, activeUserId }) => {
  console.log(activeUserId);
  const renderMainContent = () => {
    if (activeUserId === null) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;