import {Canvas,useFrame} from '@react-three/fiber';import {useTexture,Environment} from '@react-three/drei';import {useRef} from 'react';import * as THREE from 'three';
function Card(){const g=useRef<THREE.Group>(null);const tex=useTexture('/portrait.jpg');
 useFrame(({clock,pointer})=>{if(!g.current)return;const t=clock.elapsedTime;g.current.rotation.z=Math.sin(t*1.2)*0.06+pointer.x*0.08;g.current.rotation.y=pointer.x*0.5+Math.sin(t*.8)*.08;g.current.rotation.x=-pointer.y*0.2;});
 return <group position={[0,2.2,0]}><group ref={g}>
  <mesh position={[0,.1,0]}><cylinderGeometry args={[.04,.04,2.2]}/><meshStandardMaterial color="#111"/></mesh>
  <group position={[0,-2.4,0]}>
   <mesh><boxGeometry args={[2.2,3.2,.06]}/><meshStandardMaterial color="#0b1220" metalness={.4} roughness={.4}/></mesh>
   <mesh position={[0,.15,.04]}><planeGeometry args={[2,2.5]}/><meshStandardMaterial map={tex}/></mesh>
   <mesh position={[0,-1.2,.04]}><planeGeometry args={[2,.5]}/><meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={.4}/></mesh>
  </group></group></group>}
export default function IdCard(){return <Canvas dpr={[1,1.5]} camera={{position:[0,0,6],fov:45}} fallback={<img src="/portrait.jpg" alt="Jahid Hasan"/>}>
 <ambientLight intensity={.8}/><pointLight position={[3,3,4]} color="#8B5CF6" intensity={30}/><Card/><Environment preset="city"/></Canvas>}
