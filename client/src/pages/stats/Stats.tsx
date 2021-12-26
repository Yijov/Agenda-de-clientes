import React from "react";
import useStats from "./useStats";

//subComponents
import PageHeader from "../../components/section_header/PageHeader";
import StatsCard from "../../components/cards/stats_card/StatsCads";
import StatsMiniCard from "../../components/cards/stats_mini_card/StatsMiniCard";

const Stats: React.FC = () => {
  const {
    TotalCustomers,
    AddedThisWeek,
    ContactedThisWeek,
    MonthlyReach,
    MonthlyGrouth,
    MonthlyConvertion,
  } = useStats();
  return (
    <div className="page" id="stats-page">
      <PageHeader title={"stats"} />

      <div id="stats-container">
        <div id="ministats-container">
          <StatsMiniCard statName="Total Customers" quantity={TotalCustomers} />
          <StatsMiniCard statName="New this Week" quantity={AddedThisWeek} />
          <StatsMiniCard statName="Contacted this Week" quantity={ContactedThisWeek} />
        </div>

        <StatsCard statName="Monthly Reach" progress={MonthlyReach} />
        <StatsCard statName="Monthly Conversion" progress={MonthlyConvertion} />
        <StatsCard statName="Monthly Growth" progress={MonthlyGrouth} />
      </div>
    </div>
  );
};
export default Stats;
