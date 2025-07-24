import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from './common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiHeart, FiZap, FiCheck, FiArrowRight } = FiIcons;

function App() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const features = [
    { icon: FiZap, title: "Lightning Fast", desc: "Built with Vite for optimal performance" },
    { icon: FiStar, title: "Modern Design", desc: "Beautiful UI with Tailwind CSS" },
    { icon: FiHeart, title: "Developer Friendly", desc: "Clean code structure and best practices" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiZap} className="text-2xl text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">Greta Test</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLiked(!liked)}
            className={`p-2 rounded-full transition-colors ${
              liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <SafeIcon icon={FiHeart} className="text-lg" />
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Greta</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This is a simple test page showcasing modern React development with beautiful animations and responsive design.
          </p>
          
          {/* Interactive Counter */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 max-w-md mx-auto mb-12"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Interactive Counter</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">{count}</div>
            <div className="flex justify-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCount(count - 1)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                -1
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCount(0)}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                Reset
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCount(count + 1)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                +1
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50"
            >
              <SafeIcon icon={feature.icon} className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Cards */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <SafeIcon icon={FiCheck} className="text-2xl text-green-600" />
              <h3 className="text-lg font-semibold text-green-800">All Systems Operational</h3>
            </div>
            <p className="text-green-700">React, Tailwind CSS, and Framer Motion are working perfectly!</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <SafeIcon icon={FiArrowRight} className="text-2xl text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Ready for Development</h3>
            </div>
            <p className="text-blue-700">Your development environment is set up and ready to go!</p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-gray-900 text-white py-8 mt-16"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400">Built with ❤️ using Greta • React • Tailwind CSS • Framer Motion</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;