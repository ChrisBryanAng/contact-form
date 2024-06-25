const InputCheckbox = ({ id, label, onChange, isTouched, error }: TInput) => {
  return (
    <div className="flex flex-col justify-center gap-1 my-7">
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          className="w-[18px] cursor-pointer text-green-600 focus:ring-green-600"
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className="font-Karla font-light text-base ml-5 cursor-pointer"
        >
          {label} <span className="text-green-600 ml-2">*</span>
        </label>
      </div>

      {isTouched && error ? (
        <div className="text-red-error font-light">{error}</div>
      ) : null}
    </div>
  );
};

export default InputCheckbox;
