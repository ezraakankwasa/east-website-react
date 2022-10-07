const axios = require('axios');
const express = require('express');
const coursesRouter = express.Router();
const params = new URLSearchParams('populate=%2A');
coursesRouter.get('', async(req, res) => {
    try
    {
        const coursesAPI = await axios.get(`http://localhost:1337/api/east-courses`, {params});
        res.render('academics', { courses : coursesAPI.data.data});
    }
    catch (error)
    {
        if(error.response)
        {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if(error.request)
        {
            console.log(error.resquest);
        }
        else
        {
            console.log('Error', error.message);
        }
    }
})

module.exports = coursesRouter;