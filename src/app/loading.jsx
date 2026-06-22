import React from 'react';
import { Skeleton } from "@heroui/react";

const LoadingPage = () => {
    return (
        <div className='flex items-center justify-center my-5 mx-auto h-[80vh]'>
            <div className="shadow-panel w-100 space-y-5 rounded-lg bg-transparent p-4">
                <Skeleton className="h-50 rounded-lg" />
                <div className="space-y-3">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                    <Skeleton className="h-3 w-2/5 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;