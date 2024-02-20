import { useState } from "react";
import accordionData from "../db/accordion";
import { plus } from "../_assets/_index";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggleAccordion = (id) => {
    setIsOpen(id);
  };

  return (
    <div className="bg-black">
      {accordionData.map((item) => {
        return (
          <div key={item.id} className="flex text-[#fcfcfc]">
            <div className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer bg-[#414141] px-3 sm:px-6"
                onClick={() => toggleAccordion(item.id)}
              >
                <h3 className="text-[1.125rem] md:text-[1.5rem] py-3 sm:py-6">
                  {item.title}
                </h3>
                <span
                  className={`w-10 h-10 text-white transition-transform duration-300 ${
                    isOpen === item.id ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <img src={plus} alt="icon plus" />
                </span>
              </div>
              <div
                className={`text-[1.125rem] md:text-[1.5rem] text-white mt-[1px] mb-1 sm:mb-2 transition-all duration-300 grid bg-[#414141] px-6 ${
                  isOpen === item.id ? "grid-rows-[1fr] p-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
