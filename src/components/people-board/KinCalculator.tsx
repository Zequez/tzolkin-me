import React, { useState } from "react";

interface KinCalculatorProps {}

const KinCalculator: React.FC<KinCalculatorProps> = () => {
  const [name, setName] = useState("Ezequiel");
  const [dateVal, setDateVal] = useState("1992-12-14");

  return (
    <div className="w-30 bg-gray-100 shadow-md rounded-md p-4">
      <input
        type="text"
        className="w-full p-2 rounded-md mb-2 text-center"
        placeholder="Name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <input
        type="text"
        className="w-full p-2 rounded-md text-center"
        placeholder="YYYY-MM-DD"
        value={dateVal}
        onChange={(ev) => setDateVal(ev.target.value)}
      />
    </div>
  );
};

// interface BeingCardProps = {

// }

// const BeingCard: React.FC<BeingCardProps> = (name, date) => {

// }

export default KinCalculator;
