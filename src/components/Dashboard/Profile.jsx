import img from "../../assets/bell.svg";
function Profile() {
  return (
    <div className="flex my-4">
      <div className="rounded-full mr-2 bg-[#F0F2F5] grid place-content-center w-10 h-10">
        <img src={img} />
      </div>
      <img
        src="https://i.pravatar.cc/48?img=9"
        className="rounded-full mr-2 w-10 h-10"
      />
    </div>
  );
}

export default Profile;
