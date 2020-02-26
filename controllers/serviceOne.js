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
const Makeup = require('../models/serviceOne.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const makeupRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

makeupRouter.get('/new', (req, res) => {
    res.render('serviceOne/newServiceForm');
});

// Client Profile
makeupRouter.get('/:makeupId', (req, res) => {
    Makeup.findById(req.params.makeupId).then(makeup => {
        res.render('serviceOne/userProfile', { makeup });
    });
});

//
makeupRouter.get('/', (req, res) => {
    Makeup.find().then(makeups => {
        res.render('serviceOne/clientList', { makeups });
    });
});

makeupRouter.get('/:makeupId/edit', (req, res) => {
    Makeup.findById(req.params.makeupId).then(makeup => {
        res.render('serviceOne/editServiceForm', { makeup });
    });
});

makeupRouter.post('/', (req, res) => {
    Makeup.create(req.body).then(() => {
        res.redirect('/makeups');
    });
});

makeupRouter.put('/:makeupId', (req, res) => {
    Makeup.findByIdAndUpdate(req.params.makeupId, req. body).then(makeup => {
        res.redirect('/makeups');
    });
});

makeupRouter.delete('/:makeupId', (req, res) => {
    Makeup.findByIdAndDelete(req.params.makeupId).then(() => {
        res.redirect('/makeups');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = makeupRouter;
