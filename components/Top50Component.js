import React, { useEffect, useState } from "react";
import NumberPhone from "../components/numberPhone";
import axios from "axios";

export default function Top50Component() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.call-spam-blocker.xyz/phone-numbers/0/suggest/3", {
        headers: { authorization: "spambl0ckerAuthorization2k1rbyp0wer" },
      })
      .then((data) => {
        setData(data.data.result);
        setLoading(false);
      });
  }, []);

  return (
    loading === false &&
    data.map(
      (value, index) =>
        index < 6 && (
          <NumberPhone
            zone={"+84 "}
            country={"Viet Nam"}
            numberPhone={value.phoneNumber}
            provider={value.reportList.length + " reports"}
            key={value._id}
            id={value._id}
          />
        )
    )
  );
}
