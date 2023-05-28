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
      .get("https://newsapi.org/v2/everything?q=spam-phone&apiKey=3a2b177358fd4577b507c7923486b29f", {
        headers: { authorization: "spambl0ckerAuthorization2k1rbyp0wer" },
      })
      .then((data) => {
        setData(data.data.articles);
        setLoading(false);
      });
  }, []);

  return (
    loading === false &&
    data.map((value,index) => (
      <div className="w-[30%] h-[450px]  mx-[10px] mt-[30px] border-[1px] border-white rounded-2xl border  bg-[#c1c1c1] cursor-pointer " key={index} onClick={()=>  window.open(value.url, "_blank")}>
        <img className="w-[100%] h-[300px] border-[1px] border-white rounded-2xl border" src={value.urlToImage}/>
        <p className="line-clamp-1 pt-[3px] mx-[10px]  font-bold">{value.title}</p>
           <p className="line-clamp-4 pb-[3px] mx-[10px]  text-[14px]">{value.content}</p>
           <div className="flex flex-row justify-between">

           <p className=" pb-[3px] line-clamp-1 mx-[10px]  text-[12px] font-bold"> Date: {dayjs(value.publishedAt).format("DD-MM-YYYY")}  </p>
           <p className=" pb-[3px]   line-clamp-1 mx-[10px]  text-[12px] font-bold">   Author: {value.author} </p>
           </div>
 
      </div>
    ))
  );
}