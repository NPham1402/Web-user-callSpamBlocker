import { ClockCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function MiniCompoent(props) {
  return (
    <>
      {props.types == "line" && (
        <div className="md:flex md:flex-row md:justify-between text-center md:h-auto h-[70px]   ">
          <p className="md:text-[25px] text-[20px] md:w-[200px] text-white ml-[5px] font-semibold my-auto ">
            {props.headerLine}
          </p>
          <p
            className={
              "md:text-[35px] text-[25px] md:pr-[180px] font-bold text-black text-[white] "
            }
          >
            {props.contents}
          </p>
          <p className="md:visible invisible text-[#bfc3c9]">nj</p>
        </div>
      )}
      {props.types === "footer" && (
        <footer className="bg-gray-800 mt-[50px] text-white py-4">
          <div className="container mx-auto">
            <p className="text-center text-sm">&copy; 2023 Call Spam Blocker</p>
            <div className="flex justify-center">
              <Link href="/privacy-policy" className="text-white mx-2">
                Privacy Policy
              </Link>
              <Link href="/about-us" className="text-white mx-2">
                About us
              </Link>
              <Link href="/contact-us" className="text-white mx-2">
                Contact Us
              </Link>
            </div>
          </div>
        </footer>
      )}
      {props.types === "information" && (
        <div className="text-center">
          <p
            className={"text-[20px]  text-[" + props.color + "]  font-semibold"}
          >
            {props.header}
          </p>
          <p
            className={
              "text-[40px] p-0 m-0 text-[" + props.colorTitle + "] font-bold"
            }
          >
            {props.title}
          </p>
          <p className={"text-[25px] text-[" + props.color + "] font-semibold"}>
            {props.detail}
          </p>
        </div>
      )}

      {props.types === "noti" && (
        <div className="bg-[#bfc3c9]  mt-[10px] rounded-[12px] mx-[5px]  w-[300px] md:w-[400px] md:h-[95px] h-[70px]">
          <div className=" h-full px-auto">
            <p className="md:text-[30px] text-[20px] font-bold  text-center ">
              {props.headerLine}
            </p>
            <p className="text-center text-white text-[25px] font-semibold">
              {props.contents}
            </p>
          </div>
        </div>
      )}
      {props.types === "comments" && (
        <div
          className={
            "md:w-[30%] relative w-[80%] min-w-[300px]  md:h-[170.5px] h-[140px] mx-[10px] mt-[30px] border-[1px] border-white rounded-2xl border  bg-[#bfc3c9]"
          }
          key={props.key}
        >
          <div className=" w-[50px] h-[50px] absolute top-[30%] left-0 right-0   rounded-full"></div>
          <div className="md:mx-[30px] my-[10px] text-center ">
            <p className="pt-[2px]  text-[#004948] font-semiboldtext-[14px] md:text-[30px]  ">
              Title: {props.number}
            </p>
            <p className="pt-[2px]  text-[#004948] font-semiboldtext-[14px] md:text-[30px]  ">
              Date: {props.hourse}
            </p>
            <Tooltip title={props.comment}>
              <p className=" text-[14px] line-clamp-1 cursor-pointer md:text-[25px] text-[#004948] m-[10px] font-bold">
                {"Content: " + props.comment}
              </p>
            </Tooltip>
          </div>
        </div>
      )}
    </>
  );
}
