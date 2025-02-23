import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getSubscriberInviteCounts } from '../drizzle/functions/get-subscriber-invite-counts'

export const getSubscriberInviteCountRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberID/ranking/count',
      {
        schema: {
          tags: ['referral'],
          summary: 'Get subscribers invite count',
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

        const { count } = await getSubscriberInviteCounts({ subscriberID })

        return reply.status(200).send({
          count,
        })
      }
    )
  }
