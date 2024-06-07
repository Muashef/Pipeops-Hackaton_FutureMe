import img from "../../assets/bell.svg";
function Profile() {
  return (
    <div>
      <div className="rounded-full mr-2">
        <img src={img} className="rounded-full mr-2" />
      </div>
      <img src="https://i.pravatar.cc/48?img=9" className="rounded-full mr-2" />
    </div>
  );
}

export default Profile;
