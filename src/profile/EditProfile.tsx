import { Video, ArrowLeft } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import Logo from "../ui/Logo";

const EditProfile = () => {
  const [active, setActive] = useState("personal");

  const menuItems = [
    { id: "personal", label: "Edit Profile Details" },
    { id: "password", label: "Edit Password" },
    { id: "email", label: "Edit Email" },
    { id: "delete", label: "Delete Account" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <button className="flex items-center p-2 cursor-pointer gap-2 text-gray-600 hover:text-gray-900 transition">
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </button>
        <Logo />
        <button className="p-2 flex gap-2 cursor-pointer hover:bg-gray-100 rounded-full">
          <Video className="text-gray-600" />
          <span>Studio</span>
        </button>
      </header>

      {/* Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={clsx(
                  "p-3 rounded-md cursor-pointer text-sm transition-all",
                  active === item.id
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                )}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Section */}
        <main className="flex-1 p-6">
          {active === "personal" && (
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Edit Profile Details
              </h2>
              <form className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Bio
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Write a short bio..."
                    className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Save Changes
                </button>
              </form>
            </section>
          )}

          {active === "password" && (
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Change Password
              </h2>
              <p className="text-gray-600 text-sm">
                (Password change form goes here)
              </p>
            </section>
          )}

          {active === "email" && (
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Update Email
              </h2>
              <p className="text-gray-600 text-sm">
                (Email update form goes here)
              </p>
            </section>
          )}

          {active === "delete" && (
            <section>
              <h2 className="text-xl font-semibold text-red-600 mb-4">
                Delete Account
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                This action is irreversible. Your videos and data will be
                permanently deleted.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                Delete Account
              </button>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default EditProfile;
