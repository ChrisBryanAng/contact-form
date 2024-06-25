import { FaRegCheckCircle } from "react-icons/fa";

const Notification = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="flex flex-col gap-2 bg-gray-900 p-4 rounded-lg">
      <div className="flex items-center gap-2">
        <FaRegCheckCircle />
        <p className="tracking-wider font-bold">{title}</p>
      </div>
      <p className="tracking-wider font-light text-sm">{body}</p>
    </div>
  );
};

export default Notification;
