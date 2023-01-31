const env = process.env;

const check_api_key = (req, res, next) => {
  const { api_key } = req.headers; 

  if (!api_key) {
    return res.status(401).send({
      message: "Invalid access key, you are not authorized"
    });
  }

  if (env.API_KEY !== api_key) {
    return res.status(401).send({
      message: "Invalid access key, you are not authorized"
    });
  }

  next();
};

module.exports = {
  check_api_key
};
