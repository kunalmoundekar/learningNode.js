import express from 'express'
import URL from "../models/urlModel.js";
import shortid from 'shortid';




export const GenerateShortUrl = async (req, res) => {


    const body = req.body
    if (!body.url) {
        return res.status(400).send({
            success: false,
            message: "url is required"
        })
    }

    const shortId = shortid.generate();
    URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: []
    })

    return res.status(200).send({
        success: true,
        shortid:shortid  
    })

}