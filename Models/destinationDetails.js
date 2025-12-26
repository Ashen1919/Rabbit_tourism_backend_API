import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    location_name: {
        type: String,
        required: true
    },
    location_image: {
        type: String,
        required: true
    },
    location_description: {
        type: String,
        required: true
    },
});

const tipsDetailsSchema = new mongoose.Schema({
    tips_details: {
        type: String,
        required: true
    }
});

const destinationDetailsSchema = new mongoose.Schema({
    destination_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
        required: true
    },
    destination_name: {
        type: String,
        required: true,
        maxlength: [15, "Can't exceed 15 characters."] 
    },
    sub_description: {
        type: String,
        required: true,
        maxlength: [25, "Can't exceed 25 characters."] 
    },
    description: {
        type: String,
        required: true,
        maxlength: [40, "Can't exceed 40 characters."] 
    },
    locations: [locationSchema],
    time_to_visit: {
        type: String,
        required: true,
        maxlength: [30, "Can't exceed 30 characters."] 
    },
    climate_description: {
        type: String,
        required: true,
        maxlength: [30, "Can't exceed 30 characters."] 
    },
    tips: [tipsDetailsSchema]
}, {timestamps: true});

const DestinationDetails = mongoose.model("DestinationDetails", destinationDetailsSchema);
export default DestinationDetails;