import React, { useEffect, useState } from "react";
import NumberPhone from "./numberPhone";
import axios from "axios";
import Image from "next/image";
import dayjs from "dayjs";

export default function News() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://backendextension-production.up.railway.app/callspamblocker/news"
      )
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    loading === false &&
    data.map(
      (value, index) =>
        index < 6 && (
          <div
            className="md:w-[30%] w-[300px] h-[450px]  mx-[10px] mt-[30px] border-[1px] border-white rounded-2xl border  bg-[#c1c1c1] cursor-pointer "
            key={index}
            onClick={() => window.open(value.url, "_blank")}
          >
            <img
              className="w-[100%] h-[300px] border-[1px] border-white rounded-2xl border"
              src={value.urlToImage}
            />
            <p className="line-clamp-1 pt-[3px] mx-[10px]  font-bold">
              {value.title}
            </p>
            <p className="line-clamp-4 pb-[3px] mx-[10px]  text-[14px]">
              {value.content}
            </p>
            <div className="flex flex-row justify-between">
              <p className=" pb-[3px] line-clamp-1 mx-[10px]  text-[12px] font-bold">
                {" "}
                Date: {dayjs(value.publishedAt).format("DD-MM-YYYY")}{" "}
              </p>
              <p className=" pb-[3px]   line-clamp-1 mx-[10px]  text-[12px] font-bold">
                {" "}
                Author: {value.author}{" "}
              </p>
            </div>
          </div>
        )
    )
  );
}
