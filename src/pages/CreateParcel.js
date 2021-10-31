import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import { useForm } from "react-hook-form";
import { useAppContext } from "../contexts/AppProvider";
import { calcSubTotal } from "../utils/subTotal";
import { districtList, productTypes } from "../utils/data";
import Loading from "../components/Loading";

const CreateParcel = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [valueForPrice, setValueForPrice] = useState({
    parcel_type: "Document",
    recipient_district: "",
    parcel_weight: "1",
  });
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    const totalAmount = calcSubTotal(
      valueForPrice.parcel_type,
      valueForPrice.recipient_district,
      valueForPrice.parcel_weight
    );
    setSubTotal(totalAmount);
  }, [valueForPrice]);

  const onSubmit = (data) => {
    setIsLoading(true);
    data.status = "pending";
    data.total_payable = subTotal;
    fetch("https://polar-fjord-39630.herokuapp.com/createParcel", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
          setSubTotal(0);
          setIsLoading(false);
          history.push("/parcels");
        }
      });
  };

  const handleMinMax = (e) => {
    if (e.target.value !== 0) {
      if (parseInt(e.target.value) < parseInt(e.target.min)) {
        e.target.value = e.target.min;
      }
      if (parseInt(e.target.value) > parseInt(e.target.max)) {
        e.target.value = e.target.max;
      }
    }
  };

  const handleValuesForPrice = (e) => {
    const { name, value } = e.target;
    setValueForPrice({ ...valueForPrice, [name]: value });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="text-smalt-50 py-12 w-full max-w-7xl mx-auto px-6">
      <ScrollToTop />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div>
              <h3 className="text-xl font-medium leading-6">
                Sender & Pickup Information
              </h3>
              <p className="mt-1 text-sm text-smalt-300">
                This information is required to pick your parcel up. We will
                keep that information for further uncertainty.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow rounded-md overflow-hidden">
              <div className="px-4 py-5 bg-gray-50 space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* sender name */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="sender_name"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Sender name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("sender_name")}
                      required
                      value={user.displayName}
                      name="sender_name"
                      id="sender_name"
                      autoComplete="given-name"
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* sender email */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="sender_email"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Sender email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      {...register("sender_email")}
                      name="sender_email"
                      value={user.email}
                      id="sender_email"
                      autoComplete="email"
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* sender mobile */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="sender_mobile"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Sender mobile number
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="\d{1,11}"
                      {...register("sender_mobile")}
                      maxLength="11"
                      name="sender_mobile"
                      id="sender_mobile"
                      autoComplete="tel-local"
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* sender district */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="sender_district"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Sender district<span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      id="sender_district"
                      {...register("sender_district")}
                      name="sender_district"
                      className="bg-gray-50 mt-1 text-smalt-900 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select district</option>
                      {districtList.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* sender address */}
                  <div className="col-span-6">
                    <label
                      htmlFor="sender_address"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Sender full address
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      {...register("sender_address")}
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      name="sender_address"
                      id="sender_address"
                      rows="3"
                      placeholder="Enter full pickup address."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* border */}

        <div className="py-6"></div>

        {/* border */}
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div>
              <h3 className="text-xl font-medium leading-6">
                Recipient Information
              </h3>
              <p className="mt-1 text-sm text-smalt-300">
                This information is required for successful delivery of your
                parcel. We will keep that information for further uncertainty.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden rounded-md">
              <div className="px-4 py-5 bg-gray-50 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* recipient name */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="recipient_name"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Recipient name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      {...register("recipient_name")}
                      name="recipient_name"
                      id="recipient_name"
                      autoComplete="given-name"
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* recipient email */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="recipient_email"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Recipient email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      {...register("recipient_email")}
                      name="recipient_email"
                      id="recipient_email"
                      autoComplete="email"
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* recipient mobile */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="recipient_mobile"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Recipient mobile number
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="\d{1,11}"
                      {...register("recipient_mobile")}
                      maxLength="11"
                      name="recipient_mobile"
                      id="recipient_mobile"
                      autoComplete="tel-local"
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* recipient district */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="recipient_district"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Recipient district
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      {...register("recipient_district")}
                      onChange={handleValuesForPrice}
                      id="recipient_district"
                      name="recipient_district"
                      className="bg-gray-50 mt-1 text-smalt-900 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select district</option>
                      {districtList.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                  {/* recipient address */}
                  <div className="col-span-6">
                    <label
                      htmlFor="recipient_address"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Recipient full address
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      {...register("recipient_address")}
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      name="recipient_address"
                      id="recipient_address"
                      rows="3"
                      placeholder="Enter full pickup address."
                    ></textarea>
                  </div>
                  {/* instruction */}
                  <div className="col-span-6">
                    <label
                      htmlFor="sending_instruction"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Additional instruction (optional)
                    </label>
                    <textarea
                      {...register("sending_instruction")}
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      name="sending_instruction"
                      id="sending_instruction"
                      rows="3"
                      placeholder="Any additional instruction"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* border */}

        <div className="py-6"></div>

        {/* border */}
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div>
              <h3 className="text-xl font-medium leading-6">
                Parcel Information
              </h3>
              <p className="mt-1 text-sm text-smalt-300">
                This information is required for ensuring safest successful
                delivery of your parcel.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden rounded-md">
              <div className="px-4 py-5 bg-gray-50 space-y-6 sm:p-6">
                {/* parcel_type */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="parcel_type"
                    className="block text-sm font-medium text-smalt-900"
                  >
                    What do you want to send?
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("parcel_type")}
                    required
                    id="parcel_type"
                    name="parcel_type"
                    onChange={handleValuesForPrice}
                    className="bg-gray-50 mt-1 text-smalt-900 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="Document">Document</option>
                    <option value="Parcel">Parcel</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mobile">Mobile</option>
                  </select>
                </div>
                {/* parcel weight */}
                {valueForPrice.parcel_type === "Parcel" && (
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="parcel_weight"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      Package weight (KG)<span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("parcel_weight")}
                      type="number"
                      required
                      onChange={(e) => {
                        handleMinMax(e);
                        handleValuesForPrice(e);
                      }}
                      max="10"
                      min="1"
                      name="parcel_weight"
                      id="parcel_weight"
                      className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <p className="text-xs font-medium text-gray-600">
                      *For parcel up to 10KG
                    </p>
                  </div>
                )}
                {/*  parcel product type */}
                {valueForPrice.parcel_type === "Parcel" && (
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="parcel_contains"
                      className="block text-sm font-medium text-smalt-900"
                    >
                      What does this parcel contains?
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      {...register("parcel_contains")}
                      onChange={handleValuesForPrice}
                      id="parcel_contains"
                      name="parcel_contains"
                      className="bg-gray-50 mt-1 text-smalt-900 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select product type</option>
                      {productTypes.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                )}
                {/* parcel count */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="parcel_count"
                    className="block text-sm font-medium text-smalt-900"
                  >
                    Number of Item<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("parcel_count")}
                    type="number"
                    required
                    defaultValue="1"
                    onChange={handleMinMax}
                    min="1"
                    name="parcel_count"
                    id="parcel_count"
                    className="bg-gray-50 mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {/* parcel type suit */}
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-sma text-smalt-900">
                      What suits your parcel?
                      <span className="text-red-500">*</span>
                    </legend>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        {...register("parcel_type_suit")}
                        id="fragile_type"
                        value="fragile"
                        name="parcel_type_suit"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="fragile_type"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Fragile
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        {...register("parcel_type_suit")}
                        id="liquid_type"
                        name="parcel_type_suit"
                        value="liquid"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="liquid_type"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Liquid
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        {/* border */}

        <div className="py-6"></div>

        {/* border */}
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div>
              <h3 className="text-xl font-medium leading-6">
                Cost Information
              </h3>
              <p className="mt-1 text-sm text-smalt-300">
                This is the cost information and amount we will charge according
                to your information.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden rounded-md">
              <div className="px-4 py-5 bg-gray-50 space-y-6 sm:p-6">
                <div className="flex justify-between text-lg font-medium text-smalt-900">
                  <p>Subtotal</p>
                  <p>
                    <span className="font-extrabold">৳</span>
                    {subTotal}
                  </p>
                </div>
                <div className="flex border-t border-smalt-300 pt-4 lg:flex-row flex-col items-start lg:items-center justify-between">
                  <div className="flex items-center">
                    <input
                      required
                      {...register("agreement_to_terms")}
                      id="agreement_to_terms"
                      name="agreement_to_terms"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="agreement_to_terms"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I agree to the FlashXpress{" "}
                      <Link to="/terms" className="text-purple-600 underline">
                        terms & conditions
                      </Link>
                    </label>
                  </div>
                  {/* submit button */}
                  <div className="pt-4 rounded text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Confirm Parcel Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateParcel;
