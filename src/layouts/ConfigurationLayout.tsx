import React from 'react';
import Sidebar from '@/shared/components/Sidebar';
import PageLocation from '@/shared/components/pagelocation';
import CardConfiguration from '@/shared/components/CardConfiguration';
import CardProfile from '@/shared/components/CardProfile';

export default function ConfigurationLayout() {
  return (
    <div className="relative flex w-screen h-screen bg-light-100">
      <Sidebar />
      <div className="flex-grow flex flex-col p-8">
        <div className="w-full flex flex-col gap-4 mt-10">
          <PageLocation />
          <div className="grid grid-cols-3 grid-rows-1 gap-4 mt-5">
            <CardConfiguration />
            <div className="col-span-2">
              <CardProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}