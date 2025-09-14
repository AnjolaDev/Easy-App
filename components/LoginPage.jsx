import { useNavigate } from "react-router-dom";

export default function LoginPge() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-5">
        <label className="text-gray-400 text-sm">Username or Email</label>
        <input
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none py-2 mb-3"
        />
        <label className="text-gray-400 text-sm">Password</label>
        <input
          type="password"
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
      <div className="flex justify-between items-center">
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Forgot Password
        </a>
        <button
          type="submit"
          onClick={() => {
            navigate("/Dashboard");
          }}
          className="bg-yellow-400 px-12 py-2 rounded-full text-black font-medium"
        >
          OK
        </button>
      </div>
      <div>
        <div className="mt-6">
          <button className="w-full bg-gray-100 px-6 py-2 rounded-full text-gray-700 font-medium">
            Register your School In Our Apps
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-4">
          Terms and Conditions & Privacy Policy
        </p>
      </div>
    </div>
  );
};