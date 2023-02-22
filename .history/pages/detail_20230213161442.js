import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FcSearch } from "react-icons/fc";
import MiniCompoent from "./components/miniCompoent";
function detail() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  useEffect(() => {
    axios.get("");
  }, []);
  return (
    <>
      {" "}
      <Head>
        <title>Check number spam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <div className="w-100 pl-[10px] pt-[2px] flex flex-row h-[50px] bg-[#4BE1BA]">
          <img
            src="https://static.callblocker.org/img/logo.png"
            className=" w-[35px] h-[40px]"
          />
          <p className="pl-[5px] pt-[6px] leading-none font-Raleway font-bold text-[25px] text-[#FFF8F8] ">
            Anti-Call Spam Apps
          </p>
          <div className="flex flex-row p-[10px] rounded-[6px]  w-[300px] h-[40px] ml-[12px] mt-[3px] bg-white">
            <input
              className="w-full h-full outline-none"
              placeholder="Search phone number..."
            />
            <FcSearch className="text-[20px] cursor-pointer" />
          </div>
        </div>
        <p className=" font-bold text-[50px] text-center text-[#221f49] ">
          About this number
        </p>
        <p className=" font-medium text-[30px] text-left pl-[15px] text-[#221f49] ">
          Information
        </p>
        <div className="w-[98%] my-[15px] rounded-[16px]    mx-auto bg-[#bfc3c9]">
          <MiniCompoent
            types="line"
            headerLine="Number Phone:"
            contents="3326652656"
          />
          <MiniCompoent
            types="line"
            headerLine="Number Phone:"
            contents="3326652656"
          />
          <MiniCompoent
            types="line"
            headerLine="Number Phone:"
            contents="3326652656"
          />
          <MiniCompoent
            types="line"
            headerLine="Number Phone:"
            contents="3326652656"
          />
        </div>
        <p className=" font-medium text-[30px] text-left pl-[25px] text-[#221f49] ">
          Comments
        </p>
      </main>
      <MiniCompoent types="footer" />
    </>
  );
}

export default detail;
