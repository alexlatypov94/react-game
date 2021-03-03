const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "client", "dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
}

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        app.listen(PORT, () =>
            console.log(`App has been started on port ${PORT}`)
        );
    } catch (e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
}

start();
