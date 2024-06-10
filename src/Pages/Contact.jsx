import React,{useState} from 'react';

// import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}


const Contact = () => {
    return (
        <div className="flex flex-col items-center p-4 space-y-4 animate-pulse">
          {/* Skeleton Image */}
          <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
          {/* Skeleton Text */}
          <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
          <div className="w-2/3 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
        </div>
      );

}

export default Contact;
