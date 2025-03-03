'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, UserIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, { message: 'Digite seu nome completo' }),
  email: z.string().email({ message: 'Digite um e-mail válido' }),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subscriptionSchema),
  })

  function onSubscribe(data: SubscriptionSchema) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubscribe)} className="space-y-6">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <article className="space-y-2">
          <InputRoot>
            <InputIcon>
              <UserIcon />
            </InputIcon>

            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </article>

        <article className="space-y-2">
          <InputRoot>
            <InputIcon>
              <UserIcon />
            </InputIcon>

            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('email')}
            />
          </InputRoot>

          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </article>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRightIcon />
      </Button>
    </form>
  )
}
