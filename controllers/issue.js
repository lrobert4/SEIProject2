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
const Issue = require('../models/issue.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const issueRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

issueRouter.get('/new', (req, res) => {
    res.render('issues/newServiceForm');
});

issueRouter.get('/:issueId', (req, res) => {
    Issue.findById(req.params.issueId).then(issue => {
        res.render('issues/service', { issue });
    });
});

issueRouter.get('/', (req, res) => {
    Issue.find().then(issues => {
        res.render('issues/services', { issues });
    });
});

issueRouter.get('/:issueId/edit', (req, res) => {
    Issue.findById(req.params.issueId).then(issue => {
        res.render('issues/editServiceForm', { issue });
    });
});

issueRouter.post('/', (req, res) => {
    Issue.create(req.body).then(() => {
        res.redirect('/issues');
    });
});

issueRouter.put('/:issueId', (req, res) => {
    Issue.findByIdAndUpdate(req.params.issueId, req. body).then(issue => {
        res.redirect('/issues');
    });
});

issueRouter.delete('/:issueId', (req, res) => {
    Issue.findByIdAndDelete(req.params.issueId).then(() => {
        res.redirect('/issues');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = issueRouter;
