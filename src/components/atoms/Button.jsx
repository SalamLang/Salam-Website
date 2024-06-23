import Link from 'next/link';

const Button = ({ text, variant, icon, padding, borderRadius, type, href }) => {
    let className = '';

    switch (variant) {
        case 'buttonOrange':
            className += ' bg-bg-button-orange text-text-button-white px-4 py-2 rounded-3xl ';
            break;
        case 'buttonBlue':
            className += ' bg-bg-button-blue text-text-button-white px-4 py-2 rounded-3xl ';
            break;
        default:
            className += ' bg-bg-button-orange text-text-button-white px-4 py-2 rounded-3xl ';
    }

    if (padding) className += ` ${padding}`;
    if (borderRadius) className += ` ${borderRadius}`;

    if (type === 'link' && href) {
        return (
            <Link href={href} className={className}>
                {icon && <span className="mr-2">{icon}</span>}
                {text}
            </Link>
        );
    } else {
        return (
            <button className={className}>
                {icon && <span className="mr-2">{icon}</span>}
                {text}
            </button>
        );
    }
};

export default Button;
