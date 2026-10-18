import React from "react";

const NotFound = () => {
  return (
    //xắp xếp pt con theo cột  //căn giữa ngang dọc    //chiều cao khối = màn hình
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
      <img
        src="404_NotFound.png"
        alt="not found"
        className="max-w-full mb-6 w-96"
      />
      <p className="text-xl font-semibold">NOT FOUND 404 🚫</p>
      <a
        href="/" //hiển thị như 1 khối       //transition có hiệu ứng khi hover  //shadow-md đổ bóng nhẹ   //bo góc
        className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark"
      >
        Quay về trang chủ
      </a>
    </div>
  );
};

export default NotFound;
