import React from "react";

export default function MiniCompoent(props) {
  return props.types == "line" ? (
    <>
      {" "}
      <p className="text-[20px] font-semibold ml-[10px]  my-auto align-text-bottom">
        Number Phone:
      </p>
      <p className="text-[35px] m-auto font-bold">54125454</p>
    </>
  ) : (
    <></>
  );
}
