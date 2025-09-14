import React from "react";
import { useNavigate } from "react-router-dom";

export default function Step2() {

  const navigate = useNavigate()
  const plans = [
    { name: "Free", price: 1000, oldPrice: 1000, highLight: false },
    { name: "Basic", price: 4000, oldPrice: 1000, highLight: false },
    { name: "Standard", price: 6000, oldPrice: 1000, highLight: true },
    { name: "Premium", price: 8000, oldPrice: 1000, highLight: false },
  ];

  const features = [
    { text: "Information Features 1", available: true },
    { text: "Information Features 1", available: true },
    { text: "Information Features 1", available: true },
    { text: "Information Features 1", available: true },
    { text: "Information Features 1", available: false },
  ];

  return (
    <div>
      <div className="h-screen">
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
              <p className="w-10 h-10 rounded-full bg-yellow-400  text-white flex items-center justify-center font-bold">
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
          <div className="hidden md:flex justify-end gap-10  mr-50 relative bottom-22 mr-30 lg:m-">
            <button className="text-[#08183A] border border-[#F2BA1D] rounded-full text-sm bg-[#F2BA1D] w-37 font-bold px-2 py-1">
              Yearly
            </button>
            <button className="text-[#08183A] border border-[#F2BA1D] rounded-full  w-37 text-sm font-bold py-1">
              Monthly
            </button>
          </div>
          <div className="flex flex-col ml-10 md:flex-row justify-center gap-6 relative bottom-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`w-70 p-6 shadow-md border ${
                  plan.highLight ? "border-[#F2BA1D]" : "border-gray-200"
                }`}
              >
                {/* Title*/}
                <h2 className="text-xl font-bold text-center mb-4">
                  {plan.name}
                </h2>
                {/* Features */}
                <ul className="mb-6 space-y-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {f.available ? (
                        <i class="fa-solid fa-circle-check text-[#F2BA1D]"></i>
                      ) : (
                        <i class="fa-solid fa-circle-xmark text-[#08183A]"></i>
                      )}
                      <span className="text-[#08183A]">{f.text}</span>
                    </li>
                  ))}
                </ul>
                {/* Price */}
                <div className="text-center">
                  <span className="text-gray-400 line-through mr-2 font-semibold">
                    ₹{plan.oldPrice}
                  </span>
                  <span className="text-xl font-bold text-[#08183A]">
                    ₹{plan.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-10  mr-50 pb-5">
            <button 
             onClick={() => {
              navigate("/Auth");
            }}
            className="border border-[#F2BA1D] rounded-full text-xs text-[#08183A] w-37 font-bold px-2 py-1">
              SKIP <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button 
             onClick={() => {
              navigate("/step3");
            }}
            className="text-[#08183A] border border-[#F2BA1D] rounded-full bg-[#F2BA1D] w-37 text-sm font-bold py-1">
              NEXT <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};