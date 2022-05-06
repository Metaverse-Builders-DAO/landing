import { Reflector, useTexture } from "@react-three/drei";

export default function Ground(props) {
  const [floor, normal] = useTexture(['/img/surface.jpeg', '/img/normal_map.jpeg'])
  return (
    <Reflector resolution={1024} args={[8, 8]} {...props}>
      {(Material, props) => 
        <Material 
          color="#f0f0f0" 
          metalness={0.5} 
          roughnessMap={floor} 
          normalMap={normal} 
          normalScale={[2, 2]} 
          {...props} 
        />
      }
    </Reflector>
  );
}