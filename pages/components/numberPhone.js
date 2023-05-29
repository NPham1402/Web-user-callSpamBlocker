import { ClockCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React from "react";
import detail from "../detail";

export default function NumberPhone(props) {
  const router = useRouter();
  const href = {
    pathname: "detail",
    query: { id: props.id },
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="w-[45%] min-w-[300px] md:h-[183.5px] h-[83.5px]  mx-[10px] md:mt-[30px] mt-[10px] border-[1px] border-white rounded-2xl border  bg-[#c1c1c1]">
      <div className="md:m-[30px]">
        <div className="flex flex-row ">
          <ClockCircleOutlined className="text-[20px] md:text-[30px] m-[10px]" />
          <p className="pt-[12px] text-[#004948] font-semibold text-[14px] md:text-[20px]">
            {props.country}/({props.provider})
          </p>
        </div>
        <div className="flex flex-row">
          <p className="text-[14px] md:text-[30px] text-[#004948] m-[10px] font-bold">
            {props.zone + " " + props.numberPhone}
          </p>
          <button
            onClick={handleClick}
            className="ml-auto mt-auto mb-[8px] mr-[8px] md:mb-0 md:mr-0  bg-[#4BE1BA] md:w-[150px] w-[100px] font-bold md:h-[50px]  h-[25px] align-bottom  rounded-[12px] md:text-[20px] text-[12px]"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
}
