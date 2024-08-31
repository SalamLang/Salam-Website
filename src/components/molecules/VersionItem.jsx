const VersionItem = ({ active, lastItem, children, ...attr }) => {
  return (
    <li
      transition={{ exit: { duration: 0.1 } }}
      className={`w-full h-auto flex py-1.5 justify-center text-primary shadow-2xl shadow-black/20 items-center ${
        !lastItem && "border-b border-gray-500/10"
      } ${active ? "font-Estedad-Bold" : ""}`}
      {...attr}
    >
      {children}
    </li>
  );
};
export default VersionItem;
