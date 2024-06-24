import React from 'react';
import Image from 'next/image';
import Gif404Image from '../../../public/404.gif';
import GifDownloadImage from '../../../public/Download.gif';
import GifEducationImage from '../../../public/Education.gif';
import GifEducation2Image from '../../../public/ٍٍٍٍEducation2.gif';

function Gif({ variant }) {
    let classes = '';
    let src = '';

    switch (variant) {
        case 'Gif404':
            classes += "w-60 h-64 md:w-[304px] md:h-[337px]";
            src = Gif404Image;
            break;
        case 'GifDownload':
            classes += 'h-[270px] w-48 md:w-[275px] md:h-96';
            src = GifDownloadImage;
            break;
        case 'GifEducation':
            classes += 'h-56 w-60 md:w-96 md:h-[352px]';
            src = GifEducationImage;
            break;
        case 'GifEducation2':
            classes += 'w-[337px] h-64 md:h-80 md:w-[425px]';
            src = GifEducation2Image;
            break;
        default:
            classes += '';
    }

    return (
        <Image
            className={classes}
            src={src}
            alt="Gif"
        />
    );
}

export default Gif;
