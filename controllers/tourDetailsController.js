import TourDetails from "../Models/tourDetails.js";

// create tour details
export async function createTourDetails(req,res) {
    try {
        const {group_price, single_price, starting_price, what_not_include, what_include, tour_plan, highlights, tour_overview, tour_sub_description, tour_image, total_days, tour_location, tour_name, tour_id, destination_name} = req.body;

        const newTourDetails = new TourDetails({
            group_price, single_price, starting_price, what_not_include, what_include, tour_plan, highlights, tour_overview, tour_sub_description, tour_image, total_days, tour_location, tour_name, tour_id, destination_name
        });

        const result = await newTourDetails.save();

        res.status(201).json({
            message: "Tour Details created successful.",
            created: result
        });
    } catch (err) {
        res.status(500).json({
            message: "Fail to create Tour details.",
            error: err.message
        });
    }
}

// get all tour details
export async function getAllTourDetails(req,res) {
    try {
        const result = await TourDetails.find();

        res.status(200).json({
            message: "Successfully retrieve all tour details.",
            tourDetails: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to retrieve Tour details.",
            error: err.message
        });
    }
}

// get tour details by ID
export async function getTourDetailsById(req,res) {
    try {
        const id = req.params.tour_id;

        const result = await TourDetails.findById({tour_id: id});

        res.status(200).json({
            message: "Successfully retrieve tour detail.",
            tourDetail: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to retrieve Tour detail.",
            error: err.message
        });
    }
}

// update tour details
export async function updateTourDetails(req, res) {
    try {
        const id = req.params._id;
        const updateInfo = req.body;

        const result = await TourDetails.updateOne({_id: id}, {$set: updateInfo});

        res.status(200).json({
            message: "Successfully update tour details.",
            updated: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to update Tour details.",
            error: err.message
        });
    }
}