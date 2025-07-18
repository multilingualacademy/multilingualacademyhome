import { BookOpen, Users, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { languagesData } from '../data/LanguagesData';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Master a language
        </h1>
        <p className="text-xl text-gray-600 mb-8">
        "Unlock endless opportunities by learning multiple languages."
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
        Get started
        </button>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* ... código existente para características ... */}
      </div>

      {/* Languages Grid */}
      <h2 className="text-3xl font-bold text-center mb-8">Explore our languages</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {languagesData.map((language) => (
          <div
            key={language.name}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            title={language.translation} // Muestra la traducción al inglés al pasar el mouse
          >
            <Link to={`/idioma/${language.slug}`}>
              <div className="flex items-center mb-4">
                <img
                  src={language.flagUrl}
                  alt={`${language.name} flag`}
                  className="w-10 h-10 mr-3 rounded-full shadow"
                />
                <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                  {language.name}
                </h3>
              </div>
            </Link>
            <div className="grid grid-cols-2 gap-4">
              {language.levels.map((level, index) => (
                <div key={index} className={`flex items-center hover:bg-gray-50 p-2 rounded ${index % 2 === 1 ? "justify-end text-right" : ""}`}>
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  <span
                    className="text-gray-600 hover:text-blue-600 cursor-pointer"
                    title={level.translation}
                    onClick={() => {
                      const userInput = prompt("Ingrese la contraseña:");
                      if (userInput === level.password) {
                        window.open(level.url, "_blank");
                      } else {
                        alert("Contraseña incorrecta.");
                      }
                    }}
                  >
                    {level.name}
                  </span>
                  <span
                    className="text-blue-600 ml-2 cursor-pointer"
                    onClick={() => {
                      const userInput = prompt("Ingrese la contraseña:");
                      if (userInput === level.password) {
                        window.open(level.url, "_blank");
                      } else {
                        alert("Contraseña incorrecta.");
                      }
                    }}
                  >
                    
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
