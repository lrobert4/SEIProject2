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

hairRouter.get('/:issueId', (req, res) => {
    Hair.findById(req.params.issueId).then(issue => {
        res.render('issues/service', { issue });
    });
});

hairRouter.get('/', (req, res) => {
    Hair.find().then(issues => {
        res.render('issues/services', { issues });
    });
});

hairRouter.get('/:issueId/edit', (req, res) => {
    Hair.findById(req.params.issueId).then(issue => {
        res.render('serviceTwo/editServiceForm', { issue });
    });
});

hairRouter.post('/', (req, res) => {
    Hair.create(req.body).then(() => {
        res.redirect('/hair');
    });
});

hairRouter.put('/:issueId', (req, res) => {
    Hair.findByIdAndUpdate(req.params.issueId, req. body).then(issue => {
        res.redirect('/issues');
    });
});

hairRouter.delete('/:issueId', (req, res) => {
    Hair.findByIdAndDelete(req.params.issueId).then(() => {
        res.redirect('/issues');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = hairRouter;
