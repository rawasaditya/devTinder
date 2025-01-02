const adminAuth = (req, res, next) => {
  if (req?.user?.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
};

const userAuth = (req, res, next) => {
  if (!req?.user) {
    return res.status(403).json({ error: "Unauthorized access" });
  }
  next();
};
module.exports = { adminAuth, userAuth };
