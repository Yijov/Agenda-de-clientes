import React from "react";
import ICustomer from "../../../models/ICustomer";

import InteractionComponent from "./InteractionComponen";

interface IInteractionsListProps {
  currentProfile: ICustomer;
}

const InteractionsList: React.FC<IInteractionsListProps> = ({ currentProfile }) => {
  return (
    <div className="interactions-list">
      <ol>
        {currentProfile?.interactions?.map((interaction) => {
          return <InteractionComponent interaction={interaction} key={interaction._id} />;
        })}
      </ol>
    </div>
  );
};

export default InteractionsList;
