import React from "react";
import ScrollToTop from "../utils/ScrollToTop";

const districtList = [
  "Bagerhat",
  "Barishal",
  "Bandarban",
  "Barguna",
  "Bhola",
  "Bogura",
  "Brahmanbaria",
  "Chandpur",
  "Chapainawabganj",
  "Chittagong",
  "Chuadanga",
  "Comilla",
  "Cox’s Bazar",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Hobigonj",
  "Jamalpur",
  "Jessore",
  "Jhalokathi",
  "Jhenaida",
  "Joypurhat",
  "Keranigonj",
  "Khagrachari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lalmonirhat",
  "Laxmipur",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Naogaon",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Savar",
  "Shariatpur",
  "Sherpur",
  "Sirajgonj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
];
const Coverage = () => {
  return (
    <section className="text-smalt-300 mx-auto">
      <ScrollToTop />
      <div className="max-w-7xl w-full px-2 py-12">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-center title-font text-white mb-2">
            Coverage Map
          </h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We are currently available in 64 districts.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <div className="h-80 w-80">
            <img
              className="h-full select-none w-full object-center object-cover"
              src="https://i.ibb.co/TBJkSXt/bdflag-flash.png"
              alt="bd map"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {districtList.map((item, index) => {
              return (
                <div key={index} className="w-full bg-smalt-800 p-2 rounded">
                  <div className="flex gap-x-2 items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-amber w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="truncate title-font font-medium text-smalt-200">
                      {item}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
