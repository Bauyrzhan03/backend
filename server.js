const express = require("express");
const app = express();
const port = 35784;
app.use(express.static("public"))
app.set('views', 'ejs');




app.use("/contact", require("./routes/contact"));
app.use("/", require("./routes/index"));





app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

