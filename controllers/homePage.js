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
const Makeup = require('../models/issue.js')

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

 /*
makeupRouter.get('/new', (req, res) => {
    res.render('issues/newServiceForm');
});

makeupRouter.get('/:issueId', (req, res) => {
    Makeup.findById(req.params.issueId).then(issue => {
        res.render('issues/service', { issue });
    });
}); */

makeupRouter.get('/', (req, res) => {
    Makeup.find().then(issues => {
        res.render('homepage/index', { issues });
    });
});

/*
makeupRouter.get('/:issueId/edit', (req, res) => {
    Makeup.findById(req.params.issueId).then(issue => {
        res.render('issues/editServiceForm', { issue });
    });
});

makeupRouter.post('/', (req, res) => {
    Makeup.create(req.body).then(() => {
        res.redirect('/issues');
    });
});

makeupRouter.put('/:issueId', (req, res) => {
    Makeup.findByIdAndUpdate(req.params.issueId, req. body).then(issue => {
        res.redirect('/issues');
    });
});

makeupRouter.delete('/:issueId', (req, res) => {
    Makeup.findByIdAndDelete(req.params.issueId).then(() => {
        res.redirect('/issues');
    });
});
*/

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = makeupRouter;