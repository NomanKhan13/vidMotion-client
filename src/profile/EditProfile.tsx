import { Video, ArrowLeft } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import Logo from "../ui/Logo";
import InputField from "../ui/InputField";

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
      <header className="flex justify-between p-3 sm:px-6 shadow sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <button
            className="hover:bg-gray-100 transition rounded p-2 cursor-pointer flex gap-2 items-center justify-center"
            // onClick={onToggleSidebar}
          >
            <ArrowLeft size={20} /> <span>Back</span>
          </button>
        </div>
        <Logo />

        <div className="flex gap-2 self-center">
          <button className="rounded border border-gray-200 hover:bg-gray-100 cursor-pointer transition p-2 flex gap-2 items-center justify-center">
            <Video size={20} /> <span>Studio</span>
          </button>
        </div>
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
                  "p-3 rounded-md cursor-pointer text-sm transition-all font-medium",
                  active === item.id
                    ? "bg-blue-50 text-blue-600"
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
                  <label className="block text-sm/6 font-medium text-gray-900 mb-2">
                    Profile Picture
                  </label>
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
                      <img
                        src="https://robohash.org/nomads"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="px-4 py-2 rounded-md bg-white text-gray-900 border border-gray-300 transition">
                      Change profile picture
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm/6 font-medium text-gray-900 mb-2">
                    Cover Picture
                  </label>
                  <div className="flex flex-col items-start gap-4">
                    <div className="aspect-16/5 rounded-lg overflow-hidden bg-gray-300 shadow-sm">
                      <img
                        src="https://yt3.googleusercontent.com/XIxKGKKfmAICREBGQGk2U8FQuIohh36FRPco_pGprmOu0d6gaT-9Q0l1h6onTpcqinL_goIZwAw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                        alt="Channel cover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="px-4 py-2 rounded-md bg-white text-gray-900 border border-gray-300 transition">
                      Change cover picture
                    </button>
                  </div>
                </div>
                <InputField
                  label="Username"
                  placeholder="johndoe123"
                  type="text"
                  dataFor="username"
                  append="@"
                />
                <InputField
                  label="Full Name"
                  placeholder="John Doe"
                  type="text"
                  dataFor="fullName"
                />
                <InputField
                  label="Bio"
                  placeholder="Write a short bio..."
                  type="textarea"
                  dataFor="bio"
                />

                <button className="flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 lg:px-8 py-2 lg:py-3 shadow-md shadow-blue-200 tracking-wide cursor-pointer hover:opacity-90 transition">
                  Save changes
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
