import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          console.log(message);
        },
        (error) => {
          console.error(error);
        }
      );
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setMessage("");
  };
  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow outline-none bg-transparent text-white  placeholder:text-gray-500 pr-5"
        placeholder={`Enter a Message ${user.getUsername()} ...`}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
