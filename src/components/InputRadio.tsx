const InputRadio = ({ id, name, label, value, onChange, selected }: TInput) => {
  return (
    <div
      className={`relative ${
        selected === value ? "bg-green-200" : "bg-white"
      } w-full h-[50px] border-[1px] focus:bg-green-200 border-solid border-green-600 hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 rounded-lg p-4 flex items-center`}
    >
      <label
        htmlFor={id}
        className="flex flex-row-reverse items-center gap-4 font-Karla font-light text-lg cursor-pointer"
      >
        {label}
        <input
          id={id}
          type="radio"
          name={name}
          className="w-5 h-5 cursor-pointer appearance-none focus:ring-green-600 text-green-600"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default InputRadio;
