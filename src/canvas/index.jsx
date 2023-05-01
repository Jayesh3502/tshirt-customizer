import {Canvas} from '@react-three/fiber'
import {Center, Environment } from '@react-three/drei'
import Backdrop from './Backdrop';
import Shirt from './Shirt';
import CameraRig from './CameraRig';


const CanvasModel = () => {
  return (
    <Canvas
    shadows
    camera={{position: [0,0,0], fov: 25}}
    gl={{preservingDrawingBuffer : true}}
    className="w-full max-w-full h-full transition-all ease-in" >
      <ambientLight intensity={0.5}></ambientLight>
      <Environment preset="city"/>
      <CameraRig> 
        <Backdrop/>
        <Center>
          <Shirt/>
        </Center>
      </CameraRig> 
    </Canvas>
  )
}

export default CanvasModel