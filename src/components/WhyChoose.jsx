import DoorToDoor from "../assets/logo/door-to-door.svg";
import TravelFriendly from "../assets/logo/travel.svg";
import SimpleDocument from "../assets/logo/simple-document.svg";
import AnySize from "../assets/logo/any-size.svg";
import Customer from "../assets/logo/customer.svg";
import Courier from "../assets/logo/courier.svg";
import WorldWide from "../assets/logo/world-wide.svg";
import Clearance from "../assets/logo/clearance.svg";
import { useFormik } from "formik";
import axios from "axios";

const cards = [
  {
    name: "Door-to-Door Delivery",
    src: DoorToDoor,
  },
  {
    name: "Travel-Friendly Packaging",
    src: TravelFriendly,
  },
  {
    name: "Simple Documentation Process",
    src: SimpleDocument,
  },
  {
    name: "Any Size, Any Quantity",
    src: AnySize,
  },
  {
    name: "24/7 Customer Care Availability",
    src: Customer,
  },
  {
    name: "Store Pickup and Courier Service",
    src: Courier,
  },
  {
    name: "Reach to 150+ Countries Worldwide",
    src: WorldWide,
  },
  {
    name: "Hassle-Free Custom Clearance",
    src: Clearance,
  },
];

const WhyChoose = () => {
  const formik = useFormik({
    initialValues: {
      customerName: "",
      originCountry: "",
      weight: "",
      destinationCountry: "",
      phoneNumber: "",
      email: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://3.146.187.174/api/enquiry", {
          customerName: values.customerName,
          originCountry: values.originCountry,
          weight: values.weight,
          destinationCountry: values.destinationCountry,
          phoneNumber: values.phoneNumber,
          email: values.email,
        });
        formik.resetForm();
        console.log(response.data);
      } catch (err) {
        console.log("err in Shipping Calculation", err);
        formik.resetForm();
      }
    },
  });
  return (
    <div className="px-4 sm:px-8 lg:px-[120px] mt-16 lg:mt-[160px]" id="choose">
      <p className="text-3xl lg:text-[40px] font-bold text-[#AF1E22] text-center">
        Why <span className="text-[#100E3F]">Choose Us?</span>
      </p>
      <p className="text-base lg:text-lg font-normal text-center text-[#333333] mt-5 lg:mt-[20px]">
        Because we care. At Rabbit Speed, we ensure a tension-free shipping
        experience, boasting
      </p>
      <p className="text-base lg:text-lg font-normal text-center text-[#333333]">
        a stellar track record of successful and safe deliveries worldwide.
        Here's what sets us apart:
      </p>

      <div className="flex flex-col lg:flex-row lg:gap-[67px] mt-16 lg:mt-[66px]">
        <div className="w-full">
          <div className="flex flex-wrap gap-6 justify-center ">
            {cards.map((c, index) => {
              const ImageComponent = c.src;

              return (
                <div
                  key={index}
                  className="bg-white w-[100px] h-[150px] sm:w-[120px] sm:h-[170px] lg:w-[150px] lg:h-[180px] flex justify-center flex-col items-center rounded-[10px] bg-[linear-gradient(144.33deg,_#FFFFFF_78.21%,_#FFDCE8_100%)] px-2"
                >
                  <ImageComponent className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]" />
                  <p className="text-center text-xs sm:text-sm lg:text-base mt-2">
                    {c.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <form
          className="bg-white w-full mt-10 lg:mt-0 pt-6 lg:pt-[35px] px-4 sm:px-8 lg:px-[40px] text-[#100E3F] rounded-2xl h-fit pb-6 lg:pb-[40px]"
          id="enquire"
          onSubmit={formik.handleSubmit}
        >
          <p className="text-xl lg:text-3xl font-bold">Enquiry Form</p>
          <div className="flex flex-col gap-6 lg:gap-[30px] mt-6 lg:mt-[35px]">
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-[30px]">
              <div className="w-full">
                <label htmlFor="customerName">Customer Name*</label>
                <input
                  className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                  type="text"
                  name="customerName"
                  onChange={formik.handleChange}
                  value={formik.values.customerName}
                />
              </div>
              <div className="w-full">
                <label htmlFor="country " className="block">
                  Origin Country*
                </label>
                <select
                  name="originCountry"
                  id="originCountry"
                  onChange={formik.handleChange}
                  value={formik.values.originCountry}
                  className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                >
                  <option value="india">India</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-[30px]">
              <div className="w-full">
                <label htmlFor="weight " className="block">
                  Approx Weight
                </label>
                <select
                  name="weight"
                  id="weight"
                  onChange={formik.handleChange}
                  value={formik.values.weight}
                  className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                >
                  <option value="1">1 kg</option>
                  <option value="2">2 kg</option>
                  <option value="3">3 kg</option>
                  <option value="4">4 kg</option>
                  <option value="5">5 kg</option>
                  <option value="5+">More than 5kg</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="destinationCountry" className="block">
                  Destination Country*
                </label>
                <select
                  name="destinationCountry"
                  id="destinationCountry"
                  onChange={formik.handleChange}
                  value={formik.values.destinationCountry}
                  className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                >
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="europe">Europe</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="uk">UK</option>
                  <option value="uae">UAE</option>
                  <option value="usa">USA</option>
                  <option value="othercountry">Other Country</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-[30px]">
              <div className="w-full">
                <label htmlFor="phoneNumber">Phone Number*</label>
                <input
                  className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                  type="tel"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email">Email Address*</label>
                <input
                  className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="email">Message</label>
              <textarea
                className="pt-1 w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[150px] focus-visible:border-black mt-1.5"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.message}
                name="message"
              />
            </div>
          </div>
          <button className="w-fit px-[32px] py-[16px] rounded-full bg-[#AF1E22] text-white mt-[30px] lg:mt-[100px] float-right">
            Get Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhyChoose;
