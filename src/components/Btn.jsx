import React from "react";

const Btn = ({ Text, className }) => {
  return (
    <div>
      <button className={className}>{Text}</button>
    </div>
  );
};

export default Btn;
