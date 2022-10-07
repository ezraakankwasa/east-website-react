const axios = require('axios');
const express = require('express');
const singleRouter = express.Router();

singleRouter.get('/:id', async(req, res) => {
    let courseID = req.params.id
    try
    {
        const courseAPI = await axios.get(`http://localhost:1337/api/east-courses/${courseID}`);
        res.render('course-detail', { course : courseAPI.data.data.attributes});
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

module.exports = singleRouter;