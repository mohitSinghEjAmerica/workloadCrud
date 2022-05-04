const express = require("express");
const cors = require('cors');
const app = express();
const glDepartmentRouter = require("./routes/glDepartment");
const glGroupRouter = require("./routes/glGroup");
const wlCategoryRouter = require("./routes/wlCategory");
const wlDepartmentRouter = require("./routes/wlDepartment");
const wlStatusRouter = require("./routes/wlStatus");
const wlStatusCategoryRouter = require("./routes/wlStatusCategory");
const wlWorkloadRouter = require("./routes/wlWorkload");
const wlWorkloadActivityRouter = require("./routes/wlWorkloadActivity");

app.use(cors());
app.use(express.json());
const db = require("./models");

// Routers
app.use("/glDepartment", glDepartmentRouter);
app.use("/glGroup", glGroupRouter);
app.use("/wlCategory", wlCategoryRouter);
app.use("/wlDepartment", wlDepartmentRouter);
app.use("/wlStatus", wlStatusRouter);
app.use("/wlStatusCategory", wlStatusCategoryRouter);
app.use("/wlWorkload", wlWorkloadRouter);
app.use("/wlWorkloadActivity", wlWorkloadActivityRouter);

// Initialize the server
db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server running on port 3002");
  });
});