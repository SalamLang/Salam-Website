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
        className="cursor-pointer md:hidden" 
        src={HambergerImage}
        width="100%"
        height="100%"
        alt="Logo"
    />
  )
}

export default Hamberger