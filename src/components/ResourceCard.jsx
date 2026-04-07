function ResourceCard({ name, category, link }) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-purple-500/40 transition duration-700 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">
          {name}
        </h2>

        <p className="text-sm text-gray-400 mb-3">
          {category}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        
        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md">
          {category}
        </span>

       <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 border-b-2 border-transparent hover:border-blue-400 transition-colors duration-700 inline-block"
        >
        Visit →
        </a>

      </div>
    </div>
  );
}

export default ResourceCard;