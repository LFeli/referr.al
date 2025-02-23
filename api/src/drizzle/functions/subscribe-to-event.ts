import { eq } from 'drizzle-orm'
import { redis } from '../../redis/client'
import { db } from '../client'
import { subscriptions } from '../schema/subscriptions'

interface subscribeToEventParams {
  name: string
  email: string
  referrerID?: string | null
}

export async function subscribeToEvent({
  name,
  email,
  referrerID,
}: subscribeToEventParams) {
  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscribers.length > 0) {
    return {
      subscriberID: subscribers[0].id,
    }
  }

  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  if (referrerID) {
    await redis.zincrby('referral:ranking', 1, referrerID)
  }

  const subscriber = result[0]

  return {
    subscriberID: subscriber.id,
  }
}
