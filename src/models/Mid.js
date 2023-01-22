
import './Mid.css'

import { React, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';
import { PresentationControls, OrbitControls } from '@react-three/drei';
import { proxy, useSnapshot } from 'valtio';
import { HexColorPicker } from 'react-colorful';

const state = proxy ({
  current: null,
  items: {
    Material_1: '#ffffff',
  }
})

function Model(props) {
  
  const ref = useRef();
  const { nodes, materials } = useGLTF('./assets/mid.glb');
  const snap = useSnapshot(state);
  const set = useState(null);

  return (
    <group {...props} dispose={null}
      ref = {ref}
      onPointerOver = {(e) => {e.stopPropagation().set(e.object.material.name)}}
      onPointerOut = {(e) => {e.intersections.length===0 && set(null)}}
      onPointerMissed = {(e) => {e.stopPropagation(); state.current = null}}
      onClick = {(e) => (e.stopPropagation() (state.current = e.object.material.name))}
    >
        <mesh material-color={snap.items.Material_1} geometry={nodes.Object_2_primitive.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.Object_3_primitive.geometry} material={materials.Material_2} />
    </group>
  )
}

function Picker(){
  const snap = useSnapshot(state);
  return (
    <div className='midPicker' style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
    </div>
  )
}

export default function Mid() {
  return (
    <div className="midApp">
      <>
        <Picker/>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [30, 0, 20], fov: 20 }} >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}  />
          <PresentationControls 
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]} 
          >
            
          <Model rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} scale={0.3} />
          
          </PresentationControls>
          <Environment preset="sunset" />
          <ContactShadows position={[0, 0.5, 0]} opacity={0.95} scale={10} blur={2.5} far={4} />
          <OrbitControls />
        </Canvas>
      </>
    </div>
  )
}


