import { app } from "./app.js"; // ✅ Import `app` instead of redefining it
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => { // ✅ `app` is now correctly defined
            console.log(`Server is running at port : ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed !!", error);
    });
