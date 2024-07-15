import Conservation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    console.log(req.user);
    const senderId = req.user._id;

    let conversation = await Conservation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conservation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
  





    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getRecieverSocketId(receiverId);
    if(receiverSocketId){
      io.to(receiverSocketId).emit("newMessage",newMessage)
    }

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sending message:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conservation = await Conservation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conservation) {
      return res.status(200).json([]);
    }

    const messages = conservation.messages;

    return res.status(200).json(messages);
  } catch (error) {
    console.log("Error in sending message:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
