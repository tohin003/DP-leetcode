
import React from 'react';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import { Sparkles, Code2, Github } from 'lucide-react';

function App() {
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

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Master Dynamic Programming</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-slate-100">Level Up Your </span>
            <span className="text-gradient">Algorithm Skills</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of high-signal Dynamic Programming problems to help you crack technical interviews.
            Master patterns from <span className="text-indigo-400 font-mono">O(N)</span> to <span className="text-purple-400 font-mono">O(N³)</span>.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q, index) => (
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
