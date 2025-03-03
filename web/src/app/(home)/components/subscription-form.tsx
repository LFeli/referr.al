import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRightIcon, UserIcon } from 'lucide-react'

export function SubscriptionForm() {
  return (
    <form className="space-y-6">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <UserIcon />
          </InputIcon>

          <InputField type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <UserIcon />
          </InputIcon>

          <InputField type="text" placeholder="Nome completo" />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRightIcon />
      </Button>
    </form>
  )
}
