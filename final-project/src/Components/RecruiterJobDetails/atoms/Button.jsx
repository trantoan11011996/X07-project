import React from 'react';

export default function Button(){
    return(
        <div className="flex flex-row space-x-10">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 py-2 px-4 rounded">
          Cập Nhật
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 py-2 px-4 rounded">
          Gỡ Bỏ
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 py-2 px-4 rounded">
          Danh sách ứng viên
        </button>
      </div>
    )
}