'use client';
import React from 'react';
import ToDo from '../components/ToDo';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to your To-Do List
      </h1>
      <ToDo />
    </div>
  );
}