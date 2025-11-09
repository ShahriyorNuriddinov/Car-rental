import logo from "../assets/logo.svg";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [Open, setIsOpen] = useState(false);
  return (
    <div className="container1 flex items-center justify-between gap-4 py-3">
      <div className="flex items-center justify-between gap-6">
        <div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="flex items-center gap-9">
          <li className="cursor-pointer text-base text-black font-medium">
            Categories
          </li>
          <li className="group relative cursor-pointer">
            <span className="flex items-center  gap-3 text-base text-black font-medium">
              About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:text-blue-500 text-black transform transition-transform duration-500 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <ul
              style={{
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.15)",
                background: "#fff",
              }}
              className="absolute z-100 left-0  w-25 text-base text-black font-medium  rounded-2xl  hidden group-hover:block transition-opacity duration-300"
            >
              <a href="">
                <li className="px-4 py-2 hover:bg-blue-100 hover:rounded-t-2xl cursor-pointer">
                  News
                </li>
              </a>
              <a href="">
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Careers
                </li>
              </a>
              <a href="">
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer hover:rounded-b-2xl ">
                  Locations
                </li>
              </a>
            </ul>
          </li>
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-3 text-base text-black font-medium">
              Help center
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:text-blue-500 text-black transform transition-transform duration-500 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <ul
              style={{
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.15)",
                background: "#fff",
              }}
              className="absolute z-100 left-0  w-28 text-base text-black font-medium rounded-2xl hidden group-hover:block transition-opacity duration-300"
            >
              <a href="">
                <li className="px-4 py-2 hover:rounded-t-2xl hover:bg-blue-100 cursor-pointer">
                  FAQ
                </li>
              </a>
              <a href="">
                <li className="px-4 py-2 hover:rounded-b-2xl hover:bg-blue-100 cursor-pointer">
                  Contact us
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex items-center ju gap-8">
        <a href="tel:+1 855 420 0000">
          <h3 className="font-semibold text-base text-black">
            +1 855 420 0000
          </h3>
        </a>
        <div className="size-14 bg-[#f5f5f5] rounded-full cursor-pointer flex items-center justify-center hover:bg-yellow-300">
          <svg
            className=""
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3.20825C6.69676 3.20825 3.20831 6.6967 3.20831 10.9999C3.20831 15.3031 6.69676 18.7916 11 18.7916C15.0495 18.7916 18.377 15.7027 18.7558 11.7523C18.7734 11.5684 18.6789 11.3919 18.5162 11.3046C18.3534 11.2173 18.1541 11.2362 18.0107 11.3526C17.2227 11.9921 16.2192 12.3749 15.125 12.3749C12.5937 12.3749 10.5416 10.3229 10.5416 7.79158C10.5416 6.28816 11.265 4.9538 12.3847 4.11728C12.5327 4.00667 12.5999 3.81799 12.555 3.63873C12.51 3.45947 12.3619 3.32472 12.1792 3.29697C11.7944 3.23852 11.4006 3.20825 11 3.20825Z"
              fill="#555555"
            />
          </svg>
        </div>
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#299764] font-medium text-lg cursor-pointer group text-white py-4 px-7 rounded-[100px] flex gap-3 items-center"
          >
            <span>Login</span>
            <svg
              className="duration-500  group-hover:translate-x-2 "
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3125 17.4166C10.3125 17.0369 10.6203 16.7291 11 16.7291H16.5C16.6265 16.7291 16.7291 16.6265 16.7291 16.4999L16.7291 5.49992C16.7291 5.37335 16.6265 5.27075 16.5 5.27075L11 5.27075C10.6203 5.27075 10.3125 4.96295 10.3125 4.58325C10.3125 4.20356 10.6203 3.89575 11 3.89575H16.5C17.3859 3.89575 18.1041 4.61396 18.1041 5.49992V16.4999C18.1041 17.3859 17.3859 18.1041 16.5 18.1041H11C10.6203 18.1041 10.3125 17.7963 10.3125 17.4166Z"
                fill="white"
              />
              <path
                d="M3.20831 12.0222C3.20831 12.5285 3.61872 12.9389 4.12498 12.9389H8.5763C8.59732 13.2647 8.62363 13.5902 8.65524 13.9154L8.68243 14.1952C8.72664 14.65 9.20968 14.9225 9.62183 14.7249C11.2974 13.9219 12.8143 12.8231 14.0995 11.4812L14.127 11.4525C14.3718 11.1969 14.3718 10.7937 14.127 10.5381L14.0995 10.5094C12.8143 9.16753 11.2974 8.06866 9.62183 7.26564C9.20969 7.06812 8.72664 7.34055 8.68243 7.79544L8.65524 8.0752C8.62363 8.40037 8.59732 8.72592 8.5763 9.05173L4.12498 9.05173C3.61872 9.05173 3.20831 9.46214 3.20831 9.9684V12.0222Z"
                fill="white"
              />
            </svg>
          </button>
          {Open && (
            <div className="fixed z-100 flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
              <div className="bg-white h-[483px] min-w-[800px] rounded-3xl relative">
                <div className="flex flex-col gap-10">
                  <div className="flex items-center justify-center flex-col gap-2">
                    <h2 className=" font-semibold text-4xl text-black">
                      Login
                    </h2>
                    <p className="font-normal text-base text-[#555]">
                      Use the email and password that you login
                    </p>
                  </div>
                  <div className="w-[90%] mx-auto">
                    <form className="flex flex-col gap-6" action="">
                      <input
                        className="rounded-[82px] outline-none bg-[white] border-solid border-[#e5e7ea] border-[1.50px] py-4 px-5 w-full"
                        type="email"
                        placeholder="Email"
                      />
                      <input
                        className="rounded-[82px] mt-4 outline-none bg-[white] border-solid border-[#e5e7ea] border-[1.50px] py-4 px-5 w-full"
                        type="password"
                        placeholder="Password"
                      />
                      <p className="text-end text-sm text-[#555] font-medium">
                        Forgot password
                      </p>
                      <p className="font-medium text-base text-center text-black">
                        I want to create an account
                      </p>
                      <button
                        type="submit"
                        className="bg-[#299764] cursor-pointer text-white text-lg font-medium flex gap-3 items-center justify-center py-[18px] px-[30px] w-full rounded-[100px]"
                      >
                        <span>Login</span>
                        <svg
                          className="duration-500  group-hover:translate-x-2 "
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3125 17.4166C10.3125 17.0369 10.6203 16.7291 11 16.7291H16.5C16.6265 16.7291 16.7291 16.6265 16.7291 16.4999L16.7291 5.49992C16.7291 5.37335 16.6265 5.27075 16.5 5.27075L11 5.27075C10.6203 5.27075 10.3125 4.96295 10.3125 4.58325C10.3125 4.20356 10.6203 3.89575 11 3.89575H16.5C17.3859 3.89575 18.1041 4.61396 18.1041 5.49992V16.4999C18.1041 17.3859 17.3859 18.1041 16.5 18.1041H11C10.6203 18.1041 10.3125 17.7963 10.3125 17.4166Z"
                            fill="white"
                          />
                          <path
                            d="M3.20831 12.0222C3.20831 12.5285 3.61872 12.9389 4.12498 12.9389H8.5763C8.59732 13.2647 8.62363 13.5902 8.65524 13.9154L8.68243 14.1952C8.72664 14.65 9.20968 14.9225 9.62183 14.7249C11.2974 13.9219 12.8143 12.8231 14.0995 11.4812L14.127 11.4525C14.3718 11.1969 14.3718 10.7937 14.127 10.5381L14.0995 10.5094C12.8143 9.16753 11.2974 8.06866 9.62183 7.26564C9.20969 7.06812 8.72664 7.34055 8.68243 7.79544L8.65524 8.0752C8.62363 8.40037 8.59732 8.72592 8.5763 9.05173L4.12498 9.05173C3.61872 9.05173 3.20831 9.46214 3.20831 9.9684V12.0222Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
                <button
                  className="absolute right-5 top-5 size-14 cursor-pointer bg-[#f5f5f5] flex items-center justify-center rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.727 8.24517C14.9955 7.97668 14.9955 7.54138 14.727 7.2729C14.4585 7.00441 14.0232 7.00441 13.7547 7.2729L10.9999 10.0277L8.24518 7.2729C7.97669 7.00441 7.54139 7.00441 7.27291 7.2729C7.00442 7.54138 7.00442 7.97668 7.27291 8.24517L10.0277 10.9999L7.2729 13.7547C7.00441 14.0232 7.00441 14.4585 7.2729 14.727C7.54138 14.9955 7.97668 14.9955 8.24517 14.727L10.9999 11.9722L13.7547 14.727C14.0232 14.9955 14.4585 14.9955 14.727 14.727C14.9955 14.4585 14.9955 14.0232 14.727 13.7547L11.9722 10.9999L14.727 8.24517Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
