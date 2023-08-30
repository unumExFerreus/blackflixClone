import React from "react";
import { Accordion } from "flowbite";

const AccordionCustom = () => {
  return (
    <div className="bg-black">
      <div className="h-full text-center sm:text-left min-h-[auto] py-14 sm:py-[4.5rem] justify-center m-auto items-center max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)] xxxl:max-w-[calc(66.6%-6rem)]">
        <div className="w-full">
          <h2 className="flex mb-[1.5rem] justify-center text-white text-[2rem] md:text-[3rem] fontb leading-[2.5rem] sm:leading-[3.75rem] select-none">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          <div className="mx-auto select-none">
            <div className="grid divide-y-reverse transition-all duration-700 divide-neutral-200 mx-auto">
              <div className="">
                <details className="group mb-2 flex items-center justify-between w-full text-left lg:text-[1.5rem] text-[1.125rem] text-white">
                  <summary className="font-medium cursor-pointer list-none flex items-center justify-between w-full p-6 text-left lg:text-[1.5rem] text-[1.125rem] bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white ">
                    <span>What can I watch on Netflix?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-white group-open lg:text-[1.5rem] text-[1.125rem] text-left p-5 max-h-[75rem] py-6 bg-[#2d2d2d] focus:bg-[#2d2d2d] list-none ">
                    Netflix has an extensive library of feature films,
                    documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </details>

                <details className="group mb-2 flex items-center justify-between w-full text-left lg:text-[1.5rem] text-[1.125rem] text-white">
                  <summary className="font-medium cursor-pointer list-none flex items-center justify-between w-full p-6 text-left lg:text-[1.5rem] text-[1.125rem] bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white ">
                    <span>What is Netflix?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-white group-open lg:text-[1.5rem] text-[1.125rem] text-left p-5 max-h-[75rem] py-6 bg-[#2d2d2d] focus:bg-[#2d2d2d] list-none ">
                    Netflix has an extensive library of feature films,
                    documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </details>

                <details className="group mb-2 flex items-center justify-between w-full text-left lg:text-[1.5rem] text-[1.125rem] text-white">
                  <summary className="font-medium cursor-pointer list-none flex items-center justify-between w-full p-6 text-left lg:text-[1.5rem] text-[1.125rem] bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white ">
                    <span>How much does Netflix cost?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-white group-open lg:text-[1.5rem] text-[1.125rem] text-left p-5 max-h-[75rem] py-6 bg-[#2d2d2d] focus:bg-[#2d2d2d] list-none ">
                    Netflix has an extensive library of feature films,
                    documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </details>

                <details className="group mb-2 flex items-center justify-between w-full text-left lg:text-[1.5rem] text-[1.125rem] text-white">
                  <summary className="font-medium cursor-pointer list-none flex items-center justify-between w-full p-6 text-left lg:text-[1.5rem] text-[1.125rem] bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white ">
                    <span>Where can I watch?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-white group-open lg:text-[1.5rem] text-[1.125rem] text-left p-5 max-h-[75rem] py-6 bg-[#2d2d2d] focus:bg-[#2d2d2d] list-none ">
                    Netflix has an extensive library of feature films,
                    documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </details>

                <details className="group mb-2 flex items-center justify-between w-full text-left lg:text-[1.5rem] text-[1.125rem] text-white">
                  <summary className="font-medium cursor-pointer list-none flex items-center justify-between w-full p-6 text-left lg:text-[1.5rem] text-[1.125rem] bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white ">
                    <span> How do I cancel?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-white group-open lg:text-[1.5rem] text-[1.125rem] text-left p-5 max-h-[75rem] py-6 bg-[#2d2d2d] focus:bg-[#2d2d2d] list-none ">
                    Netflix has an extensive library of feature films,
                    documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </details>

                <details className="group mb-2 flex items-center justify-between w-full text-left lg:text-[1.5rem] text-[1.125rem] text-white">
                  <summary className="font-medium cursor-pointer list-none flex items-center justify-between w-full p-6 text-left lg:text-[1.5rem] text-[1.125rem] bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white ">
                    <span>Is Netflix good for children?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-white group-open lg:text-[1.5rem] text-[1.125rem] text-left p-5 max-h-[75rem] py-6 bg-[#2d2d2d] focus:bg-[#2d2d2d] list-none ">
                    Netflix has an extensive library of feature films,
                    documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="mt-[2.85rem] text-white text-[1.125rem] fontm items-center text-center m-0 lg:text-[1.25rem] max-w-[61.5rem] px-[1.5rem] mx-auto ">
            <h3 className="px-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="sm:flex items-center mt-5 mx-auto max-w-xl ">
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                className="w-full sm:w-2/3 bg-[#0f0f0fb0] placeholder:text-[#aaa] border-[1px] border-[#8C8C8C] h-[3rem] sm:h-[3.5rem] py-3 px-4 text-[1rem] rounded-[.25rem]"
              />
              <button className="fontb mt-4 sm:mt-0 min-w-fit w-1/3 sm:ml-2 bg-[#E50914] hover:bg-[#D00A13] duration-300 text-white h-[3rem] sm:h-[3.5rem] py-3 px-5 text-[1.3rem] rounded-[.25rem] leading-none">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 absolute bg-[#444] opacity-50"></div>
    </div>
  );
};

export default AccordionCustom;
