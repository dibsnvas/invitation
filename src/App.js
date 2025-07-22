import React from "react";
import { motion } from "framer-motion";

export default function VIPInvite({
  name = "Dear Guest",
  eventName = "Don't get Coldplayed – come to our party",
  date = "July 24, 2025",
  venue = "Secret Location (Coldplay concert)",
  dressCode = "Red Carpet, Zero Apologies",
  qrCodeUrl,
  clip = "/video.mp4"
}) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black text-white font-sans relative overflow-y-auto">
      {/* полупрозрачный градиент‑фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-gray-100/40 to-white/70 z-10" />

      {/* контент */}
      <motion.div
        className="z-30 p-6 text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* внутренний контейнер */}
        <div className="relative bg-white/85 backdrop-blur-sm text-black rounded-xl p-8 shadow-xl">
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-500"
          >
            {name}, Your Next Scandal Starts Here
          </h1>

          <p className="text-lg mb-4">{eventName}</p>

          {/* квадратный клип */}
          <div className="mx-auto mb-6 w-48 h-80 overflow-hidden rounded-lg shadow-lg">
            {clip.endsWith(".gif") ? (
              <img src={clip} alt="promo" className="w-full h-full object-cover" />
            ) : (
              <video
                src={clip}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="space-y-2 text-gray-800 mb-6">
            <p>📅 {date}</p>
            <p>📍 {venue}</p>
            <p>👗 {dressCode}</p>
          </div>

          <div className="text-gray-500 text-sm">
            © The company is not responsible for any sudden staffing changes.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
