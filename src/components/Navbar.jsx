import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="text-red-500">
        <p>
          <span className="font-semibold text-gray-800">User: </span>{" "}
          {user && user.email}
        </p>
      </div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="">
          {user && user?.email ? (
            <div className="flex gap-2">
              <p className="pt-3 font-semibold text-rose-500">
                {user.displayName}
              </p>
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-outline btn-error">
            Sign Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-outline btn-error">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
