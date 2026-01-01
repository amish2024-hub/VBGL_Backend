const admin = require("firebase-admin");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodeToken = await admin.auth().verifyIdToken(token);

    req.user = decodeToken;

    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized user" });
  }
};
