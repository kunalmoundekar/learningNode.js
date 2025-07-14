import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import urlRoute from './routes/urlRoute.js'


dotenv.config()



connectDB()

//import routes

const app = express();

app.use(express.json());


// use routes



app.use(urlRoute)



app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        })

    res.redirect(entry.redirectURL)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});


