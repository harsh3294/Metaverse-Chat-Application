import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          style={{ marginLeft: "auto", marginRight: "auto" }}
          variant="dark"
        />
      </div>
      <div>
        <Message />
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}! 🎉</p>
      </div>
    </div>
  );
}

export default Messages;
