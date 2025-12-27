import mongoose from "mongoose";
import Tour from "../Models/tour.js";
import TourDetails from "../Models/tourDetails.js";

// create a tour
export async function createTour(req,res) {
    try {
        const {tour_image, tour_price, tour_description, max_passengers, total_days, tour_category, tour_name} = req.body;

        const newTour = new Tour({
            tour_image, tour_price, tour_description, max_passengers, total_days, tour_category, tour_name
        });

        const result = await newTour.save();

        res.status(201).json({
            message: "Tour created successful",
            tour: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to create tour."
        })
    }
}

// get all tours
export async function getAllTours(req,res) {
    try {
        const result = await Tour.find();

        res.status(200).json({
            message: "Successfully get all tours.",
            tours: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to retrieve tour."
        })
    }
}

// update a tour
export async function updateTour(req,res) {
    try {
        const id = req.params._id;
        const updateInfo = req.body;

        const result = await Tour.updateOne({_id: id}, {$set: updateInfo});

        res.status(200).json({
            message: "Tour update successful.",
            updated_Tour: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to update tour."
        })
    }
}

// delete a tour
export async function deleteTour(req,res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const id = req.params._id;

        // delete tour details
        await TourDetails.deleteOne(
            {tour_id: id},
            {session}
        );

        // delete tour
        const result = await Tour.deleteOne(
            {_id: id},
            {session}
        );

        if (result.deletedCount === 0) {
            await session.abortTransaction();
            return res.status(404).json({
                message: "Tour not found."
            });
        }

        await session.commitTransaction();

        res.status(200).json({
            message: "Tour & Tour details deleted successfully"
        });

    } catch (err) {
        await session.abortTransaction();
        res.status(500).json({
            message: "Fail to delete tour."
        })
    } finally {
        session.endSession();
    }
}