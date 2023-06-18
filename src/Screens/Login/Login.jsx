import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/rupeelogo.png";
import googleimg from "../../assets/Images/google.png";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="h-screen max-w-sm w-screen flex items-start justify-center p-2 max-w-sm max-h-screen mx-auto ">
      <section className=" h-screen max-w-sm w-screen flex items-center justify-center  bg-gray-50 dark:bg-gray-900">
        <div className="flex w-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-7 h-7 mr-2" src={logo} alt="logo" />
            Finance Fixer
          </span>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <ul className="my-4 space-y-3">
                  <li>
                    <span
                      onClick={handleGoogleSignIn}
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <img
                        className="w-6 h-6"
                        src={googleimg}
                        alt="Google Img"
                      />
                      <span className="flex-1 ml-3 whitespace-nowrap cursor-pointer">
                        Sign in with Google
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
