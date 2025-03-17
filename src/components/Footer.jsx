import { Globe2, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe2 className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-bold">Multilingual Academy</span>
            </div>
            <p className="text-gray-400">
            Transforming lives through language learning
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's talk</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span>info@multilingualacademy.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span>+1 234 567 890</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4"> Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">Instagram</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 Multilingual Academy. All rights reserved..</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;