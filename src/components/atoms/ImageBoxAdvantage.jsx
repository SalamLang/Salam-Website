import Image from 'next/image';
import BestDesigne from '../../../public/BestDesigne.png';
import Security from '../../../public/Security.png';
import AllPeople from '../../../public/AllPeople.png';
import Rtl from '../../../public/Rtl.png';
import Simplicity from '../../../public/Simplicity.png';

function ImageBoxAdvantage({ variant }) {
    let classes = 'w-8 h-8 lg:w-[52px] md:h-[52px]';
    let src = '';

    switch (variant) {
        case 'BestDesigne':
            classes
            src = BestDesigne;
            break;
        case 'Security':
            classes
            src = Security;
            break;
        case 'AllPeople':
            classes
            src = AllPeople;
            break;
        case 'Rtl':
            classes
            src = Rtl;
            break;
        case 'Simplicity':
            classes
            src = Simplicity;
            break;
    }
  return (
    <div className="bg-white p-8 rounded-3xl flex items-center justify-center">
        <Image
            className={classes}
            src={src}
            alt="img"
        />
    </div>
  )
}

export default ImageBoxAdvantage
