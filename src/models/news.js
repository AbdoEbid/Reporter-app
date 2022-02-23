const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        trim : true
    },
    description:{
        type : String,
        required : true,
        trim : true
    },
    Owner:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Author"
    },
    image: {
        type: Buffer
    }
})
const News = mongoose.model('News',newsSchema)
module.exports = News