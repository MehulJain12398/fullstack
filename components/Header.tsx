"use client"

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from "../public/icons/logo.svg"

const Header = () => {

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

      </ul>
    </header>
  )
}

export default Header
