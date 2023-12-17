import React from "react";

interface Props {
  variant?: "primary" | "secondary" | "background" | "background-secondary";
  size?: "sm" | "md" | "lg";
}

const Spinner = ({ variant = "primary", size = "md" }: Props) => {
  const bgClass = `bg-${variant}`;
  let sizeClass = `h-[8px] w-[8px]`;
  if (size === "sm") sizeClass = "h-[5px] w-[5px]";
  else if (size === "lg") sizeClass = "h-[12px] w-[12px]";
  return (
    <div className="inline-block">
      <div className="flex space-x-1 items-center">
        <div
          className={`${sizeClass} ${bgClass} rounded-full animate-bounce [animation-delay:-0.3s]`}
        ></div>
        <div
          className={`${sizeClass} ${bgClass} rounded-full animate-bounce [animation-delay:-0.15s]`}
        ></div>
        <div
          className={`${sizeClass} ${bgClass} rounded-full animate-bounce`}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
