'use client'
import TicketList from '../components/TicketList'
import tickets from '../data/tickets.json'
import { useEffect, useState } from 'react'

type TicketInfo = {
  id: number;
  user: string;
  issue: string;
  description: string;
  status: string;
  created: string;
};

export default function Page() {
const [ticketList, setTicketList] = useState<TicketInfo[]>([]);

useEffect(() => {
  // Simulate fetching data
  setTicketList(tickets);
}, [])


  return (
    <div>
      <h1 className="text-4xl text-center m-4 font-bold" >Ticket List</h1>
      <section className='flex flex-wrap justify-center'>
      { ticketList.map((ticket, index) => (
        <TicketList key={index} ticketList={ticket} />
      ))}
      </section> 

    </div>
  )
} 
