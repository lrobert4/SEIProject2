/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `TemplateModel` to something more sensible (e.g:
 * `Shop`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const Hair = require('../models/serviceTwo.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const hairRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

hairRouter.get('/new', (req, res) => {
    res.render('serviceTwo/newServiceForm');
});

hairRouter.get('/:hairId', (req, res) => {
    Hair.findById(req.params.hairId).then(hair => {
        res.render('serviceTwo/userProfile', { hair });
    });
});

hairRouter.get('/', (req, res) => {
    Hair.find().then(hairs => {
        res.render('serviceTwo/clientList', { hairs });
    });
});

hairRouter.get('/:hairId/edit', (req, res) => {
    Hair.findById(req.params.hairId).then(hair => {
        res.render('serviceTwo/editServiceForm', { hair });
    });
});

hairRouter.post('/', (req, res) => {
    Hair.create(req.body).then(() => {
        res.redirect('/hairs');
    });
});

hairRouter.put('/:hairId', (req, res) => {
    console.log("I'm Here!")
    Hair.findByIdAndUpdate(req.params.hairId, req. body).then(hair => {
        res.redirect('/hairs');
    });
});

hairRouter.delete('/:hairId', (req, res) => {
    Hair.findByIdAndDelete(req.params.hairId).then(() => {
        res.redirect('/hairs');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = hairRouter;
