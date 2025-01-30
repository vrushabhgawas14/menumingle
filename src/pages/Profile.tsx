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
        <div className="flex flex-col justify-center items-center py-10 space-y-4">
          <img
            src={user.photoURL || require("../assets/images/userImage.png")}
            alt="UserImage"
            className="w-40 h-40 border-2 border-red-950 rounded-2xl"
          />
          <h1 className="text-3xl sm:text-2xl">Hello {user.displayName}</h1>
          <h2 className="text-3xl sm:text-xl">{user.email}</h2>
          <button
            onClick={logoutUser}
            className="normalButton text-white p-1 px-4 hover:bg-slate-950 text-xl rounded-lg"
          >
            LogOut
          </button>
        </div>
      </main>
    </>
  );
}
