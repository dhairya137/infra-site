import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="flex-grow pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 my-8"
        >
          <h1 className="text-4xl font-bold mb-8">About QuantumFlow</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              QuantumFlow is a cutting-edge cloud infrastructure platform that combines AI and DevOps to revolutionize how businesses manage their cloud resources.
            </p>
            <p className="text-lg mb-6">
              Founded in 2023, we've quickly grown to become a trusted partner for hundreds of businesses worldwide. Our mission is to simplify cloud infrastructure management while providing enterprise-grade reliability and security through AI-driven automation.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              To revolutionize cloud computing by providing AI-powered, efficient, and cost-effective solutions that help businesses scale and succeed in the digital age.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">Why Choose QuantumFlow?</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li>AI-Powered Infrastructure Optimization</li>
              <li>Automated DevOps Workflows</li>
              <li>Predictive Scaling and Resource Management</li>
              <li>Latest Cloud Technologies and Infrastructure</li>
              <li>Enterprise-Grade Security with AI Threat Detection</li>
              <li>Global Edge Computing Network</li>
              <li>24/7 AI-Enhanced Support</li>
            </ul>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-6 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-2">100+</h3>
                <p>AI Models Deployed</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-2">99.99%</h3>
                <p>Platform Uptime</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p>Enterprise Clients</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
