import { ClockCircleOutlined } from "@ant-design/icons";
import React from "react";

export default function MiniCompoent(props) {
  return (
    <>
      {props.types == "line" && (
        <div className="md:flex md:flex-row md:justify-between  text-center ">
          <p className="md:text-[25px] text-[20px] md:w-[200px]  text-white ml-[5px] font-semibold my-auto ">
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
            <p className="text-center text-sm">&copy; 2023 Nguyen Pham Do</p>
            <div className="flex justify-center">
              <a href="#" className="text-white mx-2">
                Privacy Policy
              </a>
              <a href="#" className="text-white mx-2">
                Terms of Use
              </a>
              <a href="#" className="text-white mx-2">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      )}

      {props.types === "noti" && (
        <div className="bg-[#bfc3c9] md:m-auto mt-[10px] rounded-[12px]  w-[300px] md:w-[400px] md:h-[95px] h-[70px]">
          <div className=" h-full px-auto">
            <p className="md:text-[30px] text-[20px] font-bold  text-center ">
              {" "}
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
          key={props.key}
          className="w-[45%] min-w-[300px] md:h-[183.5px] h-[100px] mx-[10px] mt-[30px] border-[1px] border-white rounded-2xl border  bg-[#bfc3c9]"
        >
          <div className="md:m-[30px]">
            <div className="flex flex-row ">
              <ClockCircleOutlined className=" md:text-[30px] m-[10px] m-[10px]" />
              <p className="pt-[10px]  text-[#004948] font-semiboldtext-[14px] md:text-[30px]  ">
                {props.number}/({props.hourse})
              </p>
            </div>
            <div className="flex flex-row">
              <p className="text-[14px] md:text-[25px] line-clamp-2  text-[#004948] m-[10px] font-bold">
                {"Content: " + props.comment}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
