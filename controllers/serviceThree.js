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
const Nails = require('../models/serviceThree.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const nailsRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

nailsRouter.get('/new', (req, res) => {
    res.render('serviceTwo/newServiceForm');
});

nailsRouter.get('/:issueId', (req, res) => {
  Nails.findById(req.params.issueId).then(issue => {
        res.render('issues/service', { issue });
    });
});

nailsRouter.get('/', (req, res) => {
  Nails.find().then(issues => {
        res.render('issues/services', { issues });
    });
});

nailsRouter.get('/:issueId/edit', (req, res) => {
  Nails.findById(req.params.issueId).then(issue => {
        res.render('serviceTwo/editServiceForm', { issue });
    });
});

nailsRouter.post('/', (req, res) => {
  Nails.create(req.body).then(() => {
        res.redirect('/issues');
    });
});

nailsRouter.put('/:issueId', (req, res) => {
  Nails.findByIdAndUpdate(req.params.issueId, req. body).then(issue => {
        res.redirect('/issues');
    });
});

nailsRouter.delete('/:issueId', (req, res) => {
  Nails.findByIdAndDelete(req.params.issueId).then(() => {
        res.redirect('/issues');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = nailsRouter;
