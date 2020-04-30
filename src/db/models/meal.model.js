const mongoose = require('mongoose');
const { Schema } = mongoose;
const PointLocationSchema = require('../schema/location/point.location.chema');

const mealSchema = new Schema({
    owners: [{
        type: [ObjectId],
        required: true
    }],
    meals: {
        type: [
          [{
              date: Date,
              order: ObjectId
          }
          ]
        ]
    },
    location: PointLocationSchema,
    cost: {
        type: Number,
        required: true
    },
    totalProfit: {
        type: Number,
        required: true
    }
});