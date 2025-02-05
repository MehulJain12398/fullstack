"use client"

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from "../public/icons/logo.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Session } from 'next-auth'
import { getInitials } from '@/lib/utils'


const Header = ({session} : {session: Session}) => {

    const pathname = usePathname()
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href="/" className='text-white'>
        <Image src={Logo} alt='logo' width={40} height={40} />
      </Link>

      <ul className='flex flex-row items-center gap-8 text-white'>
        <li>
            <Link href="/library" className={clsx(
                'text-base cursor-pointer capitalize',
                pathname === "/library" ? "text-light-200" : "text-light-100",)}>
                Library
            </Link>
        </li>

        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className='bg-amber-100 text-black'>
                {getInitials(session?.user?.name) || "IN"}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>

      </ul>
    </header>
  )
}

export default Header
