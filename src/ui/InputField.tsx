export default function InputField({
  label,
  placeholder,
  type,
  dataFor,
  append,
}: {
  label: string;
  placeholder: string;
  type: string;
  dataFor: string;
  append?: string;
}) {
  if (type === "textarea") {
    return (
      <div>
        <label
          htmlFor={dataFor}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[textarea:focus-within]:-outline-offset-2 has-[textarea:focus-within]:outline-blue-600">
            <textarea
              id={dataFor}
              name={dataFor}
              placeholder={placeholder}
              rows={4}
              className="block w-full resize-none py-2 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
            ></textarea>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <label
        htmlFor={dataFor}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-lg bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-600">
          {append && (
            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              {append}
            </div>
          )}
          <input
            id={dataFor}
            name={dataFor}
            type={type}
            placeholder={placeholder}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  );
}
