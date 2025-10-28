const SubButton = ({ onSubscribe }) => {
  return (
    <button
      onClick={onSubscribe}
      className="flex items-center text-sm gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-500 text-white font-semibold px-8 py-3 shadow-md shadow-blue-200 tracking-wide cursor-pointer hover:opacity-90 transition"
    >
      Subscribe
    </button>
  );
};

export default SubButton;
