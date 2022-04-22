const express = require("express");
const app = express();
const port = 3000;
app.set('views','ejs');
app.use("/index", require("./index"));
app.use("/contact", require("./contact"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
