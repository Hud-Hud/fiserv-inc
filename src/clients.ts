import * as serverless from "serverless-http";
import * as express from "express";
// create express app object
const app = express();

interface Client {
  firstName: string;
  lastName: string;
  clientId: string;
}

app.post("/api/v1/parse", (req, res) => {
  const client: Client = {
    firstName: "JOHN0000",
    lastName: "MICHAEL000",
    clientId: "9994567",
  };

  const v1Client = {
    statusCode: 200,
    data: client,
  };
  res.send(v1Client);
});

app.post("/api/v2/parse", (req, res) => {
  const client: Client = {
    firstName: "JOHN",
    lastName: "MICHAEL",
    clientId: "999-4567",
  };
  const v2Client = {
    statusCode: 200,
    data: client,
  };
  res.send(v2Client);
});

// return api response
export const handler = serverless(app);
