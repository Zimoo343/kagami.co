import { useState } from 'react'
import { motion } from "motion/react"
import Kagami from './components/Kagami.svg'

function App() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-black">
      <motion.div
        className={`relative w-6 h-6 rounded-full cursor-pointer group ${isExpanded ? 'pointer-events-none' : ''}`}
        style={{ 
          background: 'radial-gradient(circle, #fbbf24, #f97316)',
          border: 'none'
        }} 
        initial={{ scale: 1 }}
        animate={isExpanded ? { scale: [1, 20, 25] } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        onClick={() => {
          if (!isExpanded) {
            setIsExpanded(true)
            setAnimationComplete(false)
          }
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        <div
          className="absolute transition-opacity duration-300 opacity-30 -inset-px bg-gradient-to-r from-[#fbbf24] via-[#f97316] to-[#f97316] rounded-full blur-sm group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200 pointer-events-auto"
        />
      </motion.div>

      <motion.div
        className={`absolute w-72 h-72 flex flex-col justify-center items-center ${isExpanded ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
      >
        <img src={Kagami} alt="Kagami" className="w-full h-full" />
        {animationComplete && (
          <motion.div
            className="text-2xl font-bold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Coming Soon...
          </motion.div>
        )}
      </motion.div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
        <div className="absolute inset-0 bg-noise opacity-5 animate-grain"></div>
      </div>
    </div>
  )
}

export default App