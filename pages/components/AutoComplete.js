import { Autocomplete, Box, TextField, debounce } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";

function AutoCompleteComponent(props) {
  const [data, setData] = useState(null);

  const router = useRouter();

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
        console.log(items);
        const suggestions = items.result.map((item) => ({
          id: item._id,
          label: item.phoneNumber,
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
    fetchData(0);
  }, []);
  return (
    <Autocomplete
      options={data}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          +84 {option.label}
        </Box>
      )}
      onInputChange={handleInputChange}
      onChange={(event, value) => {
        if (value) {
          router.push({
            pathname: "detail",
            query: { id: value.id },
          });
        }
      }}
      getOptionLabel={(option) => option.label}
      sx={{ width: "500px", background: "white" }}
      renderInput={(params) => (
        <TextField
          variant="filled"
          {...params}
          label="Search phone number..."
        />
      )}
    />
  );
}

export default AutoCompleteComponent;
