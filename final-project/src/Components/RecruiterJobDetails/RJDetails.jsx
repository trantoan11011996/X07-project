import React, { useEffect, useState } from "react";
import axios from 'axios'
import Button from "./atoms/Button";
import InnerNavBar from "./atoms/InnerNavbar";
export default function RJDetails() {
  return (
    <div className="w-full mt-[90px] flex flex-row">
      <div className="w-2/3 flex flex-col m-3 shadow-md">
        <img
          className="w-full object-cover object-top pb-4 "
          src="https://dxwd4tssreb4w.cloudfront.net/web/images/default_banner_0.svg"
          alt="ảnh"
        />
        <div className="flex flex-row px-3 ">
          <div>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="ảnh" />
          </div>
          <div className="flex flex-col justify-between ml-4 space-y-3">
            <span className="font-bold text-gray-900 text-3xl ">Tiêu đề</span>
            <span className="font-semibold text-gray-800 text-xl">Công ty</span>
            <div className="font-medium text-gray-600 text-medium space-y-2">
              <div>
                <p className="mb-1">Địa điểm</p>
                <p>Lương</p>
              </div>
              <div className="flex flex-row space-x-60">
                <span>Ngày đăng tuyển</span>
                <span>Ngày hết hạn</span>
              </div>
              <div>
                <p className="mb-1">Trạng thái tin tuyển dụng</p>
                <p>Số lượng ứng viên đã tuyển dụng</p>
              </div>
            </div>
            <Button />
            <InnerNavBar />
          </div>
        </div>
      </div>
      <div className="w-1/3 shadow-md m-3 px-3">
        <h1 className="mt-8">abc</h1>
      </div>
    </div>
  );
}
