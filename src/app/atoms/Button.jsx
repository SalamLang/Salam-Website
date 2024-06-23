
const Button = ({ text, icon, color, py, px, borderRadius }) => {
    return (
        <button
            className={`bg-${color} text-white py-${py} px-${px} rounded-${borderRadius} flex items-center justify-center`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    );
};

export default Button;
