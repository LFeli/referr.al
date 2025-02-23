import { redis } from '../../redis/client'

interface getSubscriberInviteCountsParams {
  subscriberID: string
}

export async function getSubscriberInviteCounts({
  subscriberID,
}: getSubscriberInviteCountsParams) {
  const count = await redis.zscore('referral:ranking', subscriberID)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
