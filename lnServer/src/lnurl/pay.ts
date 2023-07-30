import lnurlServer from "./lnurl";

const tag = "payRequest";

const params = {
  minSendable: 100,
  maxSendable: 200000,
  metadata: '[["text/plain", "lnurl-node"]]',
  commentAllowed: 500,
};

const options = {};

export const createPayment = (): any => {
  const data = lnurlServer
    .generateNewUrl(tag, params, options)
    .then((result: any) => {
      const { encoded, secret, url } = result;
      console.log({ encoded, secret, url });
    })
    .catch((error: Error) => {
      console.error(error);
    });

  return data;
};
