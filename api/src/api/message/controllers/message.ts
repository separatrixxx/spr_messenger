import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::message.message', ({ strapi }) =>  ({
    async find(ctx) {
        const { data } = await super.find(ctx);

        const newData = data.map(entity => {
            return {
                message: entity.attributes.message,
                user: entity.attributes.user,
            }
        });

        return { data: newData };
    },
    
    async create(ctx) {
        ctx.request.body.data.publishedAt = new Date();

        const response = await super.create(ctx);
        return response;
    }
}));
