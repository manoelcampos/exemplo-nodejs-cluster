import http  from "node:http"
import cluster from "node:cluster"
import { cpus }  from "node:os"

const criarProcessosFilhos = () => {
    const filhos = cpus().length
    console.log(`\nProcesso inicial está em execução com pid ${process.pid}`)
    console.log(`Criando ${filhos} processos filhos\n\n`)
    for (let i = 0; i < filhos; i++) {
        cluster.fork()
    }    
}

const PORT = 8000

const iniciarProcessoFilho = () => {
    const server = http.createServer((_, res) => {
        res.writeHead(200)
        res.end("Home page do servidor node")
    })
    
    server.listen(PORT)
          .on("listening", () => console.log(`\nIniciado filho com pid ${process.pid} em http://localhost:${PORT}\n`))    
}

if(cluster.isPrimary)
    criarProcessosFilhos()
else iniciarProcessoFilho()