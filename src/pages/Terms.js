import React from "react";
import ScrollToTop from "../utils/ScrollToTop";

const Terms = () => {
  return (
    <section className="flex-1 items-start">
      <ScrollToTop />
      <div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-100">
            Terms and conditions
          </h2>
          <div className="mt-8 space-y-3 text-gray-400">
            <div className="pt-6 space-y-3">
              <h3 className="uppercase text-gray-100 font-bold border-l-4 pl-4 border-gray-100">
                Introduction
              </h3>
              <p className="text-smalt-200">
                <strong className="text-white">FlashXpress</strong> is a company
                incorporated under the laws of Bangladesh, (hereinafter referred
                to as “FlashXpress”) and offers diversified delivery and pick-up
                services with a focus on e-commerce transactions. This agreement
                (“Agreement”) is an electronic contract between You and
                FlashXpress, and outlines the terms on which FlashXpress will
                provide services to You.
              </p>
            </div>
            <div className="pt-6 space-y-3">
              <h3 className="uppercase text-gray-100 font-bold border-l-4 pl-4 border-gray-100">
                CLIENT OBLIGATIONS
              </h3>
              <p className="text-smalt-200">
                <li>
                  The Client shall ensure that the packaging of the Products is
                  safe, proper and adequate to withstand the normal
                  transportation and environmental hazards, along with the
                  necessary invoices and documentation, and in compliance with
                  applicable laws.
                </li>
                <br />
                <li>
                  The Client shall ensure that the goods for delivery are kept
                  ready for pick-up by FlashXpress personnel at the designated
                  pick-up time, failing which the FlashXpress personnel shall
                  not wait at your location, and you may be charged the
                  requisite fee for the delivery.
                </li>
                <br />
                <li>
                  The Client shall ensure that the goods inside the package
                  match the description of the goods on the outer packaging /
                  documentation, and that proper, true, fair, correct and
                  factual declarations are made on the docket regarding
                  description and value of products / goods handed over for the
                  Fulfilment Services.
                </li>
              </p>
            </div>
            <div className="pt-6 space-y-3">
              <h3 className="uppercase text-gray-100 font-bold border-l-4 pl-4 border-gray-100">
                FLASHXPRESS OBLIGATIONS
              </h3>
              <p className="text-smalt-200">
                <li>
                  FlashXpress shall provide the Fulfilment Services with
                  reasonable skill and care, and in accordance with applicable
                  laws.
                </li>
                <br />
                <li>
                  FlashXpress shall be solely responsible for selecting, hiring,
                  assigning, and supervising its fulfilment personnel, in order
                  to ensure the provision of the Fulfilment Services in
                  accordance with the terms of this Agreement.
                </li>
                <br />
                <li>
                  FlashXpress shall be solely responsible for the payment of
                  salaries, wages, and other statutory payments including
                  without limitation provident fund contributions and gratuity,
                  of its fulfilment personnel, and the Client shall have no
                  liability towards this.
                </li>
              </p>
            </div>
            <div className="pt-6 space-y-3">
              <h3 className="uppercase text-gray-100 font-bold border-l-4 pl-4 border-gray-100">
                FEES AND PAYMENT TERMS
              </h3>
              <p className="text-smalt-200">
                <li>
                  The fee payable to FlashXpress for the Fulfilment Services
                  (“Fees”) shall be as set out in the Schedule to this
                  Agreement.
                </li>
                <br />
                <li>
                  The Client shall pay all applicable taxes on the Fees, and it
                  is clarified that the amounts set out in the Schedule to this
                  Agreement, as the Fees for each component of the Fulfilment
                  Services, are exclusive of taxes.
                </li>
                <br />
                <li>
                  FlashXpress shall issue invoice to the Client at end of each
                  calendar month for the Fulfilment Services that have been
                  rendered in previous month, with the terms of this Agreement,
                  which shall be paid by the Client within fifteen (15) days
                  from the date of submission of the invoice.
                </li>
              </p>
            </div>
            {/* pricing table */}
            <div className="pt-6 space-y-8">
              <h3 className="uppercase text-gray-100 font-bold border-l-4 pl-4 border-gray-100">
                Fee Chart for Fulfilment Services
              </h3>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 md:mb-0 mb-6 text-smalt-200 flex-shrink-0 flex flex-col">
                  <span className="font-semibold text-2xl">DHAKA CITY</span>
                  <span className="mt-1 text-smalt-300 text-sm">
                    Charge for fullfilment services
                  </span>
                </div>
                <div className="md:flex-grow">
                  <div className="text-md font-medium text-smalt-200 mb-2 space-y-2">
                    <ul className="flex items-center justify-between bg-smalt-600 px-12 py-2 rounded-lg">
                      <li>Parcel Upto 1KG</li>
                      <li>Tk. 60</li>
                    </ul>
                    <ul className="flex items-center justify-between bg-smalt-600 px-12 py-2 rounded-lg">
                      <li>Parcel Upto 2KG</li>
                      <li>Tk. 75</li>
                    </ul>
                    <ul className="flex items-center justify-between bg-smalt-600 px-12 py-2 rounded-lg">
                      <li>Parcel Upto 3KG</li>
                      <li>Tk. 90</li>
                    </ul>
                    <ul className="flex items-center justify-between bg-smalt-600 px-12 py-2 rounded-lg">
                      <li>Parcel Upto 4KG</li>
                      <li>Tk. 105</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 md:mb-0 mb-6 text-smalt-200 flex-shrink-0 flex flex-col">
                  <span className="font-semibold text-2xl">OUTSIDE DHAKA</span>
                  <span className="mt-1 text-smalt-300 text-sm">
                    Charge for fullfilment services
                  </span>
                </div>
                <div className="md:flex-grow">
                  <div className="text-md font-medium text-smalt-200 mb-2 space-y-2">
                    <ul className="flex items-center justify-between bg-smalt-600 px-12 py-2 rounded-lg">
                      <li>Parcel Upto 1KG</li>
                      <li>Tk. 130</li>
                    </ul>
                    <ul className="flex items-center justify-between bg-smalt-600 px-12 py-2 rounded-lg">
                      <li>Parcel Upto 2KG</li>
                      <li>Tk. 160</li>
                    </ul>
                    <ul className="flex items-center justify-between bg-smalt-600 px-12 py-2 rounded-lg">
                      <li>Parcel Upto 3KG</li>
                      <li>Tk. 190</li>
                    </ul>
                    <ul className="flex items-center justify-between bg-smalt-600 px-12 py-2 rounded-lg">
                      <li>Parcel Upto 4KG</li>
                      <li>Tk. 220</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
