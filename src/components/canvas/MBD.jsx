import { useState, useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function MBD(props) {
  const ref = useRef();
  const [r] = useState(() => Math.random() * 10000);
  useFrame((state, delta) =>
    ref.current
      ? (ref.current.rotation.z += 0.006)
      : null
  )

  const { nodes } = useGLTF(`/img/logo.glb`);

  return (
    <mesh 
      ref={ref}
      castShadow
      scale={[18, 18, 18]}
      rotation={[Math.PI/2, 0, 0]}
      geometry={nodes.Curve.geometry} 
      // material={nodes.Curve.material}
      {...props}
    >
      <meshStandardMaterial attach="material" color="#FF4030" />
    </mesh>
  )
}