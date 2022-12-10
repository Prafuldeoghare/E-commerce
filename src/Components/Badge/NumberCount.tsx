import React from "react";

interface NumberCountProps {
  count: number;
  style?: string;
}

function NumberCount({ count, style }: NumberCountProps) {
  return (
    <div
      className={`font-medium font-poppins text-xs text-c2-a bg-[rgba(135,206,235,0.2)] py-1 px-2 rounded-2xl ${
        style ?? ""
      }`}
    >
      {count ?? 0}
    </div>
  );
}

export default NumberCount;
