import rightArrow from "../../../assets/image/download.png";
import { useState } from "react";
interface ButtonProps {
  onClick: () => void;
}
const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className="h-full  absolute   right-0 z-[1] w-8 top-3/4"
        onClick={props.onClick}
      >
        <img src={rightArrow} alt="next" className="filter invert" />
      </button>
    </div>
  );
};
export default Button;
