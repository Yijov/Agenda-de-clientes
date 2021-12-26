import React from "react";
import IStatsCard from "./IStatsCard";
import ProgressBar from "../../progress_bar/ProgressBarr";

const StatsCard: React.FC<IStatsCard> = ({ statName, progress }) => {
  return (
    <div className="stats-card">
      <h2>{statName}</h2>
      <span>{progress}%</span>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default StatsCard;
