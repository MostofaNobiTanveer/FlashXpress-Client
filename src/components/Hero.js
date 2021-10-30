import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-10 lg:py-48 lg:text-left">
        <div className="px-4 lg:w-2/3 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            Others deliver boxes <br /> We deliver dreams
          </h1>
          <p className="mt-3 text-lg text-smalt-300 sm:text-xl md:mt-5 md:max-w-3xl">
            We understand how to make logistics work for our merchant partners.
            Our job is to let our partners focus on their core business while we
            take care of the rest.
          </p>
          <Link
            to="/create-parcel"
            className="inline-flex mt-6 justify-center items-center py-2.5 px-8 border border-smalt-600 rounded-md shadow-sm bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700"
          >
            &nbsp;Create Parcel Now
          </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://i.ibb.co/YNJHW07/output-onlinepngtools-5.png"
          alt="pattern"
        />
      </div>
    </main>
  );
};

export default Hero;
