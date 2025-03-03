import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getSubscriberInviteCount } from '../drizzle/functions/get-subscriber-invite-count'

export const getSubscriberInviteCountRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberID/ranking/count',
      {
        schema: {
          tags: ['referral'],
          summary: 'Get subscribers invite count',
          operationId: 'getSubscriberInviteCount',
          params: z.object({
            subscriberID: z.string(),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { subscriberID } = request.params

        const { count } = await getSubscriberInviteCount({ subscriberID })

        return reply.status(200).send({
          count,
        })
      }
    )
  }
