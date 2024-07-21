import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

export default function Videos({ videos }) {
  
  return (
    <div className=' gap-12 dark:bg-black bg-white flex flex-wrap justify-center max-w-screen overflow-auto'>
      {videos?.map((item, idx) => (
        <div key={idx} className='dark:bg-black bg-white'>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}
