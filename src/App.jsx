import React from 'react';
import { categories } from './data/questions';
import QuestionCard from './components/QuestionCard';
import {
  Sparkles, Code2, Github, LayoutGrid, Network, Share2,
  AppWindow, Layers, Zap
} from 'lucide-react';

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

  const CategoryButton = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveCategory(id)}
      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 w-full justify-center ${activeCategory === id
          ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
        }`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );

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
            A curated collection of 90 high-signal problems to help you crack technical interviews.
          </p>

          {/* Category Switcher - Responsive Grid */}
          <div className="bg-slate-900/50 p-1 rounded-xl border border-glass-border backdrop-blur-sm mx-auto max-w-5xl overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
              <CategoryButton id="dp" icon={LayoutGrid} label="Dynamic Prog" />
              <CategoryButton id="trees" icon={Network} label="Trees & Graphs" />
              <CategoryButton id="graphs" icon={Share2} label="Adv. Graphs" />
              <CategoryButton id="arrays" icon={AppWindow} label="Arrays & Str" />
              <CategoryButton id="stack" icon={Layers} label="Rec & Stack" />
              <CategoryButton id="greedy" icon={Zap} label="Greedy" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">{currentCategory.title}</h2>
            <p className="text-slate-400">{currentCategory.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.questions.map((q) => (
              <QuestionCard
                key={q.id}
                {...q}
                isCompleted={!!completed[q.id]}
                onToggle={() => toggleCompletion(q.id)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm">
          <p className="flex items-center justify-center gap-2">
            Built with <Code2 className="w-4 h-4" /> for the community
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
