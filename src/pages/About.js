import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
const aboutUs = [
  {
    question: "WHAT IS FlassXpress?",
    answer:
      "FlashXpress is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions.",
  },
  {
    question: "IS FlashXpress Reliable?",
    answer:
      "We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.",
  },
  {
    question: "does flashxpress give logistics solution?",
    answer:
      "Work with a logistics partner that really understands your business requirements and can assist in a B2B basis.",
  },
  {
    question:
      "HOW IS flashxpress DIFFERENT FROM OTHER delivery SERVICE PROVIDERS?",
    answer: [
      "We understand how to make logistics work for our merchant partners. Our job is to let our partners focus on their core business while we take care of the rest.",
      "We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises all over the country as well.",
      "Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.",
    ],
  },
  {
    question: "WHAT ARE THE SERVICES OFFERED BY FlashXpress?",
    answer: [
      "Person to Person Delivery - P2P",
      "Merchant Delivery Service",
      "Air Parcel",
      "Line Haul",
      "Warehouse",
      "Corporate & SME Delivery",
      "Cash on Delivery",
      "Call Center",
      "Bkash on Delivery",
    ],
  },
  {
    question: "WHAT are flashxpress's objectives?",
    answer:
      "FlashXpress is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.",
  },
  {
    question: "HOW DO flashxpress ENSURE SERVICE QUALITY?",
    answer:
      "We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.",
  },
];

const About = () => {
  return (
    <section className="text-smalt-300">
      <ScrollToTop />

      <div className="flex-1 items-start">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="flex flex-col gap-y-4">
            <div className="flex-shrink-0">
              <svg
                version="1.0"
                className="h-20 w-20"
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
            </div>
            <div>
              <h4 className="text-3xl font-extrabold text-smalt-100">We FlashXpress</h4>
              <p className="mt-1 text-smalt-300 lg:w-2/3">
                We are the first in Bangladesh to have created a unique network
                with home delivery and Store Pickup & Return services which
                enhances customer experience and rationalizes costs. We pride
                ourselves on delivering reliable services to our clients every
                time.
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {aboutUs.map((qna, index) => {
              return (
                <dl
                  key={index}
                  className="px-3 md:px-6 rounded-lg divide-y divide-gray-200 bg-smalt-600"
                >
                  <div className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                    <dt className="text-lg uppercase font-medium text-smalt-50 md:col-span-5">
                      {qna.question}
                    </dt>
                    <dd className="mt-2 md:mt-0 md:col-span-7">
                      <div className="text-base text-smalt-200">
                        {typeof qna.answer === "string"
                          ? qna.answer
                          : qna.answer.map((ans, i) => {
                              return (
                                <ul key={ans}>
                                  <li>
                                    {i + 1}. {ans}
                                  </li>
                                </ul>
                              );
                            })}
                      </div>
                    </dd>
                  </div>
                </dl>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
