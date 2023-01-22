
import './GalleryModel.css';

import { React } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';
import { PresentationControls, OrbitControls } from '@react-three/drei';

function Model(props) {
  const { nodes, materials } = useGLTF('./assets/sock.glb');
  return (
    <group {...props} dispose={null}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.group9_polySurface20SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.group9_polySurface20SG1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.group9_polySurface20SG2} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.group9_polySurface20SG3} />
    </group>
     )
}
    
export default function GalleryModel() {
    return (
        <div className='galModMain'>
            <div className="galleryModelApp">
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
                    
                    <Model rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.9, 0]} scale={0.23} />
                    
                    </PresentationControls>
                    <Environment preset="sunset" />
                    <ContactShadows position={[0, 1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
                    <OrbitControls />
                </Canvas>
                </>
            </div>
            <div className="galleryModelOne">
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
                    
                    <Model rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.9, 0]} scale={0.23} />
                    
                    </PresentationControls>
                    <Environment preset="sunset" />
                    <ContactShadows position={[0, 1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
                    <OrbitControls />
                </Canvas>
                </>
            </div>
            <div className="galleryModelTwo">
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
                    
                    <Model rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.9, 0]} scale={0.23} />
                    
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