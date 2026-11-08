import {lazy,Suspense,useState} from 'react';import {motion} from 'framer-motion';import {Github,Mail} from 'lucide-react';import Contact from './components/Contact';
const IdCard=lazy(()=>import('./components/IdCard'));const Bg=lazy(()=>import('./components/Stars'));
const nav=['Home','About','Portfolio','Contact'];
const projects=[['CraftVerse','Creative building platform.',['React','Supabase']],['Developer Portfolio','This 3D portfolio.',['Three.js','Tailwind']],['Social Media Downloader','Fast media saving tool.',['TypeScript','API']]] as const;
const tabs=['Projects','Certificates','Achievements','Tech Stack'];
export default function App(){const [tab,setTab]=useState(0);
 return <><Suspense fallback={null}><Bg/></Suspense>
 <nav className="fixed z-50 top-4 left-1/2 -translate-x-1/2 glass px-6 py-2 hidden md:flex gap-6 text-sm">{nav.map(n=><a key={n} href={'#'+n.toLowerCase()}>{n}</a>)}</nav>
 <nav className="fixed z-50 bottom-0 inset-x-0 glass rounded-none flex justify-around py-3 md:hidden pb-[calc(.75rem+env(safe-area-inset-bottom))]">{nav.map(n=><a key={n} href={'#'+n.toLowerCase()} className="text-xs">{n}</a>)}</nav>
 <main className="max-w-6xl mx-auto px-5 pb-28">
  <section id="home" className="min-h-screen grid md:grid-cols-2 items-center gap-6 pt-24">
   <div className="order-2 md:order-1 text-center md:text-left"><p className="text-sm text-slate-400">Building Digital Experiences</p>
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight"><span className="bg-gradient-to-r from-brand to-violet bg-clip-text text-transparent">Welcome to</span><br/>My Portfolio</h1>
    <p className="text-brand mt-3">React &amp; Three.js Enthusiast</p><p className="text-slate-400 mt-3 max-w-md">I'm Jahid Hasan, a web developer who builds fast, interactive sites.</p>
    <div className="flex gap-3 mt-6 justify-center md:justify-start"><a href="#portfolio" className="rounded-xl bg-brand px-5 py-3 font-semibold">View Projects</a><a href="#contact" className="rounded-xl glass px-5 py-3">Contact Me</a></div></div>
   <div className="order-1 md:order-2 h-[460px] md:h-[640px]"><Suspense fallback={<div className="h-full grid place-items-center text-slate-500">Loading…</div>}><IdCard/></Suspense></div>
  </section>
  <section id="about" className="py-20 grid md:grid-cols-3 gap-6 items-center"><div><h2 className="text-3xl font-bold">Hi, I'm Jahid Hasan</h2><a href="#contact" className="inline-block mt-4 rounded-xl bg-brand px-5 py-3">Contact</a></div><img src="/portrait.jpg" alt="Jahid" className="rounded-3xl glass object-cover max-h-96 mx-auto"/><p className="text-slate-400">Web developer focused on React, TypeScript and 3D on the web.</p></section>
  <section id="portfolio" className="py-20"><h2 className="text-3xl font-bold mb-6">Portfolio</h2>
   <div className="flex gap-2 overflow-x-auto mb-6">{tabs.map((t,i)=><button key={t} onClick={()=>setTab(i)} className={'px-4 py-2 rounded-full text-sm whitespace-nowrap '+(i===tab?'bg-brand':'glass')}>{t}</button>)}</div>
   {tab===0?<div className="grid md:grid-cols-3 gap-5">{projects.map(([n,d,t])=><motion.article whileHover={{y:-6}} key={n} className="glass p-5"><div className="h-32 rounded-xl bg-gradient-to-br from-brand/30 to-violet/30 mb-4"/><h3 className="font-bold">{n}</h3><p className="text-sm text-slate-400">{d}</p><div className="flex gap-2 my-3">{t.map(x=><span key={x} className="text-xs px-2 py-1 rounded bg-white/10">{x}</span>)}</div><div className="flex gap-2 text-sm"><a href="#" className="text-brand">Live demo</a><a href="#" className="text-slate-400">Source</a></div></motion.article>)}</div>:<p className="text-slate-400">Add {tabs[tab].toLowerCase()} from the admin dashboard.</p>}</section>
  <section id="contact" className="py-20 grid md:grid-cols-2 gap-6"><Contact/><div className="glass p-6 space-y-3"><h3 className="font-bold">Find me</h3><a href="https://github.com" className="flex gap-2"><Github size={18}/>GitHub</a><a href="mailto:you@example.com" className="flex gap-2"><Mail size={18}/>Email</a></div></section>
 </main></>}
