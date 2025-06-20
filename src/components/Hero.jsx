import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { isWebGLAvailable } from '../utils/isWebGLAvailable';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1
            className={`${styles.heroHeadText} text-[#D4A2FF]`}
            style={{
              position: 'absolute',
              top: '30vh',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            Hello! I'm
          </h1>
        </div>
      </div>

      {isWebGLAvailable() ? (
        <ComputersCanvas />
      ) : (
        <div className="w-full h-[500px] flex items-center justify-center text-white text-lg">
          Your browser does not support WebGL.
        </div>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      <div>
        <p
          className={`${styles.heroSubText} mt-2 text-white-100`}
          style={{
            position: 'absolute',
            top: '67vh',
            left: '50vw',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}
        >
          Thank you for checking out my site! <br className='sm:block hidden' />
          I'm a web and app developer <br className='sm:block hidden' />
          with an interest in 3D design. <br className='sm:block hidden' /> (Try spinning my name!)
        </p>
      </div>
    </section>
  );
};

export default Hero;
