import AuthPage from "../components/AuthPage";
import LandingPage from "../components/LandingPage";
import Step1 from "../components/SetupPage";
import Step2 from "../components/SetAccountPage";
import Step3 from "../components/PaymentPage";
import Step4 from "../components/FinishPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/step4" element={<Step4 />} />
      <Route path="/Auth" element={<AuthPage />} />
    </Routes>
  );
};