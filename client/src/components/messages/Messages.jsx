import useGetMessages from "../../hooks/getMessages";
import Message from "./Message.jsx";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect, useLayoutEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const messagesEndRef = useRef(null);

  useLayoutEffect(() => {
    if (!loading && messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={messagesEndRef}>
            
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start a conversation</p>
      )}
    </div>
  );
};

export default Messages;
