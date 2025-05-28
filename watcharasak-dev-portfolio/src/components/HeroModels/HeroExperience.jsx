import { Canvas } from '@react-three/fiber'; // Fixed: Canvas should be destructured
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive'; // Import for media queries
import { House } from './House.jsx'; // Import the House component
import { Room } from './Room.jsx'; // Import the Room component
import { JapanRoom } from './Isometric_japanese_tea_room.jsx';
import HeroLight from './HeroLight.jsx';

const HeroExperience = () => {

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); // Placeholder for device check, can be replaced with actual logic
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Placeholder for device check, can be replaced with actual logic

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <OrbitControls  
        enableZoom={!isTablet} // Disable zoom on tablet
        enablePan={false}
        maxDistance={20}
        minDistance={15}
        minPolarAngle={Math.PI / 5} // Prevents looking too high
        maxPolarAngle={Math.PI / 2} // Prevents looking too low
      />
      <HeroLight />
      <group 
        scale={isMobile ? 0.7 : 1} // Adjust scale for mobile devices
        position={[0, -3.5, 0]}
        rotation={[0, Math.PI / 4, 0]} // Rotate the group to face the camera
      >
        <Room />
      </group>
    </Canvas>
  )
}

export default HeroExperience