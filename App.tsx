import React, { useState, useCallback } from 'react';
import { GamePhase, type Option } from './types';
import { GAME_CONTENT } from './constants';
import Card from './components/Card';
import ChoiceButton from './components/ChoiceButton';

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 sm:h-24 sm:w-24 text-[#8C5A3A] animate-spin [animation-duration:10s]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l3.5 3.5M12 12L8.5 8.5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l-3.5 3.5M12 12l3.5-3.5" />
  </svg>
);


const App: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState<GamePhase>(GamePhase.Intro);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const handleStart = () => {
    setCurrentPhase(GamePhase.Phase1);
  };
  
  const resetPhaseState = useCallback(() => {
    setFeedback(null);
    setSelectedOption(null);
    setIsAnswered(false);
  }, []);

  const handleOptionClick = (option: Option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option.isCorrect) {
      setFeedback("Excellent ! Vous avez choisi judicieusement.");
      setTimeout(() => {
        setCurrentPhase(prev => prev + 1);
        resetPhaseState();
      }, 2500);
    } else {
      const currentContent = GAME_CONTENT[currentPhase];
      if(currentContent){
        setFeedback(currentContent.incorrectFeedback);
        setTimeout(() => {
          setSelectedOption(null);
          setIsAnswered(false);
          setFeedback(null);
        }, 2500);
      }
    }
  };
  
  const restartGame = () => {
    setCurrentPhase(GamePhase.Intro);
    resetPhaseState();
  };


  const renderContent = () => {
    switch (currentPhase) {
      case GamePhase.Intro:
        return (
          <Card className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-display text-[#4A2E2C] mb-4">Cap vers le Nouveau Monde</h1>
            <img src="https://picsum.photos/seed/columbus/600/300" alt="Caravelle en mer" className="rounded-lg shadow-md my-6 mx-auto"/>
            <p className="text-blue-600">No olvides hacer clic en el botón verde.</p>
            <button
              onClick={handleStart}
              className="bg-green-800 text-white font-bold py-3 px-8 rounded-lg text-xl font-display hover:bg-green-900 transition-transform transform hover:scale-105 shadow-lg my-8"
            >
              ¡Comenzar la Aventura!
            </button>
            <p className="text-lg sm:text-xl mb-2">Bonjour, jeune explorateur ! Je suis votre Guide à travers le temps et ensemble nous allons revivre l'une des plus grandes aventures de l'histoire.</p>
            <p className="text-lg sm:text-xl">Êtes-vous prêt à lever l'ancre avec Christophe Colomb pour son voyage vers l'inconnu ?</p>
          </Card>
        );
      case GamePhase.End:
        return (
          <Card className="text-center animate-fade-in">
             <h1 className="text-4xl sm:text-5xl font-display text-[#4A2E2C] mb-4">Mission Accomplie, Grand Navigateur !</h1>
             <img src="https://picsum.photos/seed/newworld/600/300" alt="Terre en vue" className="rounded-lg shadow-md my-6 mx-auto"/>
             <p className="text-xl sm:text-2xl text-green-700 font-bold mb-4">FÉLICITATIONS !</p>
             <p className="text-lg sm:text-xl mb-4">Vous avez terminé avec succès le voyage de Christophe Colomb, surmontant tous les défis. Vous vous êtes révélé être un stratège astucieux et un leader courageux.</p>
             <p className="text-lg sm:text-xl mb-8">L'histoire se souviendra de vos exploits. Vous avez atteint le Nouveau Monde !</p>
             <button
              onClick={restartGame}
              className="bg-green-800 text-white font-bold py-3 px-8 rounded-lg text-xl font-display hover:bg-green-900 transition-transform transform hover:scale-105 shadow-lg"
            >
              Rejouer
            </button>
          </Card>
        );
      default:
        const content = GAME_CONTENT[currentPhase];
        if (!content) return <div>Chargement...</div>;
        return (
          <Card className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-display text-center mb-4">{content.title}</h2>
            <p className="text-base sm:text-lg mb-6 leading-relaxed whitespace-pre-wrap">{content.narrative}</p>
            <div className="w-full h-px bg-[#8C5A3A] opacity-30 my-6"></div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">{content.question}</h3>
            <div>
              {content.options.map((opt) => (
                <ChoiceButton
                  key={opt.letter}
                  option={opt}
                  onClick={() => handleOptionClick(opt)}
                  isSelected={selectedOption?.letter === opt.letter}
                  isAnswered={isAnswered}
                />
              ))}
            </div>
            {feedback && (
              <div className={`mt-4 p-3 rounded-lg text-center font-bold text-white transition-opacity duration-300 ${isAnswered && selectedOption?.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                {feedback}
              </div>
            )}
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed p-4 sm:p-8 flex items-center justify-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/old-wall.png')"}}>
      <main className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;