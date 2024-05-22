import { createContext } from "react";
import { pics } from "./pics";

export const SlideContext = createContext(pics[3].name)