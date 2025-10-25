"use strict";

module.exports = {
    register({ strapi }) { },

    bootstrap({ strapi }) {
        const io = require("socket.io")(strapi.server.httpServer, {
            cors: {
                origin: "https://6xfw8l-2a02-6bf-8080-819--1-32.ru.tuna.am",
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
                        userFrom: data.userFrom,
                        userTo: data.userTo,
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
