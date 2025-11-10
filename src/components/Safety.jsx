import React from "react";
import { FaSprayCan, FaMask, FaClipboardCheck } from "react-icons/fa";
import img from "../assets/man.png";
const Safety = () => {
  const safetyMeasures = [
    {
      id: 1,
      icon: <FaSprayCan className="w-8 h-8 text-[#1B1B1B]" />,
      title: "Every car is thoroughly sanitized and cleaned",
    },
    {
      id: 2,
      icon: <FaMask className="w-8 h-8 text-[#1B1B1B]" />,
      title: "All of our employees wear masks",
    },
    {
      id: 3,
      icon: <FaClipboardCheck className="w-8 h-8 text-[#1B1B1B]" />,
      title: "We stay up to date with all protocol from the CDC",
    },
  ];

  return (
    <section className="">
      <div className="container1 border-solid border-[1px] border-[#e5e7ea] p-5 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1B1B1B] mb-6">
              Car rental keeps you safe
            </h2>
            <p className="text-[#6B6B6B] text-lg mb-12 leading-relaxed">
              The safety of our employees and renters is our number one
              priority. In addition to being confident your vehicle is cleaned
              and sanitized every time you rent, you can also feel confident
              that we will take every opportunity to enhance the health and
              safety measures currently practiced in our operations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {safetyMeasures.map((measure) => (
                <div
                  key={measure.id}
                  className="bg-[#F8F8F8] rounded-2xl p-6 flex flex-col  items-end text-center"
                >
                  <div className="mb-4">{measure.icon}</div>
                  <p className="text-base font-medium text-black ">
                    {measure.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square flex rounded-full bg-[#34A853] overflow-hidden">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
