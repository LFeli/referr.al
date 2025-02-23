import { eq } from 'drizzle-orm'
import { db } from '../client'
import { subscriptions } from '../schema/subscriptions'

interface subscribeToEventParams {
  name: string
  email: string
}

export async function subscribeToEvent({
  name,
  email,
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

  const subscriber = result[0]

  return {
    subscriberID: subscriber.id,
  }
}
