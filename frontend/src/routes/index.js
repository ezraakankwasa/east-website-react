const axios = require('axios');
const express = require('express');
const indexRouter = express.Router();

indexRouter.get('', async(req, res) => {
    try
    {
        const coursesAPI = await axios.get(`http://localhost:1337/api/east-courses`);
        res.render('index', { courses : coursesAPI.data.data});
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

module.exports = indexRouter;