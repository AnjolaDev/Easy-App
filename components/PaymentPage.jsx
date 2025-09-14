import React, { useState } from "react";
import Gpay from "../src/assets/Google_Pay_Logo.svg.png";
import Visa from "../src/assets/Visa.png";
import Paytm from "../src/assets/Paytm.webp";
import { useNavigate } from "react-router-dom";
export default function Step3() {

  const navigate = useNavigate()
  const [payment, setPayment] = useState("gpay");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    cardNumber: "",
    city: "",
    cvv: "",
    expiryDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment information submitted successfully!");
    // Here you would typically process the payment
  };
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
            <p className="w-10 h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold">
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
        <div className="flex gap-10 md:gap-40">
          <div>
            <h2 className="text-2xl text-[#08183A] font-semibold ml-20 mb-9">
              Choose Payment Method
            </h2>
            <form action="" className="flex flex-col ml-20">
              <label className="flex gap-4 items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="gpay"
                  checked={payment === "gpay"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="appearance-none w-4 h-4 bg-gray-400 border border-gray-400 rounded-full checked:bg-yellow-400 checked:ring-4 checked:ring-black"
                />
                <span>
                  <img src={Gpay} alt="" className="w-17 h-9" />
                </span>
              </label>
              <label className="flex gap-2 items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="paytm"
                  checked={payment === "paytm"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="appearance-none w-4 h-4 bg-gray-400 border border-gray-400 rounded-full checked:bg-yellow-400 checked:ring-4 checked:ring-black"
                />
                <span>
                  <img src={Paytm} alt="" className="w-20 h-15" />
                </span>
              </label>
              <label className="flex gap-3 items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="visa"
                  checked={payment === "visa"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="appearance-none w-4 h-4 bg-gray-400 border border-gray-400 rounded-full checked:bg-yellow-400 checked:ring-4 checked:ring-black"
                />
                <span>
                  <img src={Visa} alt="" className="w-20 h-5" />
                </span>
              </label>
            </form>
          </div>
          <div className="p-4">
            {payment === "gpay" && (
              <div className="space-x-10 relative top-12">
                <input
                  type="text"
                  placeholder="Enter Your UPI ID"
                  className="w-85 text-sm font-semibold p-2 border border-gray-400 mb-2"
                />
                <button className="border-2 border-[#F2BA1D] rounded-full text-xs text-yellow-500 w-37 font-bold px-2 py-2">
                  CONFIRM
                </button>
                <p className="text-xs font-semibold text-gray-400 mb-50">
                  Check Your Phone and confirm to Pay the Payment
                </p>
              </div>
            )}

            {payment === "paytm" && (
              <div className="relative top-10">
                <input
                  type="text"
                  placeholder="Enter Your UID"
                  className="w-full p-2 border rounded-lg mb-2"
                />
                <button className="border-2 border-[#F2BA1D] rounded-full text-xs text-yellow-500 w-37 font-bold px-2 py-2 mb-40 mt-2">
                  CONFIRM
                </button>
              </div>
            )}

            {payment === "visa" && (
              <div className="relative bottom-10">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label className=" text-sm font-medium text-gray-700 mb-1">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-85 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </label>
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className=" text-sm font-medium text-gray-700 mb-1">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-85  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </label>
                    </div>

                    {/* Address */}
                    <div>
                      <label className=" text-sm font-medium text-gray-700 mb-1">
                        <textarea
                          name="address"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-85  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </label>
                    </div>

                    {/* Country */}
                    <div>
                      <label className=" text-sm font-medium text-gray-700 mb-1">
                        <input
                          type="text"
                          name="country"
                          placeholder="Country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-85  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </label>
                    </div>

                    {/* City */}
                    <div>
                      <label className=" text-sm font-medium text-gray-700 mb-1">
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-85  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </label>
                    </div>
                    {/* Card Number */}
                    <div>
                      <label className=" text-sm font-medium text-gray-700 mb-1">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-85  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Card Number"
                          required
                        />
                      </label>
                    </div>

                    {/* CvV */}
                    <div>
                      <label className=" text-sm font-medium text-gray-700 mb-1">
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-85  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="CVV"
                          required
                        />
                      </label>
                    </div>

                    {/* Expiry Date */}
                    <div>
                      <label className=" text-sm font-medium text-gray-700 mb-1">
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-85  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Expiry Date"
                          required
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
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
              navigate("/step4");
            }}
          className="text-[#08183A] border border-[#F2BA1D] rounded-full bg-[#F2BA1D] w-37 text-sm font-bold py-2">
            NEXT <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};