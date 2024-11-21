import { Link, useLocation } from 'react-router-dom'
import { 
  HiHome, 
  HiChartBar, 
  HiInformationCircle, 
  HiMail, 
  HiCog, 
  HiSupport,
  HiDocumentReport
} from 'react-icons/hi'

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: HiHome, text: 'Dashboard', path: '/' },
    { icon: HiChartBar, text: 'Analytics', path: '/analytics' },
    { icon: HiInformationCircle, text: 'About', path: '/about' },
    { icon: HiMail, text: 'Contact', path: '/contact' },
    { icon: HiSupport, text: 'Support', path: '/support' },
    { icon: HiCog, text: 'Settings', path: '/settings' }
  ]

  return (
    <div className="bg-white h-screen w-64 fixed left-0 top-0 shadow-lg pt-16">
      <div className="px-4 py-6">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
