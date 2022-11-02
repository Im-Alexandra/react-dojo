import React from "react";
import "./Navbar.css";
import Temple from "../assets/temple.svg";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <Link className="logo" to="/">
            <img alt="dojo logo" src={Temple} />
            <span>The Dojo</span>
          </Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        )}
        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Loading
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
