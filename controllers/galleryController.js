import GalleryImages from "../Models/gallery.js";

// create gallery item
export async function createGalleryItem(req,res) {
    try {
        const {images, destination_name} = req.body;

        const newGalleryItem = new GalleryImages({
            images, destination_name
        });

        const result = await newGalleryItem.save();

        res.status(201).json({
            message: "Successfully created gallery item.",
            created: result
        });
    } catch (err) {
        res.status(500).json({
            message: "Fail to create Gallery item.",
            error: err.message
        });
    }
}

// get all gallery items
export async function getAllGalleryItems(req,res) {
    try {
        const result = await GalleryImages.find();

        res.status(200).json({
            message: "Successfully get all gallery images.",
            images: result
        });
    }catch (err) {
        res.status(500).json({
            message: "Fail to get all images.",
            error: err.message
        });
    }
}

// update gallery items
export async function updateGalleryItem(req,res) {
    try {
        const id = req.params._id;
        const updateInfo = req.body;

        const result = await GalleryImages.updateOne({_id: id}, {$set: updateInfo});

        res.status(200).json({
            message: "Successfully updated gallery item.",
            updated: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to update gallery item.",
            error: err.message
        });
    }
}

// delete gallery item
export async function deleteGalleryItem(req,res) {
    try {
        const id = req.params._id;

        const result = await GalleryImages.deleteOne({_id: id});

        res.status(200).json({
            message: "Successfully deleted gallery item.",
        });

    } catch (err) {
        res.status(500).json({
            message: "Fail to delete gallery item.",
            error: err.message
        });
    }
}