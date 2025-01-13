import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { logoutUser } from "../firebase/auth";

export default function Profile() {
  const { user, userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center h-[40vh] space-y-4">
          <header className="text-3xl">
            Hello {user ? user.email : "Guest"}
          </header>
          <button
            onClick={logoutUser}
            className="bg-slate-900 text-white p-1 px-4 hover:bg-slate-950 text-xl rounded-lg"
          >
            LogOut
          </button>
        </div>
      </main>
    </>
  );
}
