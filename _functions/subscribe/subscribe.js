const fetch = require('node-fetch');
const base64 = require('base-64');

exports.handler = async (event, context) => {
  console.log('!!! event body !!!')
  console.log(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "You've signed up to the mailing list!",
    }),
  };
};
