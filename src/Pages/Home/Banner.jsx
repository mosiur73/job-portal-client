import React from 'react';
import { easeIn, easeInOut, motion, useInView } from "framer-motion"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <div className="hero bg-base-200 min-h-96 my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='flex-1'>
        <motion.img
         animate={{y:[50,100,50]}}
         transition={{duration:10,delay:5, repeat:Infinity}}
        
        className='max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-900'
         src={team1} alt="" />
        <motion.img
        animate={{x:[50,100,50]}}
        transition={{duration:10,delay:5, repeat:Infinity}}
        className='max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-900'
         src={team2} alt="" />
         </div>
          <div className='flex-1'>
           
            <motion.h1
            animate={{x:50, color:['red']}}
            transition={{duration:2, delay:1, ease:easeInOut,repeat:Infinity}}
             className="text-5xl font-bold">Job <motion.span
             animate={{color:['#ecff33', '#33ffe3']}}
             transition={{duration:1, repeat:Infinity}}
             >Portal</motion.span> News!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;