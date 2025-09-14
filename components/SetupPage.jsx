import { useNavigate } from "react-router-dom";



export default function Step1() {
  const navigate = useNavigate()
  return (
    <div className="h-screen">
      <div className="ml-20">
        <h1 className="text-[50px] font-bold text-[#08183A]">
          Setup your Acccount
        </h1>
        <div className="flex justify-between ml-5  w-100 mb-15 relative">
          <div className="absolute top-5 left-0 w-full h-1 bg-yellow-400 -z-10"></div>
          <div className="">
            <div className=" sticky w-10 h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold">
              1
            </div>
            <p className="mt-2 text-sm relative">Basic Informatin</p>
          </div>
          <div className=" relative flex flex-col items-center">
            <p className="w-10 h-10 rounded-full bg-[#08183A] text-white flex items-center justify-center font-bold">
              2
            </p>
            <p className="mt-2 text-sm">Choose Plan</p>
          </div>
          <div className=" relative flex flex-col items-center">
            <p className="w-10 h-10 rounded-full bg-[#08183A] text-white flex items-center justify-center font-bold">
              3
            </p>
            <p className="mt-2 text-sm">Select Payment</p>
          </div>
          <div className=" relative flex flex-col items-center">
            <p className="w-10 h-10 rounded-full bg-[#08183A] text-white flex items-center justify-center font-bold">
              4
            </p>
            <p className="mt-2 text-sm">Finish</p>
          </div>
        </div>
        <form className="grid grid-col md:grid-cols-2 max-w-180 gap-10 mb-30">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-200 py-2 px-4 rounded-sm w-85"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-200 py-2 px-4 rounded-sm w-85"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-200 py-2 px-4 rounded-sm w-85"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-200 py-2 px-4 rounded-sm w-85"
          />
          <input
            type="text"
            placeholder="Your Role"
            className="border border-gray-200 py-2 px-4 rounded-sm w-85"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-200 py-2 px-4 rounded-sm w-85"
          />
        </form>

        <div className="flex justify-end gap-10 relative bottom-5 mr-50">
          <button 
           onClick={() => {
              navigate("/Auth");
            }}
          className="border border-[#F2BA1D] rounded-full text-xs text-[#08183A] w-37 font-bold px-2 py-1">
            SKIP <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button 
           onClick={() => {
              navigate("/step2");
            }}
          className="text-[#08183A] border border-[#F2BA1D] rounded-full bg-[#F2BA1D] w-37 text-sm font-bold py-1">
            NEXT <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};