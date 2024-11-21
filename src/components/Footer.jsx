import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white ml-64">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">CloudTech</h3>
            <p className="mt-4">Making cloud infrastructure simple and accessible for everyone.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>contact@cloudtech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street, Silicon Valley, CA</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 CloudTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
