import React from 'react'
import bannerImg from '../../assets/banner.png'
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between items-center gap-12 ">
      <div className='md:w-1/2 w-full'>
        <h1 className="md:text-5xl text-2xl font-medium mb-7">Bản phát hành mới trong tuần này</h1>
        <p className="mb-10 text-gray-700">
          Đã đến lúc cập nhật danh sách đọc của bạn với một số bản phát hành mới nhất và hay nhất trong
          thế giới văn học. Từ những cuốn sách thót tim đến những cuốn hồi ký quyến rũ, các bản phát hành mới của tuần này cung
          cấp điều gì đó cho tất cả mọi người

        </p>
        <button
          className="bg-yellow-500 text-black border-2 border-yellow-600 py-1 px-10 rounded cursor-pointer transition-colors duration-300 hover:bg-blue-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-1"
        >
          Subscribe
        </button>
      </div>

      <div className='md:w-1/2 w-full flex item-center md:justify-end'>
        <img src={bannerImg} alt="" />
      </div>


    </div>

  );
};

export default Banner;
