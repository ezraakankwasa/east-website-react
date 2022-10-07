const axios = require('axios');
const express = require('express');
const lecturersRouter = express.Router();
const params = new URLSearchParams('populate=%2A');

lecturersRouter.get('', async(req, res) => {
    try
    {
        const lecturersAPI = await axios.get(`http://localhost:1337/api/east-teams`, {params});
        console.log(lecturersAPI.data.data);
        res.render('our-teachers', { teachers : lecturersAPI.data.data});
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

module.exports = lecturersRouter;