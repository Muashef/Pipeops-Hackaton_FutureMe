import Button from "./Button";
import icon1 from "../../assets/clock.svg";
import icon2 from "../../assets/calendar2.svg";
import img from "../../assets/Avatars.svg";

function Event() {
  return (
    <div className="rounded-xl border-[3px] flex flex-col justify-start items-start w-96">
      <h2 className="font-semibold text-md text-[#344054] ml-8 my-3 text-left">
        Choosing a Career - Webinar
      </h2>
      <div className="border-y-[3px] w-full py-6 pl-5 text-[#344054] flex flex-col items-start gap-10">
        <span className="flex flex-col items-start gap-2">
          <h2 className="font-bold text-lg">Friday, 6th July</h2>
          <p>
            <img src={icon1} className="inline mr-4" />
            11.30 - 12.00 (30 min)
          </p>
          <p>
            <img src={icon2} className="inline mr-4" />
            Zoom Webinar
          </p>
        </span>
        <div className="flex justify-start items-start">
          <img src={img} className="mr-2" />
          <span>
            <p className="text-md font-semibold">Alison Ogaga</p>
            <p className="text-md text-gray-500">Facilitator</p>
          </span>
        </div>
      </div>
      <div className="p-4 flex gap-6 items-center w-full">
        <Button>Remind Me Later</Button>
        <Button primary={false}>Confirm Attendance</Button>
      </div>
    </div>
  );
}

export default Event;
