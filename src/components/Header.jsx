import logo from "../assets/logo.svg";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [Open, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="container1 flex items-center justify-between gap-4 py-3 px-4 sm:px-6 lg:px-8">
      {/* Logo and Navigation */}
      <div className="flex items-center justify-between gap-6">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="w-32 sm:w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-9">
          <li className="cursor-pointer text-base text-black font-medium hover:text-blue-500 transition-colors">
            Categories
          </li>
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-3 text-base text-black font-medium hover:text-blue-500 transition-colors">
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
              className="absolute z-50 left-0 w-48 text-base text-black font-medium rounded-2xl hidden group-hover:block transition-opacity duration-300"
            >
              <a href="">
                <li className="px-4 py-2 hover:bg-blue-100 hover:rounded-t-2xl cursor-pointer transition-colors">
                  News
                </li>
              </a>
              <a href="">
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors">
                  Careers
                </li>
              </a>
              <a href="">
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer hover:rounded-b-2xl transition-colors">
                  Locations
                </li>
              </a>
            </ul>
          </li>
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-3 text-base text-black font-medium hover:text-blue-500 transition-colors">
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
              className="absolute z-50 left-0 w-48 text-base text-black font-medium rounded-2xl hidden group-hover:block transition-opacity duration-300"
            >
              <a href="">
                <li className="px-4 py-2 hover:rounded-t-2xl hover:bg-blue-100 cursor-pointer transition-colors">
                  FAQ
                </li>
              </a>
              <a href="">
                <li className="px-4 py-2 hover:rounded-b-2xl hover:bg-blue-100 cursor-pointer transition-colors">
                  Contact us
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right Section - Contact and Actions */}
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
        {/* Phone Number - Hidden on mobile */}
        <a href="tel:+1 855 420 0000" className="hidden sm:block">
          <h3 className="font-semibold text-base text-black hover:text-blue-500 transition-colors">
            +1 855 420 0000
          </h3>
        </a>

        {/* Search Icon */}
        <div className="size-10 sm:size-14 bg-[#f5f5f5] rounded-full cursor-pointer flex items-center justify-center hover:bg-yellow-300 transition-colors">
          <svg
            width="20"
            height="20"
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

        {/* Login Button */}
        <div className="hidden sm:block">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#299764] font-medium text-base sm:text-lg cursor-pointer group text-white py-3 sm:py-4 px-4 sm:px-7 rounded-[100px] flex gap-2 sm:gap-3 items-center hover:bg-[#247a52] transition-colors"
          >
            <span>Login</span>
            <svg
              className="duration-500 group-hover:translate-x-1 sm:group-hover:translate-x-2"
              width="18"
              height="18"
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
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden size-10 bg-[#f5f5f5] rounded-full cursor-pointer flex items-center justify-center hover:bg-yellow-300 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white mt-16">
          <div className="flex flex-col p-6 space-y-4">
            <a href="tel:+1 855 420 0000" className="block sm:hidden py-2">
              <h3 className="font-semibold text-base text-black">
                +1 855 420 0000
              </h3>
            </a>

            <button className="w-full bg-[#299764] text-white py-3 rounded-[100px] font-medium text-base sm:hidden">
              Login
            </button>

            <div className="border-t border-gray-200 pt-4">
              <a
                href="#"
                className="block py-3 text-base text-black font-medium border-b border-gray-100"
              >
                Categories
              </a>
              <div className="py-3 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-base text-black font-medium">
                    About Us
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="mt-2 pl-4 space-y-2">
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    News
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    Careers
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    Locations
                  </a>
                </div>
              </div>
              <div className="py-3 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-base text-black font-medium">
                    Help center
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="mt-2 pl-4 space-y-2">
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    FAQ
                  </a>
                  <a href="#" className="block py-2 text-sm text-gray-600">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {Open && (
        <div className="fixed z-50 flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] p-4">
          <div className="bg-white w-full max-w-md lg:min-w-[500px] rounded-3xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="font-semibold text-2xl lg:text-4xl text-black">
                  Login
                </h2>
                <p className="font-normal text-sm lg:text-base text-[#555] text-center">
                  Use the email and password that you login
                </p>
              </div>
              <div className="w-full">
                <form className="flex flex-col gap-4" action="">
                  <input
                    className="rounded-[82px] outline-none bg-[white] border-solid border-[#e5e7ea] border-[1.50px] py-3 lg:py-4 px-5 w-full text-sm lg:text-base"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="rounded-[82px] outline-none bg-[white] border-solid border-[#e5e7ea] border-[1.50px] py-3 lg:py-4 px-5 w-full text-sm lg:text-base"
                    type="password"
                    placeholder="Password"
                  />
                  <p className="text-end text-xs lg:text-sm text-[#555] font-medium">
                    Forgot password
                  </p>
                  <p className="font-medium text-sm lg:text-base text-center text-black cursor-pointer hover:text-blue-500">
                    I want to create an account
                  </p>
                  <button
                    type="submit"
                    className="bg-[#299764] cursor-pointer text-white text-base lg:text-lg font-medium flex gap-2 lg:gap-3 items-center justify-center py-3 lg:py-[18px] px-4 lg:px-[30px] w-full rounded-[100px] hover:bg-[#247a52] transition-colors"
                  >
                    <span>Login</span>
                    <svg
                      className="duration-500 group-hover:translate-x-1 lg:group-hover:translate-x-2"
                      width="18"
                      height="18"
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
              className="absolute right-3 top-3 size-10 lg:size-14 cursor-pointer bg-[#f5f5f5] flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="18"
                height="18"
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
    </header>
  );
};

export default Header;
