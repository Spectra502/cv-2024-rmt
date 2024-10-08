import React from 'react';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { github } from '../assets';
import { motion } from 'framer-motion'
import { styles } from '../styles';
import { Tilt } from 'react-tilt';



const ProjectCard = ({index, name, description, tags, image, source_code_link, src_img}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={src_img}
                alt=""
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3><strong>{name}</strong></h3>
          <p>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
    	    My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Armed with a robust technical toolkit and a creative mindset, 
          I thrive on transforming complex challenges into elegant, efficient solutions. 
          Each project is a step towards a brighter, smarter future. Dive into my portfolio 
          and discover how my mechatronics expertise can bring a surge of energy to the world 
          of engineering!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");