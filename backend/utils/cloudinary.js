import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:"dsylk7rh0",
    api_key:859216464481796,
    api_secret:"C5rDafsZcu5BfY3KREVerXCP6nw"
});
export default cloudinary;