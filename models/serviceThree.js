/* 
 * Place all DB schemas here for a single model.
 */

/* Step 1
 *
 * Import mongoose connection
 *
 */
const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const Issue = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: 'open',
    },
    priority: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low'],
    },
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Issue', Issue);