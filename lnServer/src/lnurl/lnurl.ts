import lnurl from "lnurl";
import "dotenv/config";

const lnurlServer = lnurl.createServer({
  host: "localhost",
  url: process.env.SERVER_BASE_URL,
  port: 5002,
  endpoint: "/lnurl",
  auth: {
    apiKeys: [],
  },
  lightning: {
    backend: "lnd",
    config: {
      hostname: process.env.LND_RPC_URL,
      cert: process.env.LND_TLS_PATH,
      macaroon: process.env.LND_MACROON_PATH,
    },
  },
});

export default lnurlServer;
