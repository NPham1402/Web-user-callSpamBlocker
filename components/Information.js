import { child, get } from "firebase/database";
import React, { useEffect } from "react";
import { formatCompactNumber } from "./formatNumber";

function Information(props) {
  const date = new Date();
  const month = date.getMonth() + 1;
  const [data, setData] = React.useState(null);
  let timeNow;
  if (date.getMonth() + 1 < 10) {
    timeNow = "1-0" + month + "-" + date.getFullYear();
  } else {
    timeNow = "1-" + month + "-" + date.getFullYear();
  }

  useEffect(() => {
    get(child(props.dbref, "Report/" + timeNow))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const reportInMonth = snapshot.val();
          get(child(props.dbref, "Search/" + timeNow))
            .then((snapshots) => {
              if (snapshots.exists()) {
                const searchInThisMonth = snapshots.val();
                setData({ reportInMonth, searchInThisMonth });
              } else {
                console.log("No data available");
              }
            })
            .catch((errors) => {
              console.error(errors);
            });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    data && (
      <div className="w-full h-[100px] flex flex-row p-[15px] justify-between mt-[20px] rounded-2xl bg-[#c1c1c1]">
        <div className="text-center">
          <p className="text-[30px] font-bold">
            {formatCompactNumber(props.data.TotalNumber)}
          </p>
          <p className="text-[20px] font-semibold">Total Number</p>
        </div>
        <div className="text-center">
          <p className="text-[30px] font-bold">
            {formatCompactNumber(props.data.TotalReport)}
          </p>
          <p className="text-[20px] font-semibold">Total Reports</p>
        </div>
        <div className="text-center">
          <p className="text-[30px] font-bold">
            {formatCompactNumber(data.reportInMonth)}
          </p>
          <p className="text-[20px] font-semibold">Reports in this month</p>
        </div>
        <div className="text-center">
          <p className="text-[30px] font-bold">
            {formatCompactNumber(props.data.TotalSearch)}
          </p>
          <p className="text-[20px] font-semibold">Total Reports</p>
        </div>
        <div className="text-center">
          <p className="text-[30px] font-bold">
            {formatCompactNumber(data.searchInThisMonth)}
          </p>
          <p className="text-[20px] font-semibold">Searching in this Month</p>
        </div>
        <div className="text-center">
          <p className="text-[30px] font-bold">
            {formatCompactNumber(props.data.TotalSpammer)}
          </p>
          <p className="text-[20px] font-semibold">Total Spammers</p>
        </div>
      </div>
    )
  );
}

export default Information;
