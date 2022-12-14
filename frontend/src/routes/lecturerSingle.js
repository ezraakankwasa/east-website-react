const axios = require('axios');
const express = require('express');
const singleLecRouter = express.Router();
const params = new URLSearchParams('populate=%2A');

singleLecRouter.get('/:id', async(req, res) => {
    let teacherID = req.params.id
    try
    {
        const singleLecAPI = await axios.get(`http://localhost:1337/api/east-teams/${teacherID}`, {params});
        console.log(singleLecAPI.data.data.attributes);
        res.render('teachers-single', { lecturer : singleLecAPI.data.data.attributes});
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

module.exports = singleLecRouter;