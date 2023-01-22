import './Home.css';

import { React, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';
import { PresentationControls, OrbitControls } from '@react-three/drei';

import { Link } from 'react-router-dom';

function Model(props) {
  
  const ref = useRef();
  const { nodes, materials } = useGLTF('./assets/crew.glb');

  return (
    <group {...props} dispose={null}
      ref = {ref} >
        <mesh geometry={nodes.Object_2_primitive.geometry} material={materials.fabric_Mat} />
        <mesh geometry={nodes.Object_3_primitive.geometry} material={materials.plastic_Mat} />
    </group>
  )
}

function Ankle(props) {
  
    const ref = useRef();
    const { nodes, materials } = useGLTF('./assets/ankle.glb');
  
    return (
      <group {...props} dispose={null}
        ref = {ref} >
          <mesh geometry={nodes.Object_2_primitive.geometry} material={materials.fabric_Mat} />
          <mesh geometry={nodes.Object_3_primitive.geometry} material={materials.plastic_Mat} />
      </group>
    )
  }

function Mid(props) {

  const ref = useRef();
  const { nodes, materials } = useGLTF('./assets/mid.glb');
    
  return (
    <group {...props} dispose={null}
      ref = {ref} >
        <mesh geometry={nodes.Object_2_primitive.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.Object_3_primitive.geometry} material={materials.Material_2} />
    </group>
  )
}

function Crew(props) {

  const ref = useRef();
  const { nodes, materials } = useGLTF('./assets/crew.glb');
  
  return (
    <group {...props} dispose={null}
      ref = {ref} >
        <mesh geometry={nodes.Object_2_primitive.geometry} material={materials.fabric_Mat} />
        <mesh geometry={nodes.Object_3_primitive.geometry} material={materials.plastic_Mat} />
    </group>
  )
}

export default function Home() {
  return (
    <div>
      <h1 className='mainTxt'>
          <h1>3D / AI</h1>
          <h1>DESIGN SOCK</h1>
      </h1>
      <div className='mainBtn' >
          <a className='mainBtnTxt' href="/ankle">Start Design</a>
    </div>
      
      <div className="mainModel">
        <>
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
          <ContactShadows position={[0, 1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
          <OrbitControls />
          </Canvas>
        </>
      </div>
      <div className="ankleModel">
        <Link className='ankleModelTxt' to="/ankle">Ankle</Link>
          <>
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
                
            <Ankle rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} scale={0.3} />
            
            </PresentationControls>
            <Environment preset="sunset" />
            <ContactShadows position={[0, 1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
            <OrbitControls />
            </Canvas>
          </>
      </div>
      <div className="midModel">
          <h3 >Mid</h3>
      <>
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
              
        <Mid rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} scale={0.3} />
          
        </PresentationControls>
        <Environment preset="sunset" />
        <ContactShadows position={[0, 1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
        <OrbitControls />
        </Canvas>
      </>
      </div>
      <div className="crewModel">
        <h3 >Crew</h3>
          <>
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
              
            <Crew rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} scale={0.3} />
          
            </PresentationControls>
            <Environment preset="sunset" />
            <ContactShadows position={[0, 1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
            <OrbitControls />
            </Canvas>
          </>
      </div>
      
    </div>
  )
}
