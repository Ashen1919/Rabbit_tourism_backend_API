import mongoose from "mongoose";
import DestinationDetails from "../Models/destinationDetails.js";
import Destination from "../Models/destinations.js";

// create destinations
export async function createDestination(req, res) {
    try {
        const {destination_description, destination_image, destination_label, destination_name} = req.body;
        
        const newDestination = new Destination({
            destination_image,
            destination_description,
            destination_label,
            destination_name
        });
        
        const result = await newDestination.save();
        
        res.status(201).json({
            message: "Destination created successfully.",
            destinations: result
        });
    } catch (err) {
        res.status(500).json({
            message: "Fail to create destination.",
            error: err.message
        });
    }
}

// get destinations
export async function getDestinations(req,res) {
    try{
        const result = await Destination.find();

        res.status(200).json({
            message: "All Destinations retrieve successfully.",
            destinations: result
        })
    } catch (err) {
        res.status(500).json({
            message: "Fail to retrieve destinations.",
            error: err.message
        });
    }
}

// update destinations
export async function updateDestination(req,res) {
    try{
        const destinationID = req.params._id;
        const updateInfo = req.body;

        const result = await Destination.updateOne({_id: destinationID}, {$set: updateInfo});

        res.status(200).json({
            message: "Destination updated successfully.",
            destination: result
        })
    } catch (err) {
        res.status(500).json({
            message: "Fail to update destinations.",
            error: err.message
        });
    }
}

// delete destination
export async function deleteDestination(req,res) {
    // start mongodb transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const destinationID = req.params._id;

        // delete destination details
        await DestinationDetails.deleteOne(
            {destination_id: destinationID},
            {session}  
        );

        // delete destination
        const result = await Destination.deleteOne(
            {_id: destinationID},
            {session}
        );

        if (result.deletedCount === 0) {
            await session.abortTransaction();
            return res.status(404).json({
                message: "Destination Not Found!"
            });
        }

        await session.commitTransaction();

        res.status(200).json({
            message: "Destination & destination details deleted successfully"
        })
    } catch (err) {
        await session.abortTransaction();
        res.status(500).json({
            message: "Fail to delete destinations.",
            error: err.message
        });
    } finally {
        session.endSession();
    }
}
