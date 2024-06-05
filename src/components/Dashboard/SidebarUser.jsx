/* eslint-disable react/prop-types */
function SidebarUser({ img, name, email }) {
  return (
    <div className="flex justify-start items-start">
      <img src={img} className="rounded-full mr-2"/>
      <span>
        <p className="text-md font-semibold">{name}</p>
        <p className="text-md text-gray-500">{email}</p>
      </span>
    </div>
  );
}

export default SidebarUser;
