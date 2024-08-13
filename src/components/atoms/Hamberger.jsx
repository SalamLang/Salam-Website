'use client';

import Image from 'next/image'

import HambergerImage from '../../../public/Hamberger.png';
import { useState } from 'react';

function Hamberger() {
    const [hamber, setHamber] = useState(false);

    const clickHanler = () => {
        setHamber(!hamber);
        console.log(hamber)
    }
  return (
    <Image onClick={clickHanler}
        className="cursor-pointer md:hidden w-9 h-9"
        src={HambergerImage}
        alt="Logo"
    />
  )
}

export default Hamberger
