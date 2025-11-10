import React from "react";
import { FaDesktop, FaShieldAlt, FaHeadset, FaRegClock } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      id: 1,
      icon: <FaDesktop className="w-12 h-12 text-[#34A853]" />,
      title: "Book online, pay online",
      description:
        "Complete the booking process A-Z, with our easy online system",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="w-12 h-12 text-[#34A853]" />,
      title: "Guaranteed car reservation",
      description:
        "When you book with Car rental, you can be confident your car will be waiting for you",
    },
    {
      id: 3,
      icon: <FaHeadset className="w-12 h-12 text-[#34A853]" />,
      title: "Unparalleled customer service",
      description:
        "We're here to help. We pride ourselves in our customer service",
    },
    {
      id: 4,
      icon: <FaRegClock className="w-12 h-12 text-[#34A853]" />,
      title: "No reservation or booking fees",
      description:
        "No cancellation fees if cancelled 24 hours prior to booking time",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container1">
        <div className="text-center mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1B1B1B] mb-4">
            Unparalleled service
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-3xl mx-auto">
            Whether you are looking for Newark Airport car rental, an insurance
            replacement vehicle or minivan to take on vacation Car rental has it
            all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#f5f5f5] rounded-2xl p-8 flex flex-col items-start"
            >
              <div className="flex items-center justify-between w-full">
                <h3 className="font-medium text-3xl text-black">
                  {service.title}
                </h3>
                <div className="mb-6">{service.icon}</div>
              </div>
              <p className="font-normal text-[#555] text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
