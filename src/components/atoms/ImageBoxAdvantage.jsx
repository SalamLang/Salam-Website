import Image from 'next/image';
import BestDesigne from '../../../public/bestdesigne.png';
import Security from '../../../public/security.png';
import AllPeople from '../../../public/all-people.png';
import Rtl from '../../../public/rtl.png';
import Simplicity from '../../../public/simplicity.png';

function ImageBoxAdvantage({ variant }) {
    let classes = 'w-8 h-8 lg:w-[52px] brightness-0';
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
    <div className="bg-bg-button-green w-24 h-24 p-8 rounded-3xl flex items-center justify-center">
        <Image
            className={classes}
            src={src}
            alt="img"
        />
    </div>
  )
}

export default ImageBoxAdvantage
