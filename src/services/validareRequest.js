const requestContentForUsers = [
  "firstName",
  "lastName",
  "email",
  "password",
  "age",
  "address",
  "tags",
];
const requestContentForArticles = ["name", "description", "type", "tags"];

const validateRequestContent = (requiredProperties) => {
  return (req, res, next) => {
     const requestBody = req.body;

    const missingProperties = requiredProperties.filter(
      (prop) => !(prop in requestBody)
    );

    if (missingProperties.length > 0) {
      return res
        .status(400)
        .send(`Missing required properties: ${missingProperties.join(", ")}`);
    }

    next();
  };
};

module.exports = {
  validateRequestContent,
  requestContentForUsers,
  requestContentForArticles,
};
