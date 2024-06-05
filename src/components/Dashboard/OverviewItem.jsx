/* eslint-disable react/prop-types */
function OverviewItem({ course, percentage }) {
  return (
    <div className="rounded-md border border-gray-300 flex flex-col justify-start pl-4 pr-8 py-4">
      <h2 className="text-lg mb-1">{course}</h2>
      <p className="text-2xl mb-1 font-semibold text-gray-700">
        {percentage}/100%
      </p>
      <span className="text-[#F97699] text-md">View Career</span>
    </div>
  );
}

export default OverviewItem;
