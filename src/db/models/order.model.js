const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    mealId: {
        type: ObjectId,
        required: true
    },
    orderTime: {
        type: Date,
        required: true
    },
    ReadyTime: {
        type: Date,
    },
    ReceiveTime: {
        type: Date,
    },
    cost: {
        type: Number,
        required: true
    }
});