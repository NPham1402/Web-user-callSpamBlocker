import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import MiniCompoent from "../components/miniCompoent";
import urlImg from "../public/logo.png";
import Image from "next/image";
import dayjs from "dayjs";
import AutoCompleteComponent from "../components/AutoComplete";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  FormControlLabel,
  TextField,
  debounce,
} from "@mui/material";
import Top50Component from "../components/Top50Component";
import { child, get, ref, set } from "firebase/database";
import { database } from "../components/firebase";
function Detail() {
  const [data, setData] = useState(null);

  const router = useRouter();

  const [storeData, setStroreData] = useState();
  const [reason, setReason] = useState();
  const [open, setOpen] = React.useState(true);
  const fetchData = (value) => {
    if (value === "") value = 0;

    axios
      .get(
        "https://api.call-spam-blocker.xyz/phone-numbers/" +
          value +
          "/suggest/1",
        {
          headers: { authorization: "spambl0ckerAuthorization2k1rbyp0wer" },
        }
      )
      .then((data) => {
        const items = data.data;
        const suggestions = items.result.map((item) => ({
          id: item._id,
          label: item.phoneNumber,
          status: item.status,
        }));
        setData(suggestions);
      });
  };

  const handleInputChange = React.useCallback(
    debounce((nextValue) => {
      fetchData(nextValue.target.value);
    }, 100),
    []
  );

  React.useEffect(() => {
    axios
      .post(
        process.env.NEXT_PUBLIC_SLACK_URL,
        { text: "check" },
        {
          data: { text: "check" },
          headers: {
            ContentType: "application/json",
          },
        }
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    fetchData(0);
  }, []);
  return (
    <>
      <Head>
        <title>Call Spam blocker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={
            "https://www.callspamblocker.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.272f7cfe.png&w=384&q=75"
          }
        />
      </Head>

      <main className="relative">
        <div className="w-100 pl-[10px] pt-[2px] flex flex-row justify-between h-[62px] bg-[#4BE1BA]">
          <Image
            alt="logo"
            width={60}
            height={40}
            onClick={() => {
              router.push({
                pathname: "/",
              });
            }}
            src={urlImg}
            className="my-auto"
          />

          <p className="text-[#4BE1BA]">adcd</p>
        </div>
        <p className=" font-bold  text-[25px] md:text-[50px]   text-center text-[#221f49] ">
          Unban A Phone Number
        </p>
        <div className=" mx-auto border-5 border-black rounded-[6px] m-auto w-[300px] md:w-[500px] ">
          <p className=" text-[20px] mb-[10px] text-[#221f49] ">
            Select your phone number:
          </p>
          <Autocomplete
            options={data}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <p className="text-[20px] font-bold text-[#221f49]">
                  {option.label}{" "}
                </p>
                <Chip
                  sx={{ marginLeft: "5px" }}
                  color="error"
                  label={option.status}
                />
              </Box>
            )}
            onInputChange={handleInputChange}
            onChange={(event, value) => {
              if (value) {
                setStroreData(value);
              }
            }}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                className="w-[300px] md:w-[500px]"
                variant="filled"
                {...params}
                label="Search for your phone number..."
              />
            )}
          />
          <p className=" text-[20px] mb-[10px] text-[#221f49] ">Reason:</p>
          <TextField
            className="w-[300px] md:w-[500px]"
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter your reason"
          />
          <div className="flex flex-grow">
            <Checkbox defaultChecked />
            <p className="my-auto text-[10px] md:text-[20px]">
              I promise my number is not a spam number.
            </p>
          </div>
          <Button
            className="w-[300px] md:w-[500px] text-sky-400"
            variant="contained"
            onClick={() => {
              if (storeData && reason) {
                axios
                  .patch(
                    "https://api.call-spam-blocker.xyz/phone-numbers/" +
                      storeData.label +
                      "/unban",
                    {
                      reason: reason,
                    },
                    {
                      headers: {
                        authorization: "spambl0ckerAuthorization2k1rbyp0wer",
                      },
                    }
                  )
                  .finally(() => {
                    const dbref = ref(database);
                    get(child(dbref, "Unban"))
                      .then((snapshot) => {
                        if (snapshot.exists()) {
                          let data = snapshot.val();
                          data.push({
                            reason: reason,
                            phone: storeData.label,
                            time: dayjs().format("DD/MM/YYYY"),
                          });
                          set(ref(database, "Unban"), data);
                        } else {
                          set(ref(database, "Unban"), [
                            {
                              reason: reason,
                              phone: storeData.label,
                              time: dayjs().format("DD/MM/YYYY"),
                            },
                          ]);
                        }
                      })
                      .catch((error) => {
                        console.error(error);
                      })
                      .finally(() => {
                        router.push({
                          pathname: "/",
                        });
                      });
                  });
              }
            }}
          >
            send
          </Button>
        </div>
      </main>
      {/* <MiniCompoent types="footer" /> */}
    </>
  );
}

export default Detail;
