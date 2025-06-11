import { useContext } from "react";
import { PostContext } from "./PostContext";
export function usePosts() {
  const context = useContext(PostContext);
  return context;
}
