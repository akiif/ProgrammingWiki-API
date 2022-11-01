require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

const API_KEY = process.env.API_KEY;
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const url =
    "mongodb+srv://" +
    username +
    ":" +
    password +
    "@" +
    cluster +
    "/programmingwikiDB";

mongoose.connect(url, () => {
    console.log("Database Connection Successful!");
});

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    tags: [],
});

const Article = mongoose.model("Article", articleSchema);

app.get("/", (req, res) => {
    Article.find({}, (err, results) => {
        if (!err) {
            res.status(200);
            res.send(results);
        } else {
            res.status(404);
            res.json({ err: "Failed to fetch the query." });
        }
    });
});

app.get("/articles", (req, res) => {
    const { q, tags } = req.query;
    const regex = new RegExp(["^", q, "$"].join(""), "i");
    let article = {};

    if (q && tags) {
        article = {
            title: regex,
            tags: { $in: tags },
        };
    } else if (q && tags == null) {
        article = {
            title: regex,
        };
    } else if (q == null && tags) {
        article = {
            tags: { $in: tags },
        };
    }

    Article.find(article, (err, results) => {
        if (!err) {
            res.status(200);
            res.send(results);
        } else {
            res.status(404);
            res.json({ err: "Failed to fetch the query." });
        }
    });
});

app.post("/articles", (req, res) => {
    const { title, content, tags, api_key } = req.body;

    const article = new Article({
        title: title,
        content: content,
        tags: tags,
    });

    if (api_key === API_KEY) {
        article.save((err) => {
            if (!err) {
                res.status(200);
                res.send("Successfully inserted the article.");
            } else {
                res.status(400);
                res.send("Error in inserting the article.");
            }
        });
    } else {
        res.status(400);
        res.json({ err: "Invalid API Key!" });
    }
});

app.delete("/articles", (req, res) => {
    const { q, api_key } = req.query;

    if (api_key === API_KEY) {
        Article.findOneAndDelete({ title: q }, (err) => {
            if (!err) {
                res.status(200);
                res.send("Successfully Deleted the article.");
            } else {
                res.status(404);
                res.json("{ err: Unable to delete the article }");
            }
        });
    } else {
        res.status(400);
        res.json({ err: "Invalid API Key!" });
    }
});

app.put("/articles", (req, res) => {
    const { id, title, content, tags, api_key } = req.body;

    if (api_key === API_KEY) {
        Article.findByIdAndUpdate(
            { _id: id },
            {
                title: req.body.title,
                content: content,
                tags: tags,
            },
            (err, results) => {
                if (!err) {
                    res.status(200);
                    res.json({ success: "Article updated successfully!" });
                }
            }
        );
    } else {
        res.status(400);
        res.json({ err: "Invalid API Key!" });
    }
});

app.patch("/articles", (req, res) => {
    const { id, title, content, tags, api_key } = req.body;

    if (api_key === API_KEY) {
        Article.findByIdAndUpdate(
            { _id: id },
            {
                title: req.body.title,
                content: content,
                tags: tags,
            },
            (err, results) => {
                if (!err) {
                    res.status(200);
                    res.json({ success: "Article updated successfully!" });
                }
            }
        );
    } else {
        res.status(400);
        res.json({ err: "Invalid API Key!" });
    }
});

app.get("/search", (req, res) => {
    const { q, tags } = req.query;
    const regex = new RegExp(["^", q, "$"].join(""), "i");
    let article = {};

    if (q && tags) {
        article = {
            title: regex,
            tags: { $in: tags },
        };
    } else if (q && tags == null) {
        article = {
            title: regex,
        };
    } else if (q == null && tags) {
        article = {
            tags: { $in: tags },
        };
    }

    Article.find(article, (err, results) => {
        if (!err) {
            res.status(200);
            res.send(results);
        } else {
            res.status(404);
            res.send("No article found");
        }
    });
});

app.get("/random", (req, res) => {
    Article.find({}, (err, results) => {
        if (!err) {
            const count = results.length;
            const randomIndex = Math.floor(Math.random() * count);
            res.send(results[randomIndex]);
        }
    });
});

app.get("*", function (req, res) {
    res.status(404).send("<h1>404 Not found</h1>");
});

let port = process.env.PORT;

if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => {
    console.log("Server running on port " + port + ".");
});
