/* eslint-disable react/prop-types */
function SidebarLInk({ img, text, children }) {
  return (
    <div className="flex justify-start items-center p-4 text-gray-500 font-medium text-md relative my-[2px]">
      <img src={img} className="w-6 h-6 mr-2" />
      {text}
      {children}
    </div>
  );
}

export default SidebarLInk;
