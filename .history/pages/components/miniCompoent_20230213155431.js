import React from "react";

export default function MiniCompoent(props) {
  return props.types == "line" ? (
    <div className="flex flex-row">
      <p className="text-[20px] font-semibold ml-[10px] text-[white] my-auto align-text-bottom">
        {props.headerLine}
      </p>
      <p className="text-[35px] m-auto font-bold">{props.contents}</p>
    </div>
  ) : (
    <></>
  );
}
