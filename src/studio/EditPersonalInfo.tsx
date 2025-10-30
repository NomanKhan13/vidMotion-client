import InputField from "../ui/InputField";

const EditPersonalInfo = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2">
        Channel Customization
      </h2>

      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Cover image</h3>
          <p className="text-sm text-gray-400 mb-2">
            This image will appear across the top of your channel.
          </p>
          <div className="aspect-video flex justify-center items-center bg-gray-100 w-full max-w-80 rounded-lg mb-2 border border-gray-300">
            <img
              src="https://yt3.googleusercontent.com/XIxKGKKfmAICREBGQGk2U8FQuIohh36FRPco_pGprmOu0d6gaT-9Q0l1h6onTpcqinL_goIZwAw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              alt="cover image"
              className="aspect-video w-full object-contain"
            />
          </div>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-white text-gray-900 border border-gray-300 transition"
          >
            Edit cover image
          </button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">Profile image</h3>
          <p className="text-sm text-gray-400 mb-2">
            Your profile picture will appear where your channel is presented on
            VidMotion, such as next to your videos and comments
          </p>
          <div className="aspect-video flex justify-center items-center bg-gray-100 w-full max-w-80 rounded-lg mb-2 border border-gray-300">
            <img
              src="https://robohash.org/nomads2?set=set5"
              alt="Profile"
              className="w-28 h-28 object-cover rounded-full bg-gray-200"
            />
          </div>
          <button className="px-4 py-2 rounded-md bg-white text-gray-900 border border-gray-300 transition">
            Edit cover image
          </button>
        </div>
        <hr className="my-3 border-gray-200" />
        <h3 className="text-lg font-medium text-gray-900">
          Personal Information
        </h3>
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

        <button className="mt-6 flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-medium px-8 py-3 shadow-sm hover:bg-blue-700 active:scale-[0.98] transition w-full sm:w-auto">
          Save Changes
        </button>
      </div>
    </section>
  );
};

export default EditPersonalInfo;
