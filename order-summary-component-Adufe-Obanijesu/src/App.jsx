import { FaMusic } from "react-icons/fa";

function App() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-blue-200 px-4 md:px-0">
      <img
        src="/pattern-background-desktop.svg"
        className="w-screen h-screen bg-opacity-20 opacity-60 absolute top-0 left-0 z-10"
        alt="background"
      />

      {/* Card */}
      <div className="bg-white lg:w-1/3 md:w-2/3 rounded-xl shadow-xl relative z-20 overflow-hidden">
        <img
          src="/illustration-hero.svg"
          className="w-full lg:h-48 md:h-60 h-48 object-cover"
          alt="hero"
        />

        <div className="py-4 px-8">
          <h3 className="font-bold text-center text-2xl text-gray-800">
            Order Summary
          </h3>
          <div className="flex justify-center">
            <p className="text-gray-500 py-3 md:w-4/5 text-center">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>

          <div className="flex justify-between items-center bg-blue-50 rounded-xl p-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex justify-center items-center">
                <FaMusic className="text-gray-600" />
              </div>
              <div className="">
                <h4 className="font-bold text-gray-800 text-lg">Annual Plan</h4>
                <p className="text-gray-500 font-medium">$59.99/year</p>
              </div>
            </div>
            <span className="text-blue-700 underline font-semibold cursor-pointer hover:text-blue-600 transition duration-300 ease hover:no-underline">
              Change
            </span>
          </div>

          <button className="w-full bg-blue-700 text-center my-6 py-3 rounded-lg text-white font-semibold cursor-pointer shadow-lg shadow-blue-300 hover:bg-blue-600 transition duration-300 ease">
            Proceed to Payment
          </button>
          <div className="flex justify-center">
            <button className="text-gray-500 font-semibold py-2 cursor-pointer mb-8 hover:font-bold hover:text-gray-700">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
