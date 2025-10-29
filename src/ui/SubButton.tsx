const SubButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-sm gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 lg:px-8 py-2 lg:py-3 shadow-md shadow-blue-200 tracking-wide cursor-pointer hover:opacity-90 transition"
    >
      {children}
    </button>
  );
};

export default SubButton;
