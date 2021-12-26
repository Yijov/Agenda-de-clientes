import React from "react";
import IStatsMiniCard from "./IStatsMiniCard";

const StatsMiniCard: React.FC<IStatsMiniCard> = ({ statName, quantity }) => {
  return (
    <div className="stats-minicard">
      <h2>{statName}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default StatsMiniCard;
