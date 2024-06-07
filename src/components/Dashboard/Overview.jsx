/* eslint-disable react/prop-types */
const overview = [
  { course: "Project Management", percentage: 90 },
  { course: "CyberSecurity", percentage: 75 },
  { course: "Web Development", percentage: 80 },
];
function Overview() {
  return (
    <div className="overview flex gap-4 my-8">
      {overview.map((item, i) => (
        <OverviewItem
          course={item.course}
          percentage={item.percentage}
          key={i}
        />
      ))}
    </div>
  );
}
function OverviewItem({ course, percentage }) {
  return (
    <div className="rounded-md border border-gray-300 flex flex-col justify-start pl-4 py-4 min-w-[15em]">
      <h2 className="text-md mb-1">{course}</h2>
      <p className="text-xl mb-2 font-semibold text-gray-700">
        {percentage}/100%
      </p>
      <span className="text-[#F97699] text-sm">View Career</span>
    </div>
  );
}

export default Overview;
