import {Canvas} from '@react-three/fiber';import {Stars} from '@react-three/drei';
export default function Bg(){return <div className="fixed inset-0 -z-10"><Canvas dpr={1}><Stars radius={80} depth={50} count={2500} factor={3} fade speed={1}/></Canvas></div>}
