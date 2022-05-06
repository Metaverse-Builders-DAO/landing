// import dynamic from 'next/dynamic'

import MBD from "../components/canvas/MBD";
import Ground from "../components/canvas/Ground";
import Navbar from "../components/dom/Navbar";
import { KernelSize } from 'postprocessing';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const DOM = () => {
  return (
    <>
      <Navbar/>
    </>
  );
}

// canvas components goes here
const R3F = () => {

  return (
    <>
      <color attach="background" args={["black"]} />
      <ambientLight />
      <MBD />
      <Ground 
        mirror={1} 
        blur={[600, 300]} 
        mixBlur={22}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]} 
        position-y={-1.6}
      />
      <EffectComposer multisampling={8}>
        <Bloom kernelSize={5} luminanceThreshold={0} luminanceSmoothing={0.6} intensity={0.8} />
        <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0.2} intensity={0.5} />
      </EffectComposer>
    </>
  );
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  );
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Metaverse Builders DAO',
    },
  }
}
