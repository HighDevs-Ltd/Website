// server/index.js

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Serve static assets from the public directory
  server.use(express.static("public"));

  // Serve HTML pages from the pages directory
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Serve components from the components directory
  server.use("/components", express.static("components"));

  // Start the server
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
