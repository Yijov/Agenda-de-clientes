import React from "react";

export default interface IInputProps {
  value: string | number | readonly string[] | undefined;
  onchage: React.EventHandler<any>;
  isPerson?: () => boolean;
}
