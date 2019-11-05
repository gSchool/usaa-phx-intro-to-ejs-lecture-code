const app = require('./config/server')
const port = process.env.PORT

app.listen(port, () => console.log('listening on port: ' + port))
