import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Analytics() {
  // Sample data for charts
  const performanceData = Array.from({ length: 12 }, (_, i) => ({
    name: `Day ${i + 1}`,
    cpu: Math.floor(Math.random() * 40) + 60,
    memory: Math.floor(Math.random() * 30) + 50,
    network: Math.floor(Math.random() * 50) + 30,
  }))

  const resourceUsage = [
    { name: 'AI Training', value: 40 },
    { name: 'Web Services', value: 30 },
    { name: 'Database', value: 20 },
    { name: 'Storage', value: 10 },
  ]

  return (
    <div className="flex-grow pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
          
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Active Users', value: '1,234', change: '+12%' },
              { title: 'CPU Usage', value: '78%', change: '-3%' },
              { title: 'Memory Usage', value: '64%', change: '+5%' },
              { title: 'Network Traffic', value: '892GB', change: '+15%' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-gray-500 text-sm">{metric.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className={`text-sm ${
                    metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="cpu" stroke="#8884d8" />
                    <Line type="monotone" dataKey="memory" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="network" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Resource Distribution</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={resourceUsage}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
