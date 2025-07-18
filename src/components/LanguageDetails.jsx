import { useParams, Link } from 'react-router-dom';
import { Award, CheckCircle, Globe } from 'lucide-react';
import { languagesData } from '../data/LanguagesData';

const LanguageDetails = () => {
  const { language } = useParams();
  const languageInfo = languagesData.find(lang => lang.slug === language);

  if (!languageInfo) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Language not found</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Return to home
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <img
            src={languageInfo.flagUrl}
            alt={`Bandera de ${languageInfo.name}`}
            className="h-10 w-16 mr-4 rounded shadow"
          />
          <h1 className="text-4xl font-bold text-gray-900 flex items-center">
            <img src="/favicon.png" alt="Logo" className="h-8 w-8 mr-3" />

            {languageInfo.name}
          </h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          {languageInfo.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Available levels</h2>
            <div className="grid grid-cols-2 gap-4">
              {languageInfo.levels.map((level, index) => (
                <a
                  key={index}
                  href={level.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors ${index % 2 === 1 ? "justify-end text-right" : ""}`}
                >
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-blue-600 mr-2">➡️</span>
                  <div>
                    <h3 className="font-semibold">{level.name}</h3>
                    <p className="text-sm text-gray-600"> Open the digital book</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Program features</h2>
            <div className="space-y-3">
              {languageInfo.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetails;
