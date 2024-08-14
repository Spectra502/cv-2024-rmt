import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles'
import { motion } from 'framer-motion'


const Tech = () => {
  return (
    <div
      className='flex flex-col items-centered justify-center
      gap-10'
    >
      
      <h2 className={styles.sectionHeadText}>Technologies used for this project</h2>
      
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
            <div
              className='w-28 h-28'
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
              <div className='flex flex-row flex-wrap justify-center
              gap-10'>
                <p className={styles.sectionSubText}>{technology.name}</p>
              </div>
            </div>
          ))}
      </div>
      
      
    </div>
  )
}

export default SectionWrapper(Tech, '');