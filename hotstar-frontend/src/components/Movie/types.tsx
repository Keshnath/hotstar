import { CardState } from "../../Redux/Slices/types";

export interface RootState {
  isCard: CardState; // Assuming "isCard" is your slice name
  // Add other slice states here if you have more slices
}
export interface MediumCardProps {
  movieData: Record<string, any>;
}
export interface Item {
  item: any;
}
