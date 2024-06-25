const InputTextarea = ({
  id,
  label,
  value,
  onChange,
  isTouched,
  error,
}: TInput) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-Karla">
        {label} <span className="text-green-600 ml-2">*</span>
      </label>
      <textarea
        id={id}
        className="w-full h-[150px] md:h-[240px] lg:h-[200px] rounded-lg p-4 border-[1px] border-solid border-green-600 hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0"
        value={value}
        onChange={onChange}
      >
        {value}
      </textarea>

      {isTouched && error ? (
        <div className="text-red-error font-light">{error}</div>
      ) : null}
    </div>
  );
};

export default InputTextarea;
