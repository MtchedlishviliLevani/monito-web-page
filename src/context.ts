// src/context/globalContext.ts
import { createContext } from "react";

// Define an interface for your context's value
export interface DataObj {
  additional_information: string;
  age: string;
  breed: string;
  certification: boolean;
  color: string;
  dewormed: boolean;
  gender: string;
  id: string;
  imgSrc: string;
  location: string;
  microchip: string;
  name: null;
  price: string;
  published_date: string;
  size: string;
  vaccinated: boolean;
}

export interface Data {
  pets: DataObj[];
}

export interface User {
  name: string;
  email: string;
  password: string;
}

interface GlobalContextType {
  language: string;
  setLanguage: (lang: string) => void;
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: Data;
  setData: React.Dispatch<React.SetStateAction<never[]>>;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  user: null | User;
  setUser: React.Dispatch<React.SetStateAction<null | User>>;
  isOpenChat: boolean;
  setIsOpenChat: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with default empty values (which will be overridden by the provider)
export const globalContext = createContext<GlobalContextType>({
  language: "en", // default value
  setLanguage: () => {}, // empty function as a placeholder
  isBurgerMenuOpen: false,
  setIsBurgerMenuOpen: () => {},
  data: { pets: [] },
  setData: () => {},
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  user: null,
  setUser: () => {},
  isOpenChat: false,
  setIsOpenChat: () => {},
});
