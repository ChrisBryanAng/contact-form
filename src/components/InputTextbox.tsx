const InputTextbox = ({
  id,
  label,
  value,
  onChange,
  type,
  isTouched,
  error,
}: TInput) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="font-Karla">
        {label} <span className="text-green-600 ml-2">*</span>
        <input
          id={id}
          name={id}
          type={type}
          className={`h-[50px] w-full rounded-lg p-4 mt-3 border-[1px] border-solid ${
            isTouched && error ? "border-red-error" : "border-green-600"
          } hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0`}
          value={value}
          onChange={onChange}
        />
      </label>

      {isTouched && error ? (
        <div className="text-red-error font-light mt-2">{error}</div>
      ) : null}
    </div>
  );
};

export default InputTextbox;
