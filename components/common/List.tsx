import React from "react";

interface Props {
  children: React.ReactNode;
}

export const List = ({ children }: Props) => {
  return <ul className="flex flex-wrap">{children}</ul>;
};

export const ListItem = ({ children }: Props) => {
  return (
    <li className="w-full xs:w-1/2 md:w-1/3 xl:w-1/5 pr-4 pb-6 max-md:pb-4">
      {children}
    </li>
  );
};
