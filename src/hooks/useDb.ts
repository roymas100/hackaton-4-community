import { CommunityContext } from "@/context/communityContext";
import { DbContext } from "@/context/dbContext";
import { useContext } from "react";

export function useDb() {
  const value = useContext(DbContext);
  return value;
}

export function useCommunity() {
  const value = useContext(CommunityContext);
  return value;
}
