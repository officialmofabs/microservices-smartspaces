require("http")
  .createServer((req, res) => res.end("Item service"))
  .listen(process.env.PORT || 80, err =>
    console.log(err || "Peristant change in item service while running within docker-compose")
  );
