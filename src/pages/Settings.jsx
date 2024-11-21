import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    security: {
      twoFactor: true,
      sessionTimeout: 30
    },
    theme: 'light'
  })

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }))
  }

  return (
    <div className="flex-grow pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Settings</h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-64">
              <div className="bg-white rounded-lg shadow-lg p-4">
                {['profile', 'notifications', 'security', 'billing', 'api'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-2 rounded-md mb-2 ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                {activeTab === 'profile' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Profile Picture
                        </label>
                        <div className="flex items-center space-x-4">
                          <img
                            src="https://ui-avatars.com/api/?name=John+Doe"
                            alt="Profile"
                            className="w-16 h-16 rounded-full"
                          />
                          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                            Change
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          defaultValue="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          defaultValue="john@example.com"
                        />
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Save Changes
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'notifications' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
                    <div className="space-y-4">
                      {Object.entries(settings.notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-gray-700 capitalize">{key} Notifications</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={value}
                              onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'security' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.security.twoFactor}
                            onChange={(e) => handleSettingChange('security', 'twoFactor', e.target.checked)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                          />
                          <span>Enable Two-Factor Authentication</span>
                        </label>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Session Timeout (minutes)
                        </label>
                        <input
                          type="number"
                          value={settings.security.sessionTimeout}
                          onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Update Security Settings
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'billing' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Current Plan</h3>
                        <p className="text-2xl font-bold text-blue-600">Enterprise</p>
                        <p className="text-gray-600">$999/month</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Payment Method</h3>
                        <div className="flex items-center space-x-4">
                          <div className="bg-gray-100 p-4 rounded-md">
                            <span>•••• •••• •••• 4242</span>
                          </div>
                          <button className="text-blue-600 hover:underline">
                            Change
                          </button>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Update Billing
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'api' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">API Settings</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">API Key</h3>
                        <div className="flex items-center space-x-4">
                          <input
                            type="password"
                            value="sk_test_123456789"
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                          />
                          <button className="text-blue-600 hover:underline">
                            Regenerate
                          </button>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Webhook URL</h3>
                        <input
                          type="url"
                          placeholder="https://your-domain.com/webhook"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Save API Settings
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
