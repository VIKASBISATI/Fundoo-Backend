const noteRouter = require('./Router/noteRouter');
const userRouter = require('./Router/userRouter');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger=require('./utils/logger')
const expressValidation = require('express-validator');
app.use(expressValidation());
const dataConfig = require('./Configuration/db.config')
//create an express object
const mongoose = require('mongoose');

//Parses the text as Json and URL encoded data 
require('http').createServer(app);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use('/note', noteRouter);
app.use('/', userRouter)

//mongoDb connection 
mongoose.connect(dataConfig.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to the database");
}).catch(() => {
    console.log("err connecting to the database");
})
app.get('/', (req, res) => {
    res.json("Message: Welcome to fundoo Notes");
});
app.listen(4002, () => {
    logger.info('server is running on 4002');
});
module.exports = app;
