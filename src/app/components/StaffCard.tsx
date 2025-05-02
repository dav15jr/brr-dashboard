import React from 'react';

type StaffInfo = {
    id: number;
  name: string;
  role: string;
  email: string; 
  status: string;
  lastLogin: string;
  driveUsage: string;
  device: string;}



export default function StaffCard({ staffInfo }: { staffInfo: StaffInfo }) {
  return (
      <div className="border p-4 m-2 rounded-xl shadow-lg w-fit text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-zinc-300  bg-gray-200 dark:bg-gray-800 transition duration-300 ease-in-out">   
        <h2><span className='font-bold  text-black dark:text-white'>Name:</span> {staffInfo.name}</h2>
        <p><span className='font-bold text-black dark:text-white'>Role:</span> {staffInfo.role}</p>
        <p><span className='font-bold text-black dark:text-white'>Email:</span> {staffInfo.email}</p>
        <p><span className='font-bold text-black dark:text-white'>Status</span> {staffInfo.status}</p>
        <p><span className='font-bold text-black dark:text-white'>Last Login:</span> {staffInfo.lastLogin}</p>
        <p><span className='font-bold text-black dark:text-white'>Storage Used:</span> {staffInfo.driveUsage}</p>
        <p><span className='font-bold text-black dark:text-white'>Device:</span> {staffInfo.device}</p>
      </div>
  );
}
