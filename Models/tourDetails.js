import mongoose from "mongoose";

const highlightsSchema = new mongoose.Schema({
    points: {
        type: String,
        required: true,
        maxlength: [70, "Can't exceed 70 characters."]
    }
});

const tourPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: true,
        max: 15
    },
    description: {
        type: String,
        required: true,
        maxlength: [30, "Can't exceed 30 characters"]
    },
    accommodation: {
        type: String,
        required: true,
        maxlength: [20, "Can't exceed 20 characters"]
    },
    mealtime: {
        type: String,
        required: true,
        maxlength: [10, "Can't exceed 10 characters"]
    }
});

const includesSchema = new mongoose.Schema({
    include_points: {
        type: String,
        required: true,
        maxlength: [100, "Can't exceed 100 characters."]
    }
});

const notIncludesSchema = new mongoose.Schema({
    not_include_points: {
        type: String,
        required: true,
        maxlength: [100, "Can't exceed 100 characters."]
    }
});

const tourDetailsSchema = new mongoose.Schema({
    tour_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour",
        required: true
    },
    tour_name: {
        type: String,
        required: true,
        maxlength: [30, "Can't exceed 30 characters."] 
    },
    tour_location: {
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
    tour_image: {
        type: String,
        required: true
    },
    tour_sub_description: {
        type: String,
        required: true,
        maxlength: [40, "Can't exceed 40 characters."]
    },
    tour_overview: {
        type: String,
        required: true,
        maxlength: [150, "Can't exceed 150 characters."]
    },
    highlights: [highlightsSchema],
    tour_plan: [tourPlanSchema],
    what_include: [includesSchema],
    what_not_include: [notIncludesSchema],
    starting_price: {
        type: Number,
        required: true,
        min: 1
    },
    single_price: {
        type: Number,
        required: true,
        min: 1
    },
    group_price: {
        type: Number,
        required: true,
        min: 1
    },
}, {timestamps: true});

const TourDetails = mongoose.model("TourDetails", tourDetailsSchema);
export default TourDetails;