'use client';
import TicketList from '../components/TicketList';
import { useStore } from '../Store/store';


export default function Page() {
  const { tickets: ticketList } = useStore();

  return (
    <div>
      <h1 className="text-4xl text-center m-4 font-bold">Ticket List</h1>
      <section className="flex flex-wrap justify-center max-w-[1000px] mx-auto gap-4">
        {ticketList.map((ticket, index) => (
          <TicketList key={index} ticketList={ticket} />
        ))}
      </section>
    </div>
  );
}
