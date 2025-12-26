import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
    image_urls: {
        type: String,
        required: true
    }
});

const gallerySchema = new mongoose.Schema({
    destination_name: {
        type: String,
        required: true
    },
    images: [imagesSchema]
}, {timestamps: true});

const GalleryImages = mongoose.model("Gallery", gallerySchema);
export default GalleryImages;