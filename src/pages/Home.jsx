import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

import {
    headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion' ;

const Home = () => {
    const snap = useSnapshot(state);


  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header { ...slideAnimation("down")}>
                    <img src='./threejs.png'
                    alt='logo'
                    className="w-8 h-8 object-contain"/>
                </motion.header>
                <motion.div className = "home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className= "head-text">
                            LET'S <br className="x1:block hidden"/> SET NEW TRENDS...
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className="flex flex-col gap-5" >
                        <p className="max-w-md font-normal text-black-900 text-base">
                            Create your own unique Tshirt with our exclusive 3D customization option. <strong>Unleash your fashion...</strong>{" "} and define your unique style .
                        </p>

                        <CustomButton 
                            type="filled"
                            title="Let's Customize"
                            handleClick={() => state.intro=false}
                            customStyles="w-fir px-4 py2.5 font-bold text-sm"
                            />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}</AnimatePresence>
  )
}

export default Home