var unirest = require("unirest");

var req = unirest("GET", "https://hotels4.p.rapidapi.com/locations/search");

req.query({
  locale: "en_US",
  query: "new york"
});

req.headers({
  "x-rapidapi-host": "hotels4.p.rapidapi.com",
  "x-rapidapi-key": "a73b75f34dmsha28cc2ab4d28bffp17ea54jsn1d9d7b1ca033"
});

const fs = require("fs");

req.end(function(res) {
  if (res.error) throw new Error(res.error);
  fs.writeFile("out.json", JSON.stringify(res.body), () => {
    console.log("ok");
  });
});
