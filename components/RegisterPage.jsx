import { useNavigate } from "react-router-dom";

export default function ResgisterPage() {
  const navigate = useNavigate();
  return (
    <div>
      <form className="mb-5">
        <label className="text-gray-400 text-sm">Enter Email Address</label>
        <input
          type="email"
          className="w-full border-b border-gray-300 focus:outline-none py-2 mb-3"
        />
        <label className="text-gray-400 text-sm ">
          Enter Your organisation Name
        </label>
        <input
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none py-2 mb-3"
        />
        <label className="text-gray-400 text-sm">Enter Your School Name</label>
        <input
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </form>
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={() => {
            navigate("/Dashboard");
          }}
          className="flex justify-center w-30 bg-yellow-400 px-6 py-2 rounded-full text-black font-medium"
        >
          Register
        </button>
      </div>
    </div>
  );
};