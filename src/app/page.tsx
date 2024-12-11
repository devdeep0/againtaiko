"use client"
import { useState } from 'react';
import GameSelectionUI from '../components/AuthPage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameSelect = (game: string) => {
    setIsLoading(true);
    setSelectedGame(game);
    // Add your game loading/routing logic here
    setIsLoading(false);
  };

  return (
    <GameSelectionUI
      isLoading={isLoading}
      selectedGame={selectedGame}
      onGameSelect={handleGameSelect}
    />
  );
}