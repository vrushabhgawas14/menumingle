import { Navigate } from "react-router-dom";
import LoginRegistrationForm from "../components/LoginRegForm";
import { useAuth } from "../context/authContext";
import { registerUserWithEmailAndPassword } from "../firebase/auth";
import { useState } from "react";

export default function Register() {
  const { userLoggedIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = await formData.get("userEmail")?.toString().toLowerCase();
      const password = await formData.get("userPassword")?.toString();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email?.match(emailRegex)) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }

      if (password?.length! < 6) {
        setErrorMessage("Password must be at least 6 characters long.");
        return;
      }

      await registerUserWithEmailAndPassword(email!, password!);
      setErrorMessage("User Registered Successfully!");
    } catch (error: any) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage(
          "This email is already in use. Please use a different email."
        );
      } else if (error.code === "auth/network-request-failed") {
        setErrorMessage("Network Error. Check Internet Connection!");
      } else {
        setErrorMessage("Error registering user: " + error.message);
      }
    }
  }

  if (userLoggedIn) {
    return <Navigate to={"/"} replace={true} />;
  }
  return (
    <LoginRegistrationForm
      isLogin={false}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
    />
  );
}
