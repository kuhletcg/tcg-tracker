const express = require("express");
const app = express();
const cors = require("cors");
const { studentRoutes } = require("./routes/api/student");
app.use(cors());

// bodyparser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

studentRoutes(app);

app.listen(4500, () => console.log(`Server is running on port 4500`));
