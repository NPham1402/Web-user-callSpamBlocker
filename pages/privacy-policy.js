import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NumberPhone from "../components/numberPhone";
import { useEffect, useState } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import urlImg from "../public/logo.png";
import AutoCompleteComponent from "../components/AutoComplete";
import Top50Component from "../components/Top50Component";
import News from "../components/News";
import { useRouter } from "next/router";
import MiniCompoent from "../components/miniCompoent";

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
            Privacy Policy
          </p>
          <p className="text-center font-medium text-[#221f49] text-[20px] ">
            Effective Date: 25/5/2023
          </p>
          <p className=" text-[18px] text-[#221f49]">
            This Privacy Policy describes how NVSH we collects, uses, protects,
            and discloses the information you provide when using our website,
            https://www.callspamblocker.online , and the services associated
            with it. By accessing or using our website, you consent to the
            collection and use of your information as described in this Privacy
            Policy.
          </p>
          <p className="font-medium text-[#221f49] text-[30px]  pt-[25px]">
            1 Use of Information
          </p>
          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            <p className="font-medium text-[#221f49] text-[20px] ">
              1.1 Personal Information:
            </p>
            When you visit our website or use our services, we may collect
            personal information that you voluntarily provide, such as your
            name, email address, and phone number. We collect this information
            only when you choose to submit it to us through our contact forms or
            other interactive features.
          </p>
          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            <p className="font-medium text-[#221f49] text-[20px] ">
              1.2 Usage Information:
            </p>
            We may also collect non-personal information about how you use our
            website, such as your IP address, browser type, operating system,
            and referring URLs. This information is collected automatically
            using cookies, log files, and similar technologies to enhance your
            user experience and improve our services.
          </p>
          <p className="font-medium text-[#221f49] text-[30px]  pt-[25px]">
            2 Use of Information
          </p>
          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            <p className="font-medium text-[#221f49] text-[20px] ">
              2.1 Provide and Improve Services:
            </p>
            We use the information collected to provide you with the services
            and information you request, respond to your inquiries, and improve
            the functionality and performance of our website.
          </p>
          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            <p className="font-medium text-[#221f49] text-[20px] ">
              2.2 Communication:
            </p>
            We may use your contact information to communicate with you,
            including sending you updates, newsletters, promotional materials,
            and other information related to our services. You have the option
            to unsubscribe from these communications at any time.
          </p>
          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            <p className="font-medium text-[#221f49] text-[20px] ">
              2.3 Analytics and Aggregated Data:
            </p>
            We may analyze the usage data to gain insights into how our website
            is accessed and used. This data is aggregated and anonymized, and it
            helps us understand user preferences, trends, and patterns, enabling
            us to improve our services and enhance user experience.
          </p>
          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            <p className="font-medium text-[#221f49] text-[20px] ">
              2.4 Legal Compliance and Protection:
            </p>
            We may use or disclose your information to comply with applicable
            laws, regulations, legal processes, or enforceable governmental
            requests, protect our rights, privacy, safety, or property, and
            respond to an emergency that threatens the life, health, or security
            of an individual.
          </p>
          <p className="font-medium text-[#221f49] text-[30px]  pt-[25px]">
            3 Information Sharing and Disclosure
          </p>

          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information in the following
            circumstances:
          </p>
          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            <p className="font-medium text-[#221f49] text-[20px] ">
              3.1 Service Providers:
            </p>
            We may engage trusted third-party service providers to assist us in
            operating our website, conducting our business, or providing
            services to you. These service providers have access to your
            personal information only to perform specific tasks on our behalf
            and are obligated to maintain its confidentiality.
          </p>
          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            <p className="font-medium text-[#221f49] text-[20px] ">
              3.2 Legal Requirements:
            </p>
            We may disclose your information in response to a subpoena, court
            order, or other governmental request, or when we believe in good
            faith that such disclosure is necessary to comply with the law,
            protect our rights, or investigate potential violations.
          </p>
          <p className="font-medium text-[#221f49] text-[30px]  pt-[25px]">
            4 Data Security
          </p>

          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            We take reasonable measures to protect the security of your
            information and prevent unauthorized access, disclosure, alteration,
            or destruction. However, please be aware that no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
          <p className="font-medium text-[#221f49] text-[30px]  pt-[25px]">
            5 Third-Party Links
          </p>

          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or the content of
            such websites. We encourage you to review the privacy policies of
            those third parties before providing any personal information.
          </p>
          <p className="font-medium text-[#221f49] text-[30px]  pt-[25px]">
            6 Changes to the Privacy Policy
          </p>

          <p className=" text-[18px] text-[#221f49] pl-[10px]">
            We may update this Privacy Policy from time to time. The updated
            version will be indicated by an
          </p>
        </div>
      </main>
      <MiniCompoent types="footer" />
    </>
  );
}
