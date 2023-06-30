import React, { useCallback } from 'react'
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
// import styles from './Layouts.module.scss';
import Particles from 'react-tsparticles';
import { type Container, type Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import img1 from '../assets/Fon1.jpg';

interface TProps {
  children: JSX.Element;
}

export const Layout = ({ children }: TProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    console.log(container);
  }, []);
  return (
    <div style={{
      backgroundImage: `url(${img1})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%'
    }} >
      <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      // background: {
      //   color: {
      //     value: '#A8e4a037',
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#25b413ce',
        },

        // links: {
        //   color: '#25b413ce',
        //   distance: 150,
        //   enable: true,
        //   opacity: 0.5,
        //   width: 1,
        // },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
/>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
