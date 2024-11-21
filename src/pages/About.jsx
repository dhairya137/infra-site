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
          <h1 className="text-4xl font-bold mb-8">About CloudTech</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              CloudTech Solutions is a cutting-edge cloud infrastructure company dedicated to making cloud computing accessible and efficient for businesses of all sizes.
            </p>
            <p className="text-lg mb-6">
              Founded in 2023, we've quickly grown to become a trusted partner for hundreds of businesses worldwide. Our mission is to simplify cloud infrastructure management while providing enterprise-grade reliability and security.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              To democratize cloud computing by providing simple, efficient, and cost-effective solutions that help businesses scale and succeed in the digital age.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li>Industry-leading uptime and reliability</li>
              <li>24/7 expert support</li>
              <li>Competitive pricing</li>
              <li>Latest technologies and infrastructure</li>
              <li>Scalable solutions for businesses of all sizes</li>
              <li>Advanced security features</li>
              <li>Global data center presence</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
