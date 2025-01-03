import Image from 'next/image'
import { appConfig } from '@/lib/appConfig'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Image
          src={appConfig.siteImage.logo}
          alt="Site Logo"
          width={32}
          height={32}
        />
      </div>
    </header>
  )
} 