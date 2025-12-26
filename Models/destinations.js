import mongoose from "mongoose"

const destinationSchema = new mongoose.Schema({
    destination_name: {
        type: String,
        required: true,
        maxlength: [15, "Can't exceed 15 characters."] 
    },
    destination_label: {
        type: String,
        required: true,
        maxlength: [15, "Can't exceed 15 characters."] 
    },
    destination_image: {
        type: String,
        required: true
    },
    destination_description: {
        type: String,
        required: true,
        maxlength: [30, "Can't exceed 30 characters."] 
    },
}, {timestamps: true});

const Destiination = mongoose.model("Destination", destinationSchema);
export default Destiination;