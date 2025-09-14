import { useNavigate } from "react-router-dom";

export default function Step4() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="">
        <h1 className="text-[50px] ml-20 font-bold text-[#08183A]">
          Setup your Acccount
        </h1>
        <div className="ml-25 flex justify-between  w-100 mb-15 relative">
          <div className="absolute top-5 left-0 w-full h-1 bg-yellow-400 -z-10"></div>
          <div className="">
            <div className=" sticky w-10 h-10 rounded-full bg-[#08183A] text-white flex items-center justify-center font-bold">
              1
            </div>
            <p className="mt-2 text-sm relative">Basic Informatin</p>
          </div>
          <div className=" relative flex flex-col items-center">
            <p className="w-10 h-10 rounded-full bg-[#08183A]   text-white flex items-center justify-center font-bold">
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
            <p className="w-10 h-10 rounded-full  bg-yellow-400 text-white flex items-center justify-center font-bold">
              4
            </p>
            <p className="mt-2 text-sm">Finish</p>
          </div>
        </div>
        <div className="ml-20 flex flex-col mb-10">
          <h1 className="text-3xl font-bold text-[#08183A] mb-12">
            Almost Done
          </h1>
          <input
            type="text"
            placeholder="Enter licence Number"
            className="w-85 text-sm font-semibold px-4 py-3 border border-gray-400 mb-12"
          />
          <button className="border-2 border-[#F2BA1D] rounded-full text-xs text-yellow-500 w-37 font-bold px-2 py-2 mb-8">
            ACTIVATE
          </button>
          <p className="text-xs text-gray-400 font-semibold">Check your Mail and paste code. Don't forget to check spam folder.</p>
        </div>
        <div className="flex justify-end gap-10  mr-50">
          <button 
          onClick={() => {
              navigate("/Auth");
            }}
          className="border-2 border-[#F2BA1D] rounded-full text-xs text-yellow-500  w-37 font-bold px-2 py-2">
            SKIP <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button 
           onClick={() => {
              navigate("/Auth");
            }}
          className="text-[#08183A] border border-[#F2BA1D] rounded-full bg-[#F2BA1D] w-37 text-sm font-bold py-2">
            NEXT <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};