import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getSubscriberInviteClicks } from '../drizzle/functions/get-subscriber-invite-clicks'

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberID/ranking/clicks',
      {
        schema: {
          tags: ['referral'],
          summary: 'Get subscribers invite click count',
          operationId: 'getSubscriberInviteClicks',
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

        const { count } = await getSubscriberInviteClicks({ subscriberID })

        return reply.status(200).send({
          count,
        })
      }
    )
  }
