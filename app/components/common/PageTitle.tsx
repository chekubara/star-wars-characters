import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageTitle = ({ children }: Props) => {
  return <h1 className="text-secondary text-2xl mb-2 font-bold">{children}</h1>;
};

export default PageTitle;
