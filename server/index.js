const http = require("http")
const fs = require("fs")
const url = require("url")



function myHandler(req, res) {
    if (req.url === "/favicon.ico") return res.end()
 
    const log = `${Date.now()}:${req.method}  ${req.url}: New req Received\n`

    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
 
    fs.appendFile('log.txt', log, (err, data) => {

        switch (myUrl.pathname) {
            case '/':
                if (req.method === "GET") res.end("Home page");
                break
            case '/about':
                const username = myUrl.query.myname
                res.end(`Hii, ${username} `)
                break;
            case '/search':
                const search = myUrl.query.search_query
                res.end("Here are your results for " + search)
                break;
 
            case "/singup":
                if (req.method === 'GET') res.end("This Is a Singup Form")
                else if (req.method === "POST") {
                    // DB query
                    res.end("Success")
                }


                

            default:
                res.end("404 Not Found")
        }
    })
}


const myServer = http.createServer(myHandler)





myServer.listen(8000, () => {
    console.log("server started !")
})




