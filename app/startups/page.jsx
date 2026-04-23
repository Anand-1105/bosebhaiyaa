"use client";

import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import ContactSection from '../components/home/ContactSection';
import StartupsSection from '../components/home/StartupsSection';
import { ScheduleModal } from '../components/home/Modals';

export default function StartupsPage() {
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <main className="bg-[#060D25] text-white min-h-screen selection:bg-[#3D5BF1]/30">
      <Navbar onScheduleMeeting={() => setShowSchedule(true)} />
      
      {/* Spacer for fixed navbar and Hero spacing */}
      <div className="pt-20">
        <StartupsSection />
      </div>

      <ContactSection />
      {showSchedule && <ScheduleModal onClose={() => setShowSchedule(false)} />}
    </main>
  );
}
