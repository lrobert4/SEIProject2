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
const serviceTwo = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    apptDate: {
        type: Date,
        default: Date.now,
    },
    notes: {
        type: String,
        default: 'open',
    },
    hairType: {
        type: String,
        required: true,
        enum: ['Straight', 'Mixed Chick', 'Afro-Textured'],
    },
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('serviceTwo', serviceTwo);
