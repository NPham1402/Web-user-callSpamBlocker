import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

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
        <div className="w-100 pl-[10px] flex flex-row h-[50px] bg-[#4BE1BA]">
          <img
            src="https://static.callblocker.org/img/logo.png"
            className=" w-[35px] h-[40px]"
          />
          <p className="pl-[5px] pt-[6px] leading-none font-Raleway font-semibold text-[25px] text-[#FFF8F8] ">
            Anti-Call Spam Apps
          </p>
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
