import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { CopyIcon, LinkIcon } from 'lucide-react'

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <LinkIcon className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue={'http://localhost:3000/invite/321bicna8adau84007'}
      />

      <IconButton className="-mr-2">
        <CopyIcon className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
