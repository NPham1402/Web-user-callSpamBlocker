import axios from "axios";
function postSlack(message) {
  const options = {
    method: "post",
    baseURL: process.env.NEXT_PUBLIC_SLACK_URL,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      attachments: [{ text: message }],
    },
  };

  return options;
}

export default postSlack;
