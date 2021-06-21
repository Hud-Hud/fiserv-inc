import * as serverless from "serverless-http";
import * as express from "express";
// create express app object
const app = express();

app.post("/api/v1/parse", function (req, res) {
  const v1Client = {
    statusCode: 200,
    data: {
      firstName: "JOHN0000",
      lastName: "MICHAEL000",
      clientId: "9994567",
    },
  };
  res.send(v1Client);
});
app.post("/api/v2/parse", function (req, res) {
  const v2Client = {
    statusCode: 200,
    data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" },
  };
  res.send(v2Client);
});

// return api response
export const handler = serverless(app);
