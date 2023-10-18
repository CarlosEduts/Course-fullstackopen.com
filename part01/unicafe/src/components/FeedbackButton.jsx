import React from "react";

const FeedbackButton = ({ title, onClick }) => {
  return (
    <>
      <button onClick={onClick}> {title} </button>
    </>
  );
};

export default FeedbackButton;
