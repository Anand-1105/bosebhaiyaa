"use client";

import React, { useState } from 'react';

// ── Components ──────────────────────────────────────────────────────────────
import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';

import OtherEventsSection from './components/home/OtherEventsSection';
import AboutSection from './components/home/AboutSection';


import SkillsSection from './components/home/SkillsSection';
import KeyProjectSection from './components/home/KeyProjectSection';
import AchievementsSection from './components/home/AchievementsSection';
import MeetsSection from './components/home/MeetsSection';
import PodcastsSection from './components/home/PodcastsSection';
import ContactSection from './components/home/ContactSection';
import Chatbot from './components/home/Chatbot';
import LinkedInFeedSection from './components/home/LinkedInFeedSection';
import UgcSaarthi from './components/common/UgcSaarthi';
import {
  GuestModal,
  ExperienceModal,
  ScheduleModal,
  VideoModal,
} from './components/home/Modals';

// ──────────────────────────────────────────────────────────────────────────────
// ROOT PAGE — orchestrator only. All content lives in app/lib/data.js
// To edit ANY text, image, stat or link on this page → open lib/data.js
// ──────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  // Modal states
  const [activeGuest, setActiveGuest] = useState(null);

  const [showSchedule, setShowSchedule] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#060D25' }}>

      {/* ── NAVIGATION ──────────────────────────────── */}
      <Navbar onScheduleMeeting={() => setShowSchedule(true)} />

      {/* ── HERO ────────────────────────────────────── */}
      <HeroSection onScheduleMeeting={() => setShowSchedule(true)} />



      {/* ── OTHER FLAGSHIP EVENTS ───────────────────── */}
      <OtherEventsSection />

      {/* ── NOTABLE MEETS ───────────────────────────── */}
      <MeetsSection />
       {/* ── IMAGE COMMENTS (LinkedIn) ───────────────── */}
      {/* <section className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 overflow-hidden relative" style={{ background: '#060D25' }}>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <ImageComments />
        </div>
      </section> */}


      {/* ── LINKEDIN FEED ────────────────────────────── */}
      <LinkedInFeedSection />

      {/* ── UGC SAARTHI LETTER ────────────────────────── */}
      <UgcSaarthi />








      {/* ── SKILLS & TECH STACK ─────────────────────── */}
      <SkillsSection />


      {/* ── KEY PROJECT ─────────────────────────────── */}
      {/* <KeyProjectSection /> */}

      {/* ── ACHIEVEMENTS & CERTS ────────────────────── */}


     

      



      {/* ── ABOUT ───────────────────────────────────── */}
      <AboutSection />
   

      {/* ── CONTACT / FOOTER ────────────────────────── */}
      <ContactSection />

      {/* ── CHATBOT WIDGET ──────────────────────────── */}
      {/* <Chatbot /> */}

      {/* ── MODALS ──────────────────────────────────── */}
      {activeGuest && <GuestModal guest={activeGuest} onClose={() => setActiveGuest(null)} />}

      {showSchedule && <ScheduleModal onClose={() => setShowSchedule(false)} />}
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}

    </div>
  );
}
