import {useState} from 'react';import {supabase} from '../lib/supabase';
export default function Contact(){const [s,setS]=useState<'idle'|'busy'|'ok'|'err'>('idle');
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();if(!supabase)return setS('err');setS('busy');
  const f=new FormData(e.currentTarget);const {error}=await supabase.from('messages').insert({name:f.get('name'),email:f.get('email'),subject:f.get('subject'),message:f.get('message')});
  if(error)setS('err');else{setS('ok');e.currentTarget.reset()}}
 const c='w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-brand';
 return <form onSubmit={submit} className="glass p-6 space-y-3"><input name="name" required placeholder="Name" className={c}/><input name="email" type="email" required placeholder="Email" className={c}/><input name="subject" required placeholder="Subject" className={c}/><textarea name="message" required rows={4} placeholder="Message" className={c}/>
 <button disabled={s==='busy'} className="rounded-xl bg-brand px-5 py-3 font-semibold">{s==='busy'?'Sending…':'Send message'}</button>
 {s==='ok'&&<p className="text-green-400 text-sm">Message sent.</p>}{s==='err'&&<p className="text-red-400 text-sm">Could not send. Check your Supabase env vars and try again.</p>}</form>}
