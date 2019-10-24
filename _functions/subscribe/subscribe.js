const fetch = require('node-fetch');
const base64 = require('base-64');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    console.log('ERROR:', 'Method Not Allowed');
    return { statusCode: 200, body: 'done' };
  }

  try {
    const signature = event.headers["x-webhook-signature"];
    if (!signature) {
      console.log('ERROR:', 'signature is not found');
      return { statusCode: 200, body: 'done' };
    }
    const decoded = jwt.verify(signature, process.env.WEBHOOK_TOKEN, {
      algorithms: 'HS256',
      issuer: 'netlify',
    });
    const encoded = crypto.createHash('sha256').update(event.body).digest("hex");
    if (decoded.sha256 !== encoded) {
      console.log('ERROR:', 'signature is not correct');
      return { statusCode: 200, body: 'done' };
    }

    const { email, name } = JSON.parse(event.body);
    if (!email && !name) {
      console.log('ERROR:', 'Email or Name is not found');
      return { statusCode: 200, body: 'done' };
    }

    const subscriber = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name
      }
    };
    const baseUrl = 'https://us7.api.mailchimp.com/3.0/lists/2023459a03/members/';
    const hashedEmail = crypto.createHash('md5').update(email.toLowerCase()).digest("hex");
    const creds = `any:${process.env.MAILCHIMP_KEY}`;
    const Authorization = `Basic ${base64.encode(creds)}`;
    const headers = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization
    }

    const status = await fetch(baseUrl + hashedEmail, {
      method: 'GET',
      headers
    })
    const statusData = await status.json();

    if (statusData.status === 404) {
      const response = await fetch(
        baseUrl,
        {
          method: 'POST',
          headers,
          body: JSON.stringify(subscriber),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.log('ERROR 1:', data);
      }
    } else if (statusData.status === 'unsubscribed') {
      const response = await fetch(
        baseUrl + hashedEmail,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify(subscriber),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.log('ERROR 2:', data);
      }
    } else {
      console.log('ERROR 3:', statusData);
    }

    return { statusCode: 200, body: 'done' }
  } catch (err) {
    console.log('ERROR 0:', err);
    return { statusCode: 200, body: 'done' }
  }
};
