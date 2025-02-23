import { redis } from '../../redis/client'

interface getSubscriberInviteCountParams {
  subscriberID: string
}

export async function getSubscriberInviteCount({
  subscriberID,
}: getSubscriberInviteCountParams) {
  const count = await redis.zscore('referral:ranking', subscriberID)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
