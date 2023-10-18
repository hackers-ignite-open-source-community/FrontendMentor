import { useState } from "react";

// components
import Offer from "./Offer";

const Subscribe = ({ subscribe }) => {
  // Email state
  const [email, setEmail] = useState("");
  // error handling state
  const [error, setError] = useState(false);

  const validateEmail = (e) => {
    e.preventDefault();
    let isValidated = /\S+@\S+\.\S+/.test(email);

    if (!isValidated) {
      setError(true);
      return;
    }

    setError(false);
    subscribe();
  };
  return (
    <div className="bg-white md:rounded-2xl md:shadow-lg md:w-2/3 grid lg:grid-cols-2 gap-4 md:p-4">
      <div className="flex items-center h-full md:px-4 px-6 py-12">
        <div className="">
          <h1 className="text-darkSlate md:text-5xl text-4xl font-bold">
            Stay updated!
          </h1>
          <p className="my-4 text-charcoalGrey font-medium">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="">
            <Offer content="Product discovery and building what matters" />
            <Offer content="Measuring to ensure updates are a success" />
            <Offer content="And much more!" />
          </ul>

          <form onSubmit={validateEmail}>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="font-bold text-sm text-charcoalGrey"
                >
                  Email address
                </label>
                {error && (
                  <label
                    htmlFor="email"
                    className="font-bold text-sm text-tomato"
                  >
                    Valid email required
                  </label>
                )}
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-2 border-2 rounded-lg py-3 px-4 w-full focus:border-charcoalGrey focus:text-charcoalGrey ${
                  error
                    ? "bg-red-100 border-tomato text-tomato"
                    : "border-gray-200 text-grey"
                }`}
              />
              <button className="bg-charcoalGrey mt-4 w-full text-center text-white rounded-md py-3 hover:shadow-xl hover:shadow-red-300 hover:bg-tomato transition duration-300 ease">
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative order-first lg:order-last h-72 lg:h-full">
        <img
          src="/illustration desktop.svg"
          alt="illustration"
          className="object-cover w-full h-full absolute top-0 left-0 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Subscribe;
