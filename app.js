if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')


const app = express();

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false});
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/', router)

app.use(errorHandler)


app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});