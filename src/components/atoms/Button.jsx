import Link from 'next/link';

const Button = ({ text, variant, icon, padding, borderRadius, type, href, className }) => {
    let classes = 'px-4 rounded-3xl ';

    switch (variant) {
        case 'buttonOrange':
            classes += 'bg-bg-button-orange h-11 text-text-button-white flex items-center justify-center gap-2';
            break;
        case 'buttonOrange2':
            classes += 'bg-bg-button-orange2 h-11 text-text-button-orange2 flex items-center justify-center gap-2';
            break;
        case 'buttonBlue':
            classes += 'bg-bg-button-blue h-11 text-text-button-white flex items-center justify-center gap-2';
            break;
        case 'buttonBlue2':
            classes += 'bg-bg-button-blue-2 h-11 text-text-button-blue flex items-center justify-center gap-2';
            break;
        case 'buttonWhite':
            classes += 'bg-bg-button-white h-11 text-text-button-black flex items-center justify-center gap-2';
            break;
        case 'buttonGreen':
            classes += 'bg-bg-button-green h-11 text-text-button-black flex items-center justify-center gap-2';
            break;
        case 'buttonBlack':
            classes += 'bg-bg-button-black h-11 text-text-button-white flex items-center justify-center gap-2';
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