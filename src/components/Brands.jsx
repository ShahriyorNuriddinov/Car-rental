import React from "react";
import { brands } from "../static/main";

const Brands = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container1">
        <h2 className="text-[32px] font-bold text-center text-[#1B1B1B] mb-12">
          More than 50 brands of cars
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-center">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
