import React from "react";
import "../App.css";
function navbar() {
  return (
    <div className="container">
      <nav class="navbar justify-content-between">
        <div>
        <svg className="navbar-brand" width="40" height="40" viewBox="0 0 81 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.5 50.3879C48.5703 45.7195 54 36.9938 54 27C54 17.0062 48.5703 8.28055 40.5 3.61212C44.4713 1.31482 49.0821 0 54 0C68.9117 0 81 12.0883 81 27C81 41.9117 68.9117 54 54 54C49.0821 54 44.4713 52.6852 40.5 50.3879ZM40.5 50.3879C36.5287 52.6852 31.9179 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C31.9179 0 36.5287 1.31482 40.5 3.61212C32.4297 8.28055 27 17.0062 27 27C27 36.9938 32.4297 45.7195 40.5 50.3879Z" fill="#7F56D9"/>
        </svg>
        <a class="navbar-brand" href="/">E-USTAAD</a>
        </div>
        
        <form className="form-inline UI">
        <button className="btn my-2 my-sm-0 " type="submit">
            Register
          </button>
        <button className="btn my-2 my-sm-0 " type="submit">
            Sign in
          </button>
          <button className="btn Outline rounded-pill my-2 my-sm-0 mx-2" type="submit">
            Become a teacher
            </button>
        </form>
      </nav>

    </div>
  );
}

export default navbar;
