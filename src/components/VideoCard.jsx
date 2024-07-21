import { Card } from '@material-tailwind/react';
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { demoThumbnailUrl, demoVideoTitle, demoChannelTitle } from "../utils/constant";

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
    return (
        <Card className='w-full sm:w-[358px] md:w-[320px] shadow-none rounded bg-transparent'>
            <Link to={`/main/videodetail/${videoId}`}>
                <div>
                    <img className='w-full rounded sm:w-[358px] h-[180px] object-cover shadow-sm shadow-gray-50' src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" />
                </div>

                <div>
                    <h1 className='dark:text-white text-black lg:text-xl md:text-lg text-md line-clamp-2 mt-1'>{snippet?.title || demoVideoTitle}</h1>
                    <h1 className='dark:text-gray-700 text-gray-600 lg:text-xl text-md mt-2 flex items-center gap-2'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <FaCheckCircle className='text-green-600' />
                    </h1>
                </div>
            </Link>
        </Card>
    );
}
