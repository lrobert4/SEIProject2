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
    res.render('serviceThree/newServiceForm');
});

nailsRouter.get('/:nailId', (req, res) => {
  Nails.findById(req.params.nailId).then(nail => {
        res.render('serviceThree/userProfile', { nail });
    });
});

nailsRouter.get('/', (req, res) => {
  Nails.find().then(nails => {
        res.render('/index', { nails });
    });
});

nailsRouter.get('/:nailId/edit', (req, res) => {
  Nails.findById(req.params.nailId).then(nail => {
        res.render('serviceThree/editServiceForm', { nail });
    });
});

nailsRouter.post('/', (req, res) => {
  Nails.create(req.body).then(() => {
        res.redirect('/index');
    });
});

nailsRouter.put('/:nailId', (req, res) => {
  Nails.findByIdAndUpdate(req.params.nailId, req. body).then(nail => {
        res.redirect('/index');
    });
});

nailsRouter.delete('/:nailId', (req, res) => {
  Nails.findByIdAndDelete(req.params.nailId).then(() => {
        res.redirect('/index');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = nailsRouter;
