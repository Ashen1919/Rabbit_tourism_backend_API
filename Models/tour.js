import mongoose from "mongoose"

const tourSchema = new mongoose.Schema({
    tour_name: {
        type: String,
        required: true,
        maxlength: [30, "Can't exceed 30 characters."] 
    },
    tour_category: {
        type: String,
        required: true,
        maxlength: [20, "Can't exceed 20 characters."] 
    },
    total_days: {
        type: Number,
        required: true,
        min: 1,
        max: 50
    },
    max_passengers: {
        type: Number,
        required: true,
        min: 1,
        max: 50
    },
    tour_description: {
        type: String,
        required: true,
        maxlength: [100, "Can't exceed 100 characters."] 
    },
    tour_price: {
        type: Number,
        required: true,
        min: 1
    },
    tour_image: {
        type: String,
        required: true
    }

}, {timestamps: true});

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;