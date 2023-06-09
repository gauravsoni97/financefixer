import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/rupeelogo.png";
import googleimg from "../../assets/Images/google.png";
import facebookImg from "../../assets/Images/facebook.png";

import { auth, provider } from "../../Utils/firebase";

import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [value, setValue] = useState("");

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);

      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {value? "i am logged in " : 
      
      <section className=" h-screen max-w-md w-screen flex items-center justify-center  bg-gray-50 dark:bg-gray-900">
        <div className="flex w-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-7 h-7 mr-2" src={logo} alt="logo" />
            Finance Fixer
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
              </h1>
              <div>
                <ul className="my-4 space-y-3">
                  <li>
                    <a
                      onClick={handleGoogleClick}
                      href="#"
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <img
                        className="w-6 h-6"
                        src={googleimg}
                        alt="Google Img"
                      />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Sign in with Google
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <img
                        className="w-6 h-6"
                        src={facebookImg}
                        alt="Google Img"
                      />

                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Sign in with Facebook
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      }
    </div>
  );
};

export default Login;
