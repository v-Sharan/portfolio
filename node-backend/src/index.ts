import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Resend } from "resend";
import { config } from "dotenv";

config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.post("/email", async (req: Request, res: Response) => {
  const { name, message, email } = req.body;

  if (!name || !message || !email) {
    return res
      .json({ message: "Provide some information", status: "failed" })
      .status(400);
  }

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["vsharansago@gmail.com"],
    subject: `Email from portfolio ${name}`,
    html: `<body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
      <tbody>
        <tr style="width:100%">
          <td>
            <p style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700">Message from ${name},</p>
            <p style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700">Email: ${email}</p>
            <p style="font-size:16px;line-height:26px;margin:16px 0">${message}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>`,
  });

  if (error) {
    return res.status(400).json({ error, status: "failed" });
  }

  res.status(200).json({ message: "message send", status: "ok" });
});

app.listen(4000, () => {
  console.log("Running server");
});
