'use client';

import React, { useEffect, useState } from 'react';
import StaffCard from '../components/StaffCard';
import staffData from '../data/staff-list.json';

type StaffInfo = {
  id: number;
  name: string;
  role: string;
  email: string;
  status: string;
  lastLogin: string;
  driveUsage: string;
  device: string;
};

export default function Page() {
  // This is the main page for the Staff Directory. It will display a list of staff members in card format.
  const [staffList, setStaffList] = useState<StaffInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const simulateFetch = (data: StaffInfo[], delay = 1000, shouldFail = false): Promise<StaffInfo[]> => { // Simulate a fetch request with a delay and optional failure
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {     // Simulate a failure
          reject(new Error('Simulated fetch failure'));
        } else {
          resolve(data);
        }
      }, delay);
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await simulateFetch(staffData, 1500, false); // Pass staffData directly using the simulateFetch function with a delay of 1500ms and no failure.
        setStaffList(data);
      } catch (err) {
        // console.error('Failed to fetch posts:', error); // Log the error
        setError(`Failed to fetch posts: ${err}`); // Set the error message
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

if (loading) {
    return <div>Loading...</div>; 
  
} 
if (error) {
    return <div>{error}</div>;  
  }

  return (
    <div>
      <h1 className="text-4xl m-4 text-center" >Welcome to your Staff Directory</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {staffList.map((staff, index) => (
        <StaffCard key={index} staffInfo={staff} />
      ))}
      </section>
    </div>
  );
}
