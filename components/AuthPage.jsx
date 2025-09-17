import { useState } from "react";
import LoginPge from "./LoginPage";
import ResgisterPage from "./RegisterPage";
import FormImg from "../src/assets/Form image.png";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="h-screen flex justify-center items-center bg-[url(../src/assets/Form-Bg.png)] bg-cover bg-center">
      <div className="flex flex-col border border-none md:border border-white flex-row h-fit w-fit rounded-lg">
        
        <div>
          <img src={FormImg} alt="Form Image" className="h-135 w-150" />
        </div>
        <div className=" shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_6px_20px_rgba(0,0,0,0.19)] sm:px-8 mx-auto sm:w-3/4 md:w-1/2 max-w-md  font-sans bg-white flex flex-col justify-center overflow-hidden rounded-r ">
          <div className=" flex items-center justify-center bg-gray-100">
            <div className="bg-white  w-full max-w-md p-8">
              {/* Tabs */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`px-6 py-2 rounded-full font-medium ${
                    activeTab === "login"
                      ? "bg-yellow-400 text-black"
                      : "text-gray-500"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className={`px-6 py-2 rounded-full font-medium ${
                    activeTab === "register"
                      ? "bg-yellow-400 text-black"
                      : "text-gray-600"
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-1">Welcome</h2>
              <p className="text-gray-500 mb-6">
                {activeTab === "login"
                  ? "Please login to your account"
                  : "Please register your account"}
              </p>

              {/* Form */}
              <div className="space-y-4">
                {activeTab === "login" && <LoginPge />}

                {activeTab === "register" && <ResgisterPage />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};