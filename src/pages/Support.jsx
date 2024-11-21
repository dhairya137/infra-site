import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Support() {
  const [selectedCategory, setSelectedCategory] = useState('general')

  const faqCategories = {
    general: [
      {
        question: "What is QuantumFlow?",
        answer: "QuantumFlow is a next-generation cloud infrastructure platform that combines AI and DevOps to provide intelligent, automated cloud solutions for businesses of all sizes."
      },
      {
        question: "How do I get started?",
        answer: "Sign up for a free account, and our AI-powered onboarding process will guide you through setting up your first project. Our automated systems will help you choose the optimal configuration for your needs."
      },
      {
        question: "What support plans do you offer?",
        answer: "We offer multiple tiers of support: Basic (included), Professional (24/7 support), and Enterprise (dedicated support team with SLA guarantees)."
      }
    ],
    technical: [
      {
        question: "How does your AI optimization work?",
        answer: "Our AI systems continuously monitor your infrastructure, analyzing patterns and usage to automatically optimize resource allocation, scaling, and cost management."
      },
      {
        question: "What DevOps tools do you support?",
        answer: "We support all major DevOps tools including GitHub, GitLab, Jenkins, and offer native integration with AWS CodePipeline, CodeBuild, and CodeDeploy."
      },
      {
        question: "Can I migrate existing applications?",
        answer: "Yes, our AI-powered migration assistant helps analyze your current infrastructure and provides a detailed migration plan with automated tools to assist the process."
      }
    ],
    billing: [
      {
        question: "How does pricing work?",
        answer: "We offer usage-based pricing with predictable monthly costs. Our AI systems help optimize your resource usage to minimize costs while maintaining performance."
      },
      {
        question: "Do you offer startup credits?",
        answer: "Yes, eligible startups can receive up to $100,000 in platform credits through our Startup Accelerator Program."
      }
    ]
  }

  return (
    <div className="flex-grow pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Support Center</h1>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="mb-4">Talk to our support team in real-time</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
                Start Chat
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Submit Ticket</h3>
              <p className="mb-4">Create a support ticket for detailed assistance</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-md">
                New Ticket
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-600 to-teal-500 text-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="mb-4">Browse our detailed documentation</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-md">
                View Docs
              </button>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            {/* Category Selector */}
            <div className="flex space-x-4 mb-6">
              {Object.keys(faqCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqCategories[selectedCategory].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 pb-4"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
