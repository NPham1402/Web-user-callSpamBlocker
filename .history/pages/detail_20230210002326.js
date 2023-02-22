import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FcSearch } from "react-icons/fc";
function detail() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
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
          <p className="pl-[5px] pt-[6px] leading-none font-Raleway font-semibold text-[25px] text-[#FFF8F8] ">
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
        <p className="text-[25px] text-[#FFF8F8] ">About this number</p>
        <div className="w-[98%] my-[15px] rounded-[16px] mx-auto h-[50px] bg-[#bfc3c9]">
          <p>number Phone</p>
        </div>
      </main>
      <footer class="bg-gray-800 mt-[50px] text-white py-4">
        <div class="container mx-auto">
          <p class="text-center text-sm">&copy; 2023 Nguyen Pham Do</p>
          <div class="flex justify-center">
            <a href="#" class="text-white mx-2">
              Privacy Policy
            </a>
            <a href="#" class="text-white mx-2">
              Terms of Use
            </a>
            <a href="#" class="text-white mx-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default detail;
