import mongooose, { Types } from "mongoose"

const urlScrema = new mongooose.Schema({

    shortId: {
        type: String,
        required: true,
        unique: true
    },

    redirectURL: {
        type: String,
        required: true,
    },

    visitHistory: [{ timestamp: { type: Number } }]

},{ timestamps: true })


const URL = mongooose.model('url', urlScrema)

export default URL;