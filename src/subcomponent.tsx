import React from "react";

interface Props {
  num: number;
  tex: string;
  fun?: (lub: number) => void;
  obj?: {};
  handle: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
}

const Subcomponent: React.FC<Props> = ({ num, tex, handle }) => {
  return <h2 onClick={handle}>hi</h2>;
};

export default Subcomponent;
