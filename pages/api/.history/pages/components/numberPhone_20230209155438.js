import { ClockCircleOutlined } from "@ant-design/icons";
import React from "react";

export default function NumberPhone(props) {
  return (
    <div className="w-[45%] h-[183.5px] mx-[10px] mt-[30px] border-[1px] border-white rounded-2xl border  bg-[#c1c1c1]">
      <div className="m-[30px]">
        <div className="flex flex-row ">
          <ClockCircleOutlined className="text-[30px] m-[10px]" />
          <p className="pt-[12px] text-[#004948] font-semibold text-[20px] ">
            {props.country}/({props.provider})
          </p>
        </div>
        <div className="flex flex-row">
          <p className="text-[35px] text-[#004948] m-[10px] font-bold">
            {props.zone}
            {props.numberPhone}
          </p>
          <button className="ml-auto mt-auto bg-[#4BE1BA] w-[150px] font-bold h-[50px]  align-bottom  rounded-[12px] text-[20px]">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}
