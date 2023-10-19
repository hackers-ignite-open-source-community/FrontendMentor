import { BsCheck } from "react-icons/bs";

function SuccessMessage({ setIsSubscribed }) {
  return (
    <div className="bg-white md:rounded-2xl mdshadow-lg md:px-16 px-8 py-12 lg:w-1/3 md:w-2/3 h-full md:h-auto">
      <div className="flex flex-col justify-between md:block h-full">
        <div>
          <div className="bg-tomato rounded-full w-14 h-14 flex justify-center items-center">
            <BsCheck className="inline text-white text-5xl" />
          </div>
          <h1 className="mt-6 text-darkSlate md:text-5xl text-4xl font-bold">
            Thanks for subscribing!
          </h1>
          <p className="my-4 text-charcoalGrey font-medium">
            A confirmation email has been sent to{" "}
            <span className="font-bold">ash@loremcompany.com</span>. Please open
            it and click the button inside to confirm your subsciption.
          </p>
        </div>

        <button
          className="bg-charcoalGrey mt-4 w-full text-center text-white rounded-md py-3 hover:shadow-xl hover:shadow-red-300 hover:bg-tomato transition duration-300 ease"
          onClick={() => setIsSubscribed(false)}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default SuccessMessage;
