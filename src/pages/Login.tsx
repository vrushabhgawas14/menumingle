import LoginRegistrationForm from "../components/LoginRegForm";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { loginUserWithEmailAndPassword } from "../firebase/auth";
import { useState } from "react";

export default function Login() {
  const { userLoggedIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = await formData.get("userEmail")?.toString().toLowerCase();
      const password = await formData.get("userPassword")?.toString();

      await loginUserWithEmailAndPassword(email!, password!);

      setErrorMessage("User Login Successfully!");
    } catch (error: any) {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        setErrorMessage("Email or Password is Incorrect.");
      } else if (error.code === "auth/weak-password") {
        setErrorMessage("Password length should be atleast 6 characters");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password. Please try again.");
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
      isLogin={true}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
    />
  );
}
