import PropTypes from "prop-types";
const UpCommingDeadEvent = ({ upCommingDeadData }) => {
  return (
    <div>
      <h1 className="font-bold">এই মাসের মৃত্যু বার্ষিকীঃ-</h1>
      {upCommingDeadData.map((data) => (
        <h1
          key={Math.random()}
        >{`${data.name} এর মৃত্যু বার্ষিকী ${data.deadDate}  তারিখে`}</h1>
      ))}
    </div>
  );
};

UpCommingDeadEvent.propTypes = {
  upCommingDeadData: PropTypes.array,
};

export default UpCommingDeadEvent;
