import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Liên kết mongodb thành công!!");
  } catch (error) {
    console.error("Lỗi khi kết nối mongodb: ", error);
    process.exit(1); // thoát ra nếu gặp lỗi
  }
};
