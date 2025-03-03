'use client'

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { CopyIcon, LinkIcon } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <LinkIcon className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <CopyIcon className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
