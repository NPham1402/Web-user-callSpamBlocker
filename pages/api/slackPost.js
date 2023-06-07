import { WebClient } from "@slack/web-api";
export default function handler(req, res) {
  const token = process.env.SLACK_TOKEN;
  const { name, reson, phone, email } = req.headers;
  const slackClient = new WebClient(token);
  slackClient.chat.postMessage({
    text:
      "Người dùng tên:" +
      name +
      "\n Số điện thoại: " +
      phone +
      "\n Email: " +
      email +
      " .\n Muốn được liên lạc vơí lý do: " +
      reson,
    channel: "csb-contact",
  });
  res.status(200).json({ name: token });
}
