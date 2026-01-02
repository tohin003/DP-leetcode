
import React from 'react';
import { categories } from './data/questions';
import QuestionCard from './components/QuestionCard';
import { Sparkles, Code2, Github, LayoutGrid, Network, Share2 } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = React.useState('dp');
  const [completed, setCompleted] = React.useState(() => {
    const saved = localStorage.getItem('dp-tracker-completed');
    return saved ? JSON.parse(saved) : {};
  });

  React.useEffect(() => {
    localStorage.setItem('dp-tracker-completed', JSON.stringify(completed));
  }, [completed]);

  const toggleCompletion = (id) => {
    setCompleted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentCategory = categories[activeCategory];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Master Algorithms</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-slate-100">Level Up Your </span>
            <span className="text-gradient">Coding Skills</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            A curated collection of high-signal problems to help you crack technical interviews.
          </p>

          {/* Category Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900/50 border border-glass-border backdrop-blur-sm">
            <button
              onClick={() => setActiveCategory('dp')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === 'dp'
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
            >
              <LayoutGrid className="w-4 h-4" />
              Dynamic Programming
            </button>
            <button
              onClick={() => setActiveCategory('trees')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === 'trees'
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
            >
              <Network className="w-4 h-4" />
              Trees & Graphs
            </button>
            <button
              onClick={() => setActiveCategory('graphs')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === 'graphs'
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
            >
              <Share2 className="w-4 h-4" />
              Graphs & Advanced
            </button>
          </div>
        </div>

        {/* Category Info */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-200 mb-2">{currentCategory.title}</h2>
          <p className="text-slate-400">{currentCategory.description}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.questions.map((q, index) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={index}
              isCompleted={!!completed[q.id]}
              toggleCompletion={toggleCompletion}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-slate-500 text-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-5 h-5" />
            <span>Built for developers, by developers</span>
          </div>
          <p>© {new Date().getFullYear()} DP Tracker. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
