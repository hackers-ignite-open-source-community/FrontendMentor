import { BsCheck } from "react-icons/bs";

function Offer({ content }) {
  return (
    <li className="flex gap-4 items-center mb-4">
      <span className="bg-tomato rounded-full w-6 h-6 flex justify-center items-center">
        <BsCheck className="inline text-white text-2xl" />
      </span>

      <p className="font-medium text-charcoalGrey">{content}</p>
    </li>
  );
}

export default Offer;
