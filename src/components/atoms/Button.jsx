import Link from 'next/link';

const Button = ({ text, variant, icon, padding, borderRadius, type, href, className }) => {
    let classes = 'px-4 rounded-3xl ';

    switch (variant) {
        case 'buttonOrange':
            classes += 'hover:scale-105 transition bg-bg-button-orange h-11 text-text-button-white flex items-center justify-center gap-2';
            break;
        case 'buttonOrange2':
            classes += 'hover:scale-105 transition bg-bg-button-orange2 h-11 text-text-button-orange2 flex items-center justify-center gap-2';
            break;
        case 'buttonBlue':
            classes += 'hover:scale-105 transition bg-bg-button-blue h-11 text-text-button-white flex items-center justify-center gap-2';
            break;
        case 'buttonBlue2':
            classes += 'hover:scale-105 transition bg-bg-button-blue-2 h-11 text-text-button-orange2 font-Estedad-Light flex items-center justify-center gap-2';
            break;
        case 'buttonWhite':
            classes += 'hover:scale-105 transition z-20 bg-bg-button-white h-11 text-text-button-black flex items-center justify-center gap-2';
            break;
        case 'buttonGreen':
            classes += 'hover:scale-105 transition bg-bg-button-green h-11 text-text-button-black flex items-center justify-center gap-2';
            break;
        case 'buttonBlack':
            classes += 'hover:scale-105 transition bg-bg-button-black h-11 text-text-button-white flex items-center justify-center gap-2';
            break;
    }

    if (padding) classes += `${padding} `;
    if (borderRadius) classes += `${borderRadius} `;
    if (className) classes += `${className} `;

    if (type === 'link' && href) {
        return (
            <Link href={href} className={classes}>
                {text}
                {icon && <span>{icon}</span>}
            </Link>
        );
    } else {
        return (
            <button className={classes}>
                {text}
                {icon && <span>{icon}</span>}
            </button>
        );
    }
};

export default Button;
