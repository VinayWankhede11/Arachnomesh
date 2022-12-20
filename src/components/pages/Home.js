import React, {useState, useEffect} from 'react'
// import Navbar from '../navbar/Navbar'
import "./Home.css"
import BottleCap from '../../assets/bottle-cap.svg'
import OpenBottle from '../../assets/abc.jpg'
import { AiOutlineShoppingCart} from "react-icons/ai";
import { motion } from "framer-motion";

function Home () {
    const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <>  
    {(toggleMenu || screenWidth > 700) ? (
        <div>
            
        <motion.div id="circle" 
        animate={{ x:0, y:0,opacity: 1, scale: 1.1 }}
                transition={{
                    duration: 4,
                    delay: 0.3,
                    // ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 1, scale: 0.8 }}
        >
            <motion.div
                animate={{ x:0, y:40,opacity: 1, scale: 1 }}
                transition={{
                    duration: 3,
                    delay: 0.3,
                    // ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                // whileHover={{ scale: 1.2 }} 
            ><p className="line1">Self Cleaning Bottle</p></motion.div>
            <motion.div
                animate={{ x:0, y:5,opacity: 1, scale: 1 }}
                transition={{
                    duration: 3,
                    delay: 0.3,
                    // ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
            ><p className="line2">In 60 Seconds</p></motion.div>
            <motion.div
                animate={{ x:0, y:5,opacity: 1, scale: 1 }}
                transition={{
                    duration: 3,
                    delay: 0.3,
                    // ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
            ><p className="line3">Hit refresh with the intelligently clean bottle built for adventure.</p></motion.div>
            <motion.div
                animate={{ y: 0, y:0 ,scale:1,opacity:1 }}
                transition={{ delay: 1.5, duration:3 }}
                initial={{ y:0, y:100 ,scale:0.5, opacity:0}}
            ><button className="btn-know">KNOW MORE</button></motion.div>
        </motion.div>
        <br />
        <motion.div>
        <motion.div 
            animate={{ y: 0, y:700}}
            transition={{ delay: 1.5, duration:2,ease:[0.5, 0.71, 0.5,2] }}
            initial={{ y:0, y:670 }}
            >
                <img src={OpenBottle} alt="bottle"/>
            </motion.div>
        <motion.div 
          animate={{ y: 0, y:510}}
          transition={{ delay: 0, duration:4, ease: [0.5, 0.71, 0.5, 1.05] }}
          initial={{ y:0, y:30 }}
        >
          <img src={BottleCap} alt="bottle cap"/>
        </motion.div>
        
            
        
      </motion.div>
      <button className="btn-cart"><AiOutlineShoppingCart/>&nbsp; Add to cart</button>
            </div>):(null)}
    </>
  )
}

export default Home