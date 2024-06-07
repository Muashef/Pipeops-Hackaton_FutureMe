import img from "../../assets/calendar.svg";
import { format } from "date-fns";
function DashboardDate() {
  return (
    <div className="rounded-xl border-[3px] p-[.8em] flex justify-start items-center">
      <div className="rounded-full mr-2 bg-[#F0F2F5] grid place-content-center w-10 h-10">
        <img src={img} />
      </div>
      <span className="text-left">
        <h3 className="text-md">Today&apos;s Date</h3>
        <p className=" font-semibold text-[#344054] text-lg">
          {format(new Date(), "do MMMM, yyyy")}
        </p>
      </span>
    </div>
  );
}

export default DashboardDate;
