import React from "react";

const LilBanner = () => {
  return (
    <div className="pt-16 lg:py-24">
      <div className="pb-16 lg:bg-smalt-600 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 lg:hidden"
            ></div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://i.ibb.co/98XhzPr/output-onlinepngtools-2-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    version="1.0"
                    className="h-14 w-14"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt"
                    height="512.000000pt"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#FFBE0B"
                      stroke="none"
                    >
                      <path
                        d="M1724 5100 c-17 -11 -38 -35 -48 -52 -26 -51 -616 -2440 -616 -2495
                        0 -54 22 -95 66 -124 27 -18 54 -19 407 -19 207 0 377 -2 377 -3 0 -2 -124
                        -502 -275 -1110 -169 -681 -275 -1124 -275 -1154 0 -54 22 -95 66 -124 39 -25
                        129 -26 166 -1 22 14 2336 2904 2440 3046 51 70 35 176 -33 224 -22 15 -75 18
                        -530 22 l-506 5 399 804 c368 743 398 808 398 855 0 57 -21 97 -66 127 -28 18
                        -65 19 -984 19 -935 0 -956 -1 -986 -20z"
                      />
                    </g>
                  </svg>
                  <p className="mt-6 text-xl font-normal text-smalt-100">
                    We take care of order fulfillment, collection, transport,
                    tracking and delivery of parcels. We are the first in
                    Bangladesh to have created a unique network with home
                    delivery and Store Pickup & Return services which enhances
                    customer experience and rationalizes costs.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-lg font-medium text-white">Flash Xperss</p>
                  <p className="text-sm font-medium text-smalt-200">
                    Best delivery service in Bangladesh
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LilBanner;
