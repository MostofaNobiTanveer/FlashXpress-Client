import React from "react";

const Services = () => {
  return (
    <div className="overflow-hidden text-smalt-300">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="2"
                height="2"
                className="text-smalt-400"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-smalt-50 pb-12 sm:text-4xl">
              We provide services that you can rely on.
            </h2>
          </div>
          <div className="container lg:col-span-2 mx-auto">
            <div className="flex sm:items-center mx-auto border-b pb-10 mb-10 border-smalt-800 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-smalt-600 text-amber flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-16 sm:h-16 w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  Person 2 Person Delivery - P2P
                </h2>
                <p className="leading-relaxed text-base">
                  Whether you need to send your father’s reading glasses or
                  surprise your mom with a handwoven shawl, we’ll make sure
                  everything moves with flexibility, speed, and accuracy.
                </p>
              </div>
            </div>
            <div className="flex sm:items-center  mx-auto border-b pb-10 mb-10 border-smalt-800 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  Merchant Delivery Service
                </h2>
                <p className="leading-relaxed text-base">
                  We understand the hustle you go through while building your
                  business, we empathise with the nervousness of your very
                  first-order. We are here as your partner with the flexibility
                  to deliver things wherever and whenever you require.
                </p>
              </div>
              <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-smalt-600 text-amber flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="sm:w-16 sm:h-16 w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="flex sm:items-center  mx-auto border-b pb-10 mb-10 border-smalt-800 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-smalt-600 text-amber flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-16 sm:h-16 w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  Warehouse
                </h2>
                <p className="leading-relaxed text-base">
                  When your dreams exceed the size of your storage, allow us to
                  help. When you need more hands on board, to help with the
                  storing, packaging and delivery of your products, we are there
                  for you
                </p>
              </div>
            </div>
            <div className="flex sm:items-center mx-auto sm:flex-row flex-col">
              <div className="flex-grow sm:text-left mt-6 sm:mt-0">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  Corporate & SME Delivery
                </h2>
                <p className="leading-relaxed text-base">
                  From providing a hassle-free end-to-end delivery to making
                  sure we accelerate your company’s efficiency, we help your
                  business a great deal with each delivery. Our delivery
                  solutions can be customised for big and small corporations.
                </p>
              </div>
              <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-smalt-600 text-amber flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="sm:w-16 sm:h-16 w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
