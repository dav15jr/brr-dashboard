import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <div className="flex justify-between items-center bg-purple-900 text-white p-6 mb-8">
        <ul className="flex mx-auto text-white gap-6 text-lg ">
            <li><Link href="/" className="hover:text-orange-300">Home</Link></li>
            <li><Link href="/staff" className="hover:text-orange-300">Staff</Link></li>
            <li><Link href="/it-requests" className="hover:text-orange-300">IT Requests</Link></li>
            <li><Link href="/tickets" className="hover:text-orange-300">Tickets</Link></li>
            <li><Link href="/to-do-list" className="hover:text-orange-300">To-Do List</Link></li>
        </ul>
        </div>
    </nav>
  )
}
