import React, { useState, useContext, createContext } from "react";

type FILTERS = "Грузовой" | "Пассажирский" | "Спецтранспорт" | "ALL";
// Context type
interface FilterContextType {
  filter: FILTERS;
  selectFilter: (title: FILTERS) => void;
}

const CreateContext = createContext<FilterContextType | undefined>(undefined);

export const UseContext = () => {
  const context = useContext(CreateContext);
  if (!context) {
    throw new Error("useTil must be used within a ProviderHook");
  }
  return context;
};

export const ProviderHook: React.FC = ({ children }: any) => {
  const [filter, setFilter] = useState<FILTERS>("ALL");

  const selectFilter = (titel: FILTERS) => {
    setFilter(titel);
  };

  return (
    <CreateContext.Provider value={{ filter, selectFilter }}>
      {children}
    </CreateContext.Provider>
  );
};
