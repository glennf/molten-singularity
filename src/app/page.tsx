'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: string; duration: string; delay: string; size: string }>>([]);

  useEffect(() => {
    const flakeCount = 50;
    const newFlakes = Array.from({ length: flakeCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: `${Math.random() * 5 + 10}s`, // Slower fall 10-15s
      delay: `${Math.random() * 5}s`, // Staggered start
      size: `${Math.random() * 1.5 + 0.5}rem`,
    }));
    setSnowflakes(newFlakes);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0B1026] to-slate-900 text-white overflow-hidden relative selection:bg-cyan-500 selection:text-slate-900">
      {/* Snowflakes Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake absolute text-cyan-200/40"
            style={{
              left: flake.left,
              animationDuration: flake.duration,
              animationDelay: flake.delay,
              fontSize: flake.size,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Arctic.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-cyan-400 transition-colors">Destinations</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Cabins</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Activities</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
        </div>
        <button className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 font-medium text-sm backdrop-blur-sm">
          Book Now
        </button>
      </nav>

      {/* Main Hero */}
      <main className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-20 pb-32 min-h-[85vh]">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
          <div className="inline-block animate-pulse">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              Winter Season 2025
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-blue-400 drop-shadow-2xl">
            Embrace the <br />
            <span className="text-cyan-300">Chill</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Discover the serene beauty of the frozen north. From aurora hunting to cozy cabin retreats, experience winter like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1">
              Start Your Journey
            </button>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-md transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>
      </main>

      {/* Glassmorphism Cards Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Aurora Borealis', desc: 'Witness the dancing lights of the north.', gradient: 'from-green-400/20 to-teal-500/20' },
            { title: 'Ice Hotels', desc: 'Sleep in a sculpture made of pure ice.', gradient: 'from-sky-400/20 to-blue-500/20' },
            { title: 'Dog Sledding', desc: 'Race through the snowy forests.', gradient: 'from-indigo-400/20 to-purple-500/20' }
          ].map((card, idx) => (
            <div key={idx} className="group relative p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:border-white/20">
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                  <span className="text-2xl">❆</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-200 transition-colors">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <p>&copy; 2025 Arctic Experience. All rights reserved.</p>
      </footer>
    </div>
  );
}
