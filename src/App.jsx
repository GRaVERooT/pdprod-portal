import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Цифровая сеть */}
      <motion.svg className="network" width="100%" height="100%">
        <motion.line
          x1="10%"
          y1="10%"
          x2="90%"
          y2="90%"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.line
          x1="90%"
          y1="10%"
          x2="10%"
          y2="90%"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <circle cx="50%" cy="50%" r="5" fill="rgba(255, 255, 255, 0.3)" />
      </motion.svg>

      {/* Частицы по всему фону */}
      <div className="particles">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{ width: Math.random() * 3 + 1, height: Math.random() * 3 + 1 }}
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 1 }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [1, 0.5, 0, 1],
            }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Хедер с логотипом */}
      <div className="header">
        <div className="logo">
          <img src="/pdprod_logo.png" alt="pdprod.kz logo" />
        </div>
      </div>
    </div>
  );
}

export default App;