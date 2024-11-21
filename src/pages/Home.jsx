import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'

export default function Home() {
  const features = [
    {
      title: "AI-Powered Infrastructure",
      description: "Intelligent resource allocation and predictive scaling using advanced machine learning algorithms",
      icon: "🤖"
    },
    {
      title: "DevOps Automation",
      description: "Automated CI/CD pipelines with intelligent testing and deployment strategies",
      icon: "⚙️"
    },
    {
      title: "Smart Monitoring",
      description: "AI-driven monitoring and alerting system with predictive maintenance",
      icon: "📊"
    }
  ];

  const techStack = [
    {
      category: "AI/ML Services",
      items: [
        "Amazon SageMaker",
        "AWS Comprehend",
        "AWS Rekognition",
        "Custom ML Models"
      ]
    },
    {
      category: "DevOps Tools",
      items: [
        "AWS CodePipeline",
        "AWS CodeBuild",
        "AWS CodeDeploy",
        "Terraform"
      ]
    },
    {
      category: "Infrastructure",
      items: [
        "Amazon EKS",
        "AWS Lambda",
        "Amazon ECS",
        "AWS Fargate"
      ]
    }
  ];

  return (
    <div className="flex-grow pt-16 relative overflow-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Next-Gen Cloud Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Powered by AI & DevOps Excellence
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-white/80 backdrop-blur-md py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our AI & DevOps Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techStack.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="mr-2">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usage Metrics Section */}
      <section className="relative z-10 bg-white/80 backdrop-blur-md py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12">Projected AWS Usage</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { metric: "Computing Power", value: "1000+", unit: "Instance Hours/Day" },
                { metric: "AI Training", value: "500+", unit: "GPU Hours/Month" },
                { metric: "Data Processing", value: "50+", unit: "TB/Month" },
                { metric: "API Requests", value: "1M+", unit: "Requests/Day" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                >
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-sm opacity-90">{stat.metric}</p>
                  <p className="text-xs opacity-75">{stat.unit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
