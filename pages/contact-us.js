import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NumberPhone from "./components/numberPhone";
import { useEffect, useState } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import urlImg from "../public/logo.png";
import AutoCompleteComponent from "./components/AutoComplete";
import Top50Component from "./components/Top50Component";
import News from "./components/News";
import { useRouter } from "next/router";
import MiniCompoent from "./components/miniCompoent";
import { Input } from "postcss";

export default function Privacypolicy() {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <Head>
        <title>CallSpamBlocker</title>
        <meta
          name="description"
          content="CheckCallSpammer can help you to identify and block these calls, so you never have to worry about missing important calls or falling for a scam."
        />
        <meta
          property="og:title"
          content="Block the spam call and optimize your life - CallSpamBlocker"
        />
        <meta
          property="og:description"
          content="CheckCallSpammer can help you to identify and block these calls, so you never have to worry about missing important calls or falling for a scam."
        />
        <meta
          property="og:url"
          content="callspamblocker.online
"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.callspamblocker.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.272f7cfe.png&w=384&q=75"
          type="image/png"
        />
      </Head>
      <main className="relative">
        <div className="w-100 h-[500px] ml-auto bg-[#4BE1BA]">
          {/* <Button
            type="primary"
            className="w-[80px] p-0 h-[80px]"
            onClick={showDrawer}
          >
            <p className="text-[35px] text-black">≡</p>
          </Button> */}
          <Image
            alt="logo"
            width={300}
            height={300}
            src={urlImg}
            className="mx-auto pt-[60px] w-[200px]"
          />
          {/* <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <a>Some contents...</a>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer> */}
          <p className="text-center leading-none font-Raleway font-semibold md:text-[35px] text-[25px]  text-[#FFF8F8] ">
            Call Spam Blocker: Protecting Your Mobile Phone from Nuisance Calls
            and Scams
          </p>
          <div className=" rounded-[6px] text-center md:w-[500px] w-[300px] mx-auto mt-[15px] bg-white">
            <AutoCompleteComponent />
          </div>
        </div>
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-2 text-[25px] right-2 w-[50px] h-[50px]  border-[1px] border-white rounded-2xl border text-white bg-[#4BE1BA]"
          >
            &#8679;
          </button>
        )}
        <div className="font px-[50px]">
          <p className="font-medium md:text-[50px] text-[25px] text-center text-[#221f49]  pt-[25px]">
            Contact us
          </p>

          <p className=" text-[18px] text-[#221f49]">
            We appreciate your interest in contacting us. If you have any
            questions, feedback, or inquiries, please use the contact
            information provided below. We value your input and will do our best
            to respond to you in a timely manner.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .get("/api/slackPost", {
                  headers: {
                    name: e.target.name.value,
                    reson: e.target.reson.value,
                    phone: e.target.phone.value,
                    email: e.target.email.value,
                  },
                })
                .then((e) => {
                  router.push({
                    pathname: "/",
                  });
                });
            }}
          >
            <div className="bg-[#bfc3c9] w-100  rounded-[12px]">
              <div className="  flex flex-row">
                <div className="w-[50%] h-100 m-[10px]">
                  <p className="text-[20px] text-[#221f49]">
                    What do you want to say?
                  </p>
                  <textarea
                    name="reson"
                    type="text"
                    placeholder="  Fill in what you want to say us"
                    className="w-[100%] h-[130px] rounded-[12px] "
                  />
                </div>
                <div className="w-[50%] h-[150px] m-[10px]">
                  <p className="text-[20px] text-[#221f49]">Your name</p>
                  <input
                    name="name"
                    type="text"
                    placeholder=" Fill Your Name"
                    className="w-[100%] rounded-[6px] "
                  />
                  <p className="text-[20px] text-[#221f49]">Your Phone</p>
                  <input
                    name="phone"
                    type="text"
                    placeholder=" Fill Your Phone"
                    className="w-[100%] rounded-[6px] "
                  />
                  <p className="text-[20px] text-[#221f49]">Your Email</p>
                  <input
                    placeholder=" Fill Your Email"
                    name="email"
                    type="email"
                    className="w-[100%] rounded-[6px] "
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Send"
                className="bg-[#00FFFF] ml-[48%] mb-[15px] w-[70px] right-0 h-[40px] rounded-[12px] font-bold text-[#221f49] "
              />
            </div>
          </form>
        </div>
      </main>
      <MiniCompoent types="footer" />
    </>
  );
}
