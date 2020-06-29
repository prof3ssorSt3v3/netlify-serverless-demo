// /.netlify/functions/yep

exports.handler = (event, context, callback) => {
  //event = Express Request object (similar)
  console.log(event);
  let steve = process.env.STEVE;
  console.log(steve);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(`Yep. yep. yep. ${steve}`),
  });
};
