import React from 'react'

export const metadata = {
  title: 'Dashboard',
  description: 'Welcome to your Dashboard',
}

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl p-4" >IT Request Page</h1>
      <form className="bg-gray-200 dark:bg-gray-800 p-4 rounded shadow-md w-fit">
        <div className=''>
          <label htmlFor="requestType">Issue Type:</label>
          <select id="requestType" name="requestType" className="border rounded p-2 mx-3 bg-gray-300 dark:bg-gray-900" >
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
            <option value="network">Network</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" className="bg-gray-300 dark:bg-gray-900 rounded" rows={4} cols={50}></textarea>
        </div>
        <div>
          <label htmlFor="screenshot">Add Screenshot:</label>       
<input type="file" id="screenshot" name="screenshot" accept="image/*" className="border rounded p-1 m-3"/>
        </div>
        <button className="border rounded bg-green-700 hover:bg-green-500 hover:text-black  p-2 mt-3 flex mx-auto text-white" type="submit">Submit Request</button>
      </form>
    </div>
  )
}