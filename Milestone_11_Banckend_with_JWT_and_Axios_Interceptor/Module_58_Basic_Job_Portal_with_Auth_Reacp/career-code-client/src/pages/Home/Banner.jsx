import React from 'react'
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
                <div className='flex-1 flex flex-col items-center'>

                    <motion.img 
                    src={team1}
                    className="max-w-sm shadow-2xl border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px]"
                    animate={{
                        x: [-80],
                        y: [0, 50, 0],
                        transition: {duration: 5, repeat: Infinity},
                    }}
                    />

                    <motion.img 
                    src={team2}
                    className="max-w-sm shadow-2xl border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [-50],
                        transition: {duration: 10, delay: 5, repeat: Infinity},
                    }}
                    
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        className="text-5xl font-bold">
                        Latest
                        <motion.span
                            animate={{
                                color: ['#ff5733', '#33ff33', '#8a33ff'],
                                transition: { duration: 4, repeat: Infinity },
                            }}>
                            Jobs
                        </motion.span> for You!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner