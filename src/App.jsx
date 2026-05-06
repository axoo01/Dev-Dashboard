import { useState } from 'react';
import ResourceCard from './components/ResourceCard';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All',
    'Documentation',
    'Learning',
    'Build Tool',
    'Styling',
    'Tool',
  ];

  const resources = [
    {
      name: 'React Docs',
      category: 'Documentation',
      link: 'https://react.dev',
    },
    {
      name: 'MDN Web Docs',
      category: 'Learning',
      link: 'https://developer.mozilla.org',
    },
    {
      name: 'Vite',
      category: 'Build Tool',
      link: 'https://vite.dev',
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      link: 'https://tailwindcss.com',
    },
    {
      name: 'FreeCodeCamp',
      category: 'Learning',
      link: 'https://www.freecodecamp.org',
    },
    {
      name: 'GitHub',
      category: 'Tool',
      link: 'https://github.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-black to-gray-600 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-center mb-18">
          <h1 className="text-3xl font-bold">Dev Dashboard</h1>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64 p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/10 transition"
          />
        </div>

        <div className="flex gap-3 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-sm border transition ${
                selectedCategory === cat
                  ? 'bg-purple-400/50 text-white border-purple-400 transition duration-500'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources
            .filter((res) => {
              const matchesSearch = res.name
                .toLowerCase()
                .includes(search.toLowerCase());

              const matchesCategory =
                selectedCategory === 'All' || res.category === selectedCategory;

              return matchesSearch && matchesCategory;
            })
            .map((res, index) => (
              <ResourceCard
                key={index}
                name={res.name}
                category={res.category}
                link={res.link}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
