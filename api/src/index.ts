"use strict";

module.exports = {
  register({ strapi }) {},

  bootstrap({ strapi }) {
    const io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "https://spr-messenger.vercel.app",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    io.on("connection", (socket) => {
      console.log("a user connected");

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });

      socket.on("sendMessage", async (data) => {
        const messageData = {
          data: {
            message: data.message,
            user: data.user,
            publishedAt: new Date(),
          },
        };

        try {
          const response = await strapi.entityService.create('api::message.message', messageData);
          io.emit("message", response);
        } catch (error) {
          console.error("Error saving message: ", error);
        }
      });
    });

    strapi.io = io;
  },
};
