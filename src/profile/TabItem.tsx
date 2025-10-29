import clsx from "clsx";

const TabItem = ({ id, activeTab, setActiveTab, icon, label }) => {
  return (
    <li
      key={id}
      onClick={() => setActiveTab(label)}
      className={clsx(
        `flex items-center gap-2 shrink-0 px-4 py-2 cursor-pointer text-sm font-medium rounded-md transition-all duration-200`,
        activeTab === label
          ? "bg-blue-100 text-blue-700"
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      <div className={clsx(activeTab === label ? "opacity-100" : "opacity-70")}>
        {icon}
      </div>
      <span>{label}</span>
    </li>
  );
};

export default TabItem;
