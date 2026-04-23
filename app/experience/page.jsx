"use client";

import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import ContactSection from '../components/home/ContactSection';
import ExperienceSection from '../components/home/ExperienceSection';
import { ScheduleModal, ExperienceModal } from '../components/home/Modals';

export default function ExperiencePage() {
  const [showSchedule, setShowSchedule] = useState(false);
  const [activeExp, setActiveExp] = useState(null);

  return (
    <main className="bg-[#060D25] text-white min-h-screen selection:bg-[#3D5BF1]/30">
      <Navbar onScheduleMeeting={() => setShowSchedule(true)} />
      
      {/* Clear fixed navbar */}
      <div className="pt-20">
        <ExperienceSection onExpClick={setActiveExp} />
      </div>

      <ContactSection />
      
      {showSchedule && <ScheduleModal onClose={() => setShowSchedule(false)} />}
      {activeExp && <ExperienceModal exp={activeExp} onClose={() => setActiveExp(null)} />}
    </main>
  );
}
