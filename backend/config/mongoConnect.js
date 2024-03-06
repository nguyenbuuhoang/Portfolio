import mongoose from "mongoose";
import { MONGO_URL } from "../url/mongodb.js";

// Kết nối với cơ sở dữ liệu MongoDB
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Kiểm tra kết nối
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Lỗi kết nối MongoDB:'));
db.once('open', function() {
    console.log('Đã kết nối với MongoDB!');
});
