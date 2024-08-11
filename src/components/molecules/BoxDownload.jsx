import Image from "next/image";

import Linux from '../../../public/Linux.png';
import Mac from '../../../public/Mac.png';
import Android from '../../../public/Android.png';
import Windows from '../../../public/Windows.png';
import Pwa from '../../../public/Pwa.png';

function BoxDownload({ variant, className }) {
    let classes = 'brightness-0 w-full';
    let src;
    let title;
    let description;

    switch (variant) {
        case 'Linux':
            classes
            src = Linux;
            title = "لینوکس";
            description = "12 مگابایت";
            break;
        case 'Mac':
            classes
            src = Mac;
            title = "مک";
            description = "47 مگابایت";
            break;
        case 'Android':
            classes
            src = Android;
            title = "اندروید";
            description = "56 مگابایت";
            break;
        case 'Windows':
            classes
            src = Windows;
            title = "ویندوز";
            description = "27 مگابایت";
            break;
        case 'Pwa':
            classes
            src = Pwa;
            title = "PWA";
            description = "بدون نیاز به نصب";
            break;
    }

    return (
        <div className="flex items-center justify-center flex-col gap-2 cursor-pointer">
            <div className={`bg-bg-box rounded-xl p-4 flex items-center justify-center  w-16 h-16 2xl:w-20 2xl:h-20 ${className}`}>
                <Image
                    className={classes}
                    src={src}
                    alt={title} // افزودن alt برای دسترس‌پذیری
                />
            </div>
            <h4 className="text-title text-center font-Estedad-Light">{title}</h4>
            <p className="text-description text-center text-xs font-Estedad-Light w-24">{description}</p>
        </div>
    )
}

export default BoxDownload;
