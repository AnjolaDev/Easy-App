import Logo from "../src/assets/Easy Logo.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const col = [{ color: "bg-red-500" }];
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="mb-4" />
        <h1 className="text-[37px] font-semibold text-[#08183A] font-serif mb-5">
          Easy School Management
        </h1>
        <div className="flex gap-3 mb-5">
          <div className="w-3 h-3 rounded-full bg-[#F2BA1D]"></div>
          <div className="w-3 h-3 rounded-full bg-[#08183A]"></div>
          <div className="w-3 h-3 rounded-full bg-[#F2BA1D]"></div>
          <div className="w-3 h-3 rounded-full bg-[#08183A]"></div>
          <div className="w-3 h-3 rounded-full bg-[#F2BA1D]"></div>
        </div>
        <div className="mb-4">
          <i class="fa-solid fa-circle-check text-[#08183A]"></i>
          <span className="text-[#08183A] ml-3 text-sm">
            Accept Terms & Conditions
          </span>
        </div>
        <div className="space-x-4">
          <button 
           onClick={() => {
              navigate("/Auth");
            }}
          className="border border-[#F2BA1D] rounded-full text-xs text-[#08183A] font-bold px-2 py-1">
            Already Have An Account
          </button>
          <button
            onClick={() => {
              navigate("/step1");
            }}
            className="text-[#08183A] border border-[#F2BA1D] rounded-full bg-[#F2BA1D] w-37 text-sm font-bold py-1"
          >
            NEXT <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};