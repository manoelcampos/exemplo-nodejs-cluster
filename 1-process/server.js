import http  from "node:http"

const PORT = 8000

const server = http.createServer((_, res) => {
    res.writeHead(200)
    res.end("Home page do servidor node")
})

server.listen(PORT)
      .on("listening", () => console.log(`\nIniciado servidor em http://localhost:${PORT}\n`))    

