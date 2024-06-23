import Image from 'next/image'
import Link from 'next/link'

import logoImage from '../../../public/Logo.png';

function Logo() {
  return (
    <Link href="/" className="w-16 h-14">
        <Image
            src={logoImage}
            width="100%"
            height="100%"
            alt="Logo"
        />
    </Link>
  )
}

export default Logo