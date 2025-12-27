import DestinationDetails from "../Models/destinationDetails.js";

// create destination details
export async function createDestinationDetails(req,res) {
    try {
        const {tips, climate_description, time_to_visit, locations, description, sub_description, destination_name, destination_id} = req.body;

        const newDestDetails = new DestinationDetails({
            tips, climate_description, time_to_visit, locations, description, sub_description, destination_name, destination_id
        });

        const result = await newDestDetails.save();

        res.status(201).json({
            message: "Destination details created successful",
            destinationDetails: result
        })
    
    } catch (err) {
        res.status(500).json({
            message: "Fail to create destination details.",
            error: err.message
        });
    }
}

// get all destination details
export async function getAllDestinationDetails(req,res) {
    try {
        const result = await DestinationDetails.find();

        res.status(200).json({
            message: "Successfully retrieve the destination details.",
            destinationDetails: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to retrieve destination details.",
            error: err.message
        });
    }
}

// get destination details by ID
export async function getDestinationDetailsById(req,res) {
    try {
        const id = req.params.destination_id;

        const result = await DestinationDetails.findById({destination_id: id});

        res.status(200).json({
            message: "Destination Detail Found.",
            destinationDetail: result
        });

    }catch (err) {
        res.status(500).json({
            message: "Fail to retrieve destination details.",
            error: err.message
        });
    }
}

// update destination details
export async function updateDestinationDetails(req,res) {
    try {

        const id = req.params._id;
        const updateInfo = req.body;

        const result = await DestinationDetails.updateOne({_id: id}, {$set: updateInfo});

        res.status(200).json({
            message: "Destination Details updated successful.",
            updateResult: result
        });

    }catch (err) {
        res.status(500).json({
            message: "Fail to update destination details.",
            error: err.message
        });
    }
}