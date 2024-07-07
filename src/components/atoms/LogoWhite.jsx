import Image from 'next/image'
import Link from 'next/link'

import logoWhite from '../../../public/LogoWhite.svg';

function LogoWhite() {
  return (
    <Link href="/" className="w-16 h-14">
        <Image
            src={logoWhite}
            width="100%"
            height="100%"
            alt="Logo"
        />
    </Link>
  )
}

export default LogoWhite