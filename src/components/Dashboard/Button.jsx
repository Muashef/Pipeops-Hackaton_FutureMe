/* eslint-disable react/prop-types */
function Button({ children, primary = true }) {
  return (
    <button
      className={`rounded-lg px-4 py-2 font-semibold text-sm max-h-10 max-w-fit ${
        primary ? "border-[3px] text-[#344054]" : "bg-[#F97699] text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
