import { useState } from 'react'
import { motion } from "motion/react"
import KagamiLogo from './images/Kagami.svg' // Adjust the path as necessary

function App() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        className="w-6 h-6 rounded-full cursor-pointer"
        style={{ 
          background: animationComplete ? 'black' : 'radial-gradient(circle, #fbbf24, #f97316)',
          border: animationComplete ? '1px solid #f97316' : 'none',
          boxShadow: isExpanded ? '0 0 40px #f97316' : (animationComplete ? '0 0 40px #f97316' : 'none') 
        }} 
        initial={{ scale: 1 }}
        animate={isExpanded ? { scale: [1, 25, 30] } : {}}
        transition={{ duration: 4, ease: "easeInOut" }}
        onClick={() => {
          setIsExpanded(!isExpanded)
          setAnimationComplete(false)
        }}
        onAnimationComplete={handleAnimationComplete}
      />

      <motion.div
        className={`absolute w-96 h-96 flex justify-center items-center ${isExpanded ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
      >
        <img src={KagamiLogo} alt="Kagami Logo" className="w-full h-full" style={{ color: animationComplete ? '#f97316' : 'black' }} />
      </motion.div>
    </div>
  )
}

export default App