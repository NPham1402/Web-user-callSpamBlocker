import React from "react";

export default function MiniCompoent(props) {
  return props.types == "line" ? (
    <div className="flex flex-row">
      <p className="text-[25px] font-semibold ml-[10px] my-auto align-text-bottom">
        {props.headerLine}
      </p>
      <p className="text-[35px] mr-auto font-bold text-[white] ">
        {props.contents}
      </p>
    </div>
  ) : (
    <></>
  );
}
