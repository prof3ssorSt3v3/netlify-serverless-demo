// /.netlify/functions/yep

exports.handler = function (event, context, callback) {
  //event - similar to express Request object
  console.log(event);

  let steve = process.env.STEVE;
  console.log(steve);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: `Yep. Yep. Yep. ${steve}` }),
  });
};
