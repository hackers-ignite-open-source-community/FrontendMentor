const Card = ({ bg, name, profilePic, heading, content, contrast, quote }) => {
  return (
    <div className={`rounded-lg p-6 ${bg} h-full shadow-xl relative`}>
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div>
            <img
              src={`/${profilePic}`}
              className="rounded-full ring ring-purple-200"
              alt="profile"
            />
          </div>
          <div>
            <h4
              className={`text-lg font-bold ${
                contrast === "light" ? "text-gray-500" : "text-gray-100"
              }`}
            >
              {name}
            </h4>
            <p
              className={`${
                contrast === "dark" ? "text-gray-200" : "text-gray-400"
              } font-medium text-sm`}
            >
              Verified Graduate
            </p>
          </div>
        </div>

        <h2
          className={`text-lg font-bold py-6 ${
            contrast === "light" ? "text-gray-500" : "text-white"
          }`}
        >
          {heading}
        </h2>
        <p
          className={`${
            contrast === "dark" ? "text-gray-200" : "text-gray-400"
          } font-medium text-sm`}
        >
          &quot;{content}&quot;
        </p>
      </div>
      {quote && (
        <img
          src="/bg-pattern-quotation.svg"
          className="absolute md:right-20 right-6 top-0 md:h-36 h-32 object-contain z-0"
          alt="quote"
        />
      )}
    </div>
  );
};

export default Card;
