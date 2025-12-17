import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      eventSource={document.querySelector(".hero-3d-zone")}
    >
      <ambientLight intensity={0.2} color="#1a1a40" />

      {!isMobile && (
        <OrbitControls
          enablePan={false}
          enableZoom
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
      )}

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.5 : 1}
          position={[0, -4.5, 0]}
          rotation={[0, -Math.PI / 6, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};


export default HeroExperience;
