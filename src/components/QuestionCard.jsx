import React from 'react';
import { ExternalLink, Clock, Brain, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DifficultyBadge = ({ difficulty }) => {
    const colors = {
        Hard: 'bg-red-500/20 text-red-300 border-red-500/30',
        Med: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
        Easy: 'bg-green-500/20 text-green-300 border-green-500/30',
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[difficulty] || colors.Med}`}>
            {difficulty}
        </span>
    );
};

const QuestionCard = ({ question, index }) => {
    return (
        <motion.a
            href={question.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="glass-card glass-card-hover rounded-xl p-5 group relative overflow-hidden block"
        >
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-indigo-400" />
            </div>

            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold text-sm border border-indigo-500/30">
                        {question.id}
                    </span>
                    <DifficultyBadge difficulty={question.difficulty} />
                </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">
                {question.problem}
            </h3>

            <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="font-mono text-xs">{question.timeComplexity}</span>
                </div>

                <div className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                    <p className="leading-tight">{question.concept}</p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.a>
    );
};

export default QuestionCard;
