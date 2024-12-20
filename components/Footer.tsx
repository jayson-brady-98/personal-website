'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#C94128] text-white text-center py-4 w-full">
      <div className="text-[#F7DAAC] text-base flex items-center justify-center">
        <span className="mr-2">
          <span className="text-[#F7DAAC]">Design inspired by </span>
          <a href="https://x.com/anuatluru/status/1864082026699059473" target="_blank" rel="noopener noreferrer">
            <span className="font-['Press_Start_2P'] text-[#EEA03B] text-xs hover:underline">retro futurism</span>
          </a>
        </span>
        <span className="mx-2 text-[#F7DAAC]">•</span>
        <a href="https://au.pinterest.com/jaysonbrady123/future-retro/?request_params=%7B%221%22:%20130,%20%227%22:%205564639607701157049,%20%228%22:%201024709790155310852,%20%2230%22:%20%22future%20retro%22,%20%2232%22:%2045,%20%2233%22:%20%5B1024709721488240033,%201024709721488238602,%201024709721488212638,%201024709721488212632,%201024709721488212627,%201024709721488212622,%201024709721488212609,%201024709721488212606,%201024709721488212493,%201024709721488212490,%201024709721488212413,%201024709721488212409,%201024709721488212402,%201024709721488211414,%201024709721488211413,%201024709721488211411,%201024709721488211334,%201024709721488211321,%201024709721488211315,%201024709721488211280%5D,%20%2236%22:%20%5B1024709790155310852%5D,%20%2237%22:%20%22future%20retro%22,%20%2234%22:%200,%20%22102%22:%204%7D&full_feed_title=future%20retro&view_parameter_type=3069&pins_display=3" target="_blank" rel="noopener noreferrer" className="inline-flex">
          <div className="w-6 h-6 rounded-full bg-[#E60023] flex items-center justify-center">
            <svg
              className="w-4 h-4 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
            </svg>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer; 