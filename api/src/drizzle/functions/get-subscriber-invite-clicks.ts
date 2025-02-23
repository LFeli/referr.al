import { redis } from '../../redis/client'

interface getSubscriberInviteClicksParams {
  subscriberID: string
}

export async function getSubscriberInviteClicks({
  subscriberID,
}: getSubscriberInviteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberID)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
