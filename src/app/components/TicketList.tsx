import React from 'react'

type TicketInfo = {
    id: number;
    user: string;
    issue: string;
    description: string;
    status: string;
    created: string;
};

export default function TicketList({ticketList}: {ticketList: TicketInfo}) {
  // Function to determine status badge color
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'open':
        return 'bg-red-500 text-white';
      case 'in progress':
        return 'bg-yellow-500 text-white';
      case 'resolved':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Function to determine border color based on status
  const getBorderColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'open':
        return 'border-l-4 border-l-red-500';
      case 'in progress':
        return 'border-l-4 border-l-yellow-500';
      case 'resolved':
        return 'border-l-4 border-l-green-500';
      default:
        return 'border-l-4 border-l-gray-500 bg-gray-800 ';
    }
  };

  return (
    <div className={`
      border p-4 m-2 rounded-xl 
      shadow-lg w-[300px] 
       text-gray-700 dark:text-gray-300 hover:bg-gray-300 
      dark:hover:bg-gray-800 
       bg-gray-200 dark:bg-gray-700
      transition duration-300 
      ease-in-out
      ${getBorderColor(ticketList.status)}
    `}>   
      <h2><span className='font-bold  text-black dark:text-white'>Issue:</span> {ticketList.issue}</h2>
      <p><span className='font-bold  text-black dark:text-white'>Description:</span> {ticketList.description}</p>
      <p><span className='font-bold  text-black dark:text-white'>User:</span> {ticketList.user}</p>
      <p>
        <span className='font-bold  text-black dark:text-white'>Status: </span>
        <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(ticketList.status)}`}>
          {ticketList.status}
        </span>
      </p>
      <p><span className='font-bold  text-black dark:text-white'>Created:</span> {ticketList.created}</p>
    </div>
  )
}