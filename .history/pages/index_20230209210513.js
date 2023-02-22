import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NumberPhone from "./components/numberPhone";
import { useEffect, useState } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3000/api/getnumber").then((value) => {
      console.log(value.data);
      setData(value.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Check number spam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <div className="w-100 h-[420px] bg-[#4BE1BA]">
          <img
            src="https://static.callblocker.org/img/logo.png"
            className="mx-auto pt-[60px] w-[200px]"
          />
          <p className="text-center leading-none font-Raleway font-semibold text-[35px] text-[#FFF8F8] ">
            Anti-Call Spam Apps: Protecting Your Mobile Phone from Nuisance
            Calls and Scams
          </p>
          <div className="flex flex-row p-[10px] rounded-[6px]  w-[300px] h-[40px] ml-[12px] mt-[3px] bg-white">
            <input
              className="w-full h-full "
              placeholder="Search phone number..."
            />
            <FcSearch className="text-[20px]" />
          </div>
        </div>
        <div className="font px-[50px]">
          <p className="font-medium text-[50px] text-center text-[#221f49]  pt-[25px]">
            About for Project
          </p>
          <p className="font-medium text-[#221f49] text-[30px]  pt-[25px]">
            Have you been receiving a large number of unwanted calls from
            unknown numbers?
          </p>
          <p className=" text-[18px] text-[#221f49]">
            Anti-call spam apps can help you to identify and block these calls,
            so you never have to worry about missing important calls or falling
            for a scam.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            Protect Yourself from Scams
          </p>
          <p className=" text-[18px]  text-[#221f49]  ">
            Anti-call spam apps are designed to help you manage and block
            unwanted calls. They work by using a database of known scam numbers,
            as well as user-generated feedback, to identify and block calls that
            are likely to be unwanted. Some apps also have features like call
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
            In addition to protecting you from scams, anti-call spam apps can
            also help you to manage your calls more effectively. With features
            like call blocking and call identification, you can control which
            calls you receive, and who you receive them from. This means that
            you can block calls from numbers that you don't want to receive
            calls from, and allow calls from numbers that you do want to receive
            calls from.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            Avoid Nuisance Calls
          </p>
          <p className=" text-[18px] text-[#221f49]  ">
            Nuisance calls can be annoying, and they can also be time-consuming.
            Anti-call spam apps can help you to avoid nuisance calls by blocking
            calls from numbers that have been reported as unwanted. This means
            that you can enjoy your mobile phone without having to worry about
            being disturbed by unwanted calls.
          </p>
          <p className="font-medium text-[30px] text-[#221f49]  pt-[25px]">
            User-Generated Feedback
          </p>
          <p className=" text-[18px] text-[#221f49]  ">
            One of the key benefits of anti-call spam apps is that they rely on
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
            Anti-call spam apps are a useful tool for protecting your mobile
            phone from unwanted calls and scams. With features like call
            blocking and call identification, you can manage your calls more
            effectively and avoid falling for scams. With user-generated
            feedback, these apps can also improve their accuracy, so you can
            have peace of mind knowing that you are protected from unwanted
            calls and scams.
          </p>
          <p className="font-medium text-[50px] text-center text-[#221f49]  pt-[25px]">
            The newest number phone spam
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            {loading === false &&
              data.map((value) => (
                <NumberPhone
                  zone={value.zone}
                  country={value.country}
                  numberPhone={value.phone_number}
                  provider={value.provider}
                  key={value._id}
                  id={value._id}
                />
              ))}
          </div>
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
