import React from "react";

interface Props {
  name: string;
  children: React.ReactNode;
}

const AttributeRow = ({ name, children }: Props) => {
  return (
    <div className="flex space-x-2 p-2">
      <div className="w-[100px]">
        <span className="">{name}:</span>
      </div>
      <div className="font-bold w-full">{children}</div>
    </div>
  );
};

export default AttributeRow;
