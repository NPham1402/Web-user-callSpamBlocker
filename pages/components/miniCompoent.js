import { ClockCircleOutlined } from "@ant-design/icons";
import React from "react";

export default function MiniCompoent(props) {
  return (
    <>
      {props.types == "line" && (
        <div className="flex flex-row">
          <p className="text-[25px] font-semibold ml-[10px] my-auto align-text-bottom">
            {props.headerLine}
          </p>
          <p className="text-[35px] m-auto font-bold text-[white] ">
            {props.contents}
          </p>
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
        <div className="bg-[#808080] m-auto rounded-[12px] w-[400px] h-[95px]">
          <div className=" h-full px-auto">
            <p className="text-[30px] font-bold  text-center ">
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
        <>
          <div className="w-[45%] h-[183.5px] mx-[10px] mt-[30px] border-[1px] border-white rounded-2xl border  bg-[#c1c1c1]">
            <div className="m-[30px]">
              <div className="flex flex-row ">
                <ClockCircleOutlined className="text-[30px] m-[10px]" />
                <p className="pt-[10px] text-[#004948] font-semibold text-[25px] ">
                  {props.number}/({props.hourse} ago)
                </p>
              </div>
              <div className="flex flex-row">
                <p className="text-[20px] text-[#004948] m-[10px] font-bold">
                  {props.comment}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
