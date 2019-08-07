const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

let url =
  "http://myneta.info/LokSabha2019/index.php?action=summary&subAction=winner_analyzed&sort=candidate#summary";
request(url, (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
    const rows = $("a").each((i, el) => {
      let anchor = $(el).attr("href") + "," + $(el).text() + "\n";
      fs.appendFile("data.txt", anchor, err => {
        if (err) return new Error("file fucked up");
      });
    });
  }
});

// fs.readFile("data.json", (err, res) => {
//   if (err) return new Error("File fucked up");
//   jsonData = JSON.parse(res);

// });
