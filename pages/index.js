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

export default function Home() {
  const [showButton, setShowButton] = useState(false);

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
            CheckCallSpammer: Protecting Your Mobile Phone from Nuisance Calls
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
            About for Project
          </p>
          <p className="font-medium text-[#221f49] text-[30px]  pt-[25px]">
            Have you been receiving a large number of unwanted calls from
            unknown numbers?
          </p>
          <p className=" text-[18px] text-[#221f49]">
            CheckCallSpammer can help you to identify and block these calls, so
            you never have to worry about missing important calls or falling for
            a scam.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            Protect Yourself from Scams
          </p>
          <p className=" text-[18px]  text-[#221f49]  ">
            CheckCallSpammer are designed to help you manage and block unwanted
            calls. They work by using a database of known scam numbers, as well
            as user-generated feedback, to identify and block calls that are
            likely to be unwanted. Some apps also have features like call
            blocking and call identification, which can help you to manage your
            calls more effectively.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            Protect Yourself from Scams
          </p>
          <p className=" text-[18px] text-[#221f49]  ">
            Scammers are becoming more sophisticated, and it can be difficult to
            identify which calls are genuine and which are not. Anti-call spam
            apps can help you to protect yourself from scams by blocking calls
            from numbers that have been reported as suspicious. They can also
            help you to avoid falling for a scam by providing you with
            information about the caller, such as their name, location, and type
            of call.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            Easily Manage Your Calls
          </p>
          <p className=" text-[18px] text-[#221f49]  ">
            In addition to protecting you from scams,CheckCallSpammer can also
            help you to manage your calls more effectively. With features like
            call blocking and call identification, you can control which calls
            you receive, and who you receive them from. This means that you can
            block calls from numbers that you don&apos;t want to receive calls
            from, and allow calls from numbers that you do want to receive calls
            from.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            Avoid Nuisance Calls
          </p>
          <p className=" text-[18px] text-[#221f49]  ">
            Nuisance calls can be annoying, and they can also be time-consuming.
            CheckCallSpammer can help you to avoid nuisance calls by blocking
            calls from numbers that have been reported as unwanted. This means
            that you can enjoy your mobile phone without having to worry about
            being disturbed by unwanted calls.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            User-Generated Feedback
          </p>
          <p className=" text-[18px] text-[#221f49]  ">
            One of the key benefits ofCheckCallSpammer is that they rely on
            user-generated feedback to improve their accuracy. This means that
            the more people who use the app, the better it will become at
            identifying and blocking unwanted calls. If you receive a call from
            an unknown number, you can use the app to find out who the caller
            is, and then leave feedback about the call, which can help other
            users in the future.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            Conclusion
          </p>
          <p className=" text-[18px] text-[#221f49]  ">
            CheckCallSpammer are a useful tool for protecting your mobile phone
            from unwanted calls and scams. With features like call blocking and
            call identification, you can manage your calls more effectively and
            avoid falling for scams. With user-generated feedback, these apps
            can also improve their accuracy, so you can have peace of mind
            knowing that you are protected from unwanted calls and scams.
          </p>
          <p className="font-medium md:text-[50px] text-[25px] text-center text-[#221f49]  pt-[25px]">
            The newest number phone spam
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            <Top50Component />
          </div>
          <p className="font-medium md:text-[50px] text-[25px] text-center text-[#221f49]  pt-[25px]">
            The News
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            <News />
          </div>
        </div>
      </main>
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
    </>
  );
}
