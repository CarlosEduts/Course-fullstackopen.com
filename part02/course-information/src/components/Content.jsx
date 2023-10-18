import Part from "./Part";

const PartLoop = ({ parts }) => {
  const partElement = [];
  var sumAll = 0;
  for (var i = 0; i <= parts.length - 1; i++) {
    partElement.push(<Part part={parts[i]} />);
    sumAll += parts[i].exercises;
  }

  return (
    <>
      {partElement} <h3>total of {sumAll} exercises</h3>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      <PartLoop parts={parts} />
    </>
  );
};

export default Content;
