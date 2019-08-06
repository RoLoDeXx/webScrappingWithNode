const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

let url =
  "http://myneta.info/LokSabha2019/index.php?action=summary&subAction=winner_analyzed&sort=candidate#summary";
request(url, (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
    const table = $("table").last();
    fs.writeFile("data.html", table.html(), err => {
      if (err) return new Error("File ni chali");
    });
  }
});
