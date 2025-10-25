import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::message.message', ({ strapi }) => ({
    async create(ctx) {
        ctx.request.body.data.publishedAt = new Date();

        const response = await super.create(ctx);
        return response;
    },

    async dialog(ctx) {
        const userFrom = +ctx.params.userFrom;
        const userTo = +ctx.params.userTo;

        const messages = await strapi.entityService.findMany('api::message.message', {
            filters: {
                $or: [
                    { userFrom: userFrom, userTo: userTo },
                    { userFrom: userTo, userTo: userFrom }
                ]
            },
            sort: { createdAt: 'asc' },
            populate: {
                userFrom: true,
                userTo: true,
            } as any,
        });

        return messages;
    }
}));
