import Image from "next/image";

import Linux from '../../../public/Linux.png';
import Mac from '../../../public/Mac.png';
import Android from '../../../public/Android.png';
import Windows from '../../../public/Windows.png';
import Pwa from '../../../public/Pwa.png';

function BoxDownload({ variant }) {
    let src;
    let title;
    let description;

    switch (variant) {
        case 'Linux':
            src = Linux;
            title = "لینوکس";
            description = "12 مگابایت";
            break;
        case 'Mac':
            src = Mac;
            title = "مک";
            description = "47 مگابایت";
            break;
        case 'Android':
            src = Android;
            title = "اندروید";
            description = "56 مگابایت";
            break;
        case 'Windows':
            src = Windows;
            title = "ویندوز";
            description = "27 مگابایت";
            break;
        case 'Pwa':
            src = Pwa;
            title = "PWA";
            description = "بدون نیاز به نصب";
            break;
    }

    return (
        <div className="flex items-center justify-center flex-col gap-2">
            <div className="bg-bg-box rounded-xl p-6 flex items-center justify-center w-20 h-20">
                <Image
                    src={src}
                    alt={title} // افزودن alt برای دسترس‌پذیری
                />
            </div>
            <h4 className="text-title text-center">{title}</h4>
            <p className="text-description text-center text-xs">{description}</p>
        </div>
    )
}

export default BoxDownload;
