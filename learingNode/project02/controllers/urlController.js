// import express from 'express'
import URL from "../models/urlModel.js";
import shortid from 'shortid';


export const GenerateShortUrl = async (req, res) => {
    try {

        const body = req.body
        if (!body.url) {
            return res.status(400).send({
                success: false,
                message: "url is required"
            })
        }

        const Id = shortid.generate();

        const userUrl = await URL.create({
            shortId: Id,
            redirectURL: body.url,
            visitHistory: []
        })

        return res.status(200).send({
            success: true,
            shortid: " got a userID",
            userUrl
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Server error",
            error: error.message
        })

    }

}

