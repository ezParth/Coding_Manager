import React from 'react'

const Display: React.FC = () => {
    return (
        <div className="p-10 pl-40 pr-40 mt-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className={`bg-[#ff6423] text-white h-96 w-110 rounded-[10px] shadow-lg`}></div>
            <div className={`bg-[#ff6423] text-white h-96 w-110 rounded-[10px] shadow-lg`}></div>
            <div className={`bg-[#ff6423] text-white h-96 w-110 rounded-[10px] shadow-lg`}></div>
          </div>
        </div>
      );
}

export default Display
