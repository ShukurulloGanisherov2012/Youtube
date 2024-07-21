import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { demoChannelUrl, demoChannelTitle, demoProfilePicture } from "../utils/constant";

export default function ChannelCard({ channelDetail }) {
  const { id: { channelId } = {}, snippet } = channelDetail;

  return (
    <div className='flex items-center justify-center xs:w-full sm:w-[328px] md:w-[310px] shadow-none rounded-none bg-transparent h-[300px]'>
      <Link to={`/main/channel/${channelDetail?.id?.channelId}`}>
        <div>
          <img className='rounded-full w-[180px] h-[180px] mb-2 border-[1px] border-[#3e3e3e]' src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt="channelcard" /> 
          <h1 className='text-center mt-3 dark:text-white text-black'>
            {channelDetail?.snippet?.title}
          </h1>
        </div>
      </Link>
    </div>
  );
}
