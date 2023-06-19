"use client";
import React from "react";
import { Episode } from "@/app/models/Episode";

interface ContextType {
  currentEpisode?: Episode;
  onSelectEpisode: (episode: Episode) => void;
}

const defaultContext = {
  currentEpisode: undefined,
  onSelectEpisode: (_: Episode) => {},
};

export const GlobalContext = React.createContext<ContextType>(defaultContext);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [currentEpisode, setCurrentEpisode] = React.useState<
    Episode | undefined
  >();

  return (
    <GlobalContext.Provider
      value={{
        currentEpisode,
        onSelectEpisode: setCurrentEpisode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
