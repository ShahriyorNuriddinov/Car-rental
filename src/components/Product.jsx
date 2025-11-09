import React, { useState } from "react";
import { cars } from "../static/main";

function Product() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="container1">
      <div className="flex items-center flex-col justify-center my-6">
        <h2 className="font-semibold text-4xl text-black text-center">
          Choose the car of your dreams
        </h2>
        <p className="font-normal text-base text-black text-center mt-4">
          We provide our customers with the most incredible driving emotions.
          <br />
          That is why there are only world-class cars in our fleet
        </p>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center my-10">
        <button
          className="py-3 px-6 rounded-[100px] border-solid border-[1px] border-[#e5e7ea] cursor-pointer"
          onClick={() => setActiveButton(1)}
          style={{
            backgroundColor: activeButton === 1 ? "#299764" : "white",
            color: activeButton === 1 ? "white" : "black",
          }}
        >
          Ford Fiesta
        </button>

        <button
          className="py-3 px-6 rounded-[100px] border-solid border-[1px] border-[#e5e7ea] cursor-pointer"
          onClick={() => setActiveButton(2)}
          style={{
            backgroundColor: activeButton === 2 ? "#299764" : "white",
            color: activeButton === 2 ? "white" : "black",
          }}
        >
          Ford Fiesta
        </button>

        <button
          className="py-3 px-6 rounded-[100px] border-solid border-[1px] border-[#e5e7ea] cursor-pointer"
          onClick={() => setActiveButton(3)}
          style={{
            backgroundColor: activeButton === 3 ? "#299764" : "white",
            color: activeButton === 3 ? "white" : "black",
          }}
        >
          Ford Fiesta
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => {
          return (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-2xl p-6 group cursor-pointer "
            >
              <div className="mb-4">
                <p className="font-semibold text-2xl text-black group-hover:text-[#299764] transition-colors duration-300">
                  {car.name}
                </p>
                <p className="font-medium text-lg text-[#555] group-hover:text-black transition-colors duration-300">
                  {car.type}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
                  src={car.img}
                  alt={car.name}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <span className="flex gap-2 items-center text-black text-base font-medium group-hover:text-[#299764] transition-colors duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  >
                    <path
                      d="M10 3.125C8.27411 3.125 6.875 4.52411 6.875 6.25C6.875 7.97589 8.27411 9.375 10 9.375C11.7259 9.375 13.125 7.97589 13.125 6.25C13.125 4.52411 11.7259 3.125 10 3.125Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.66666 11.0417C4.94077 11.0417 3.54166 12.4408 3.54166 14.1667V15.1569C3.54166 15.7846 3.99657 16.3198 4.61606 16.4209C8.18175 17.0031 11.8182 17.0031 15.3839 16.4209C16.0034 16.3198 16.4583 15.7846 16.4583 15.1569V14.1667C16.4583 12.4408 15.0592 11.0417 13.3333 11.0417H13.0493C12.8955 11.0417 12.7428 11.066 12.5966 11.1137L11.8753 11.3492C10.6568 11.7471 9.34322 11.7471 8.12465 11.3492L7.40339 11.1137C7.25724 11.066 7.10447 11.0417 6.95072 11.0417H6.66666Z"
                      fill="currentColor"
                    />
                  </svg>
                  {car.seat}
                </span>

                <span className="flex gap-2 items-center text-black text-base font-medium group-hover:text-[#299764] transition-colors duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  >
                    <path
                      d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z"
                      fill="currentColor"
                    />
                  </svg>
                  {car.Automat}
                </span>

                <span className="flex gap-2 items-center text-black text-base font-medium group-hover:text-[#299764] transition-colors duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  >
                    <path
                      d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z"
                      fill="currentColor"
                    />
                  </svg>
                  {car.year}
                </span>

                <span className="flex gap-2 items-center text-black text-base font-medium group-hover:text-[#299764] transition-colors duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  >
                    <path
                      d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z"
                      fill="currentColor"
                    />
                  </svg>
                  {car.soda}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-6 items-center justify-center my-10">
        <button
          className="py-3 px-8 rounded-[100px] border-solid border-[1px] border-[#e5e7ea] cursor-pointer transition-all duration-300 hover:bg-[#299764] hover:text-white hover:border-[#299764] hover:shadow-lg hover:-translate-y-1 hover:scale-105 font-medium"
          onClick={() => setActiveButton(4)}
          style={{
            backgroundColor: activeButton === 4 ? "#299764" : "white",
            color: activeButton === 4 ? "white" : "black",
          }}
        >
          View all cars
        </button>
      </div>
    </div>
  );
}

export default Product;
