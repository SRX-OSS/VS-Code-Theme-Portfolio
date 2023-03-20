import type { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

type Data = {
  data: any;
  error: any;
};
AWS.config.update({ region: "ap-south-1" });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var params = {
    Destination: {
      CcAddresses: [],
      // replace below email with email to which you want to receive the message
      ToAddresses: ["toemail@tomail.com"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<div>
            My Name: ${req.body.name}
          </div><div>
            My Message: <b>${req.body.message}</b>
          </div><div>
            My Email: </i>${req.body.email}</i>
          </div>`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Hi I am ${req?.body?.name}, from contact page.`,
      },
    },
    Source: "youremail@gmail.com",
    ReplyToAddresses: [],
  };

  var sendPromise = new AWS.SES({
    apiVersion: "2010-12-01",
    // Use env variables for below secret keys
    accessKeyId: "awsAccessKey",
    secretAccessKey: "awsSecretAccessKey",
    region: "ap-south-1",
  })
    .sendEmail(params)
    .promise();

  sendPromise
    .then(function (data) {
      console.log(data);
      res.status(200).json({ data: true, error: "" });
    })
    .catch(function (err) {
      console.error(err, err.stack);
      res.status(200).json({ data: true, error: "" });
    });
}
