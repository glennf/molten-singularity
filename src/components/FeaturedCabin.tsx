import Image from 'next/image';

export default function FeaturedCabin() {
    return (
        <section className="relative py-24 px-4 max-w-7xl mx-auto">
            <div className="absolute inset-0 bg-blue-900/10 blur-3xl -z-10 rounded-full w-3/4 mx-auto" />

            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Content Side */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold tracking-wide uppercase">
                            Cabin of the Month
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            The Crystal <span className="text-cyan-400">Sanctuary</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Nestled deep in the boreal forest, this glass-roofed architectural marvel offers unobstructed views of the aurora borealis from the comfort of your heated bed. Experience the silence of the snow.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="text-2xl mb-2">🌡️</div>
                            <div className="font-semibold text-white">Always 21°C</div>
                            <div className="text-sm text-slate-500">Heated interior</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="text-2xl mb-2">🔭</div>
                            <div className="font-semibold text-white">Glass Roof</div>
                            <div className="text-sm text-slate-500">360° Sky view</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="text-2xl mb-2">🧖</div>
                            <div className="font-semibold text-white">Private Sauna</div>
                            <div className="text-sm text-slate-500">Traditional wood</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="text-2xl mb-2">🦌</div>
                            <div className="font-semibold text-white">Wildlife</div>
                            <div className="text-sm text-slate-500">Reindeer watch</div>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center gap-6">
                        <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10">
                            Book - $450/night
                        </button>
                        <button className="text-white hover:text-cyan-400 font-medium transition-colors flex items-center gap-2 group">
                            View Floor Plans <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 bg-slate-800">
                        {/* Abstract visual representation since we don't have an asset yet */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/0 z-10" />
                        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black p-12 flex items-center justify-center">
                            <span className="text-9xl opacity-20 filter blur-sm">🛖</span>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute bottom-8 left-8 right-8 z-20">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-xs text-cyan-300 uppercase tracking-widest mb-1">Location</div>
                                        <div className="text-white font-medium">Tromsø, Norway</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-cyan-300 uppercase tracking-widest mb-1">Availability</div>
                                        <div className="text-white font-medium">Feb 2025</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
