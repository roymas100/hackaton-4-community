import { communities } from "@/mockData/communities";
import { createContext, ReactNode, useState } from "react";

export interface ICommunityCard  {
  title : string
  description : string
  imgUrl : string
  type: string
  color : string
}

type DbContextType = {
  communitiesList : ICommunityCard[]

};

type DbContextProviderProps = {
  children: ReactNode;
};





export const DbContext = createContext({} as DbContextType);

export function DbContextProvider(props: DbContextProviderProps) {

    const [ communitiesList, setCommunitiesList] = useState<ICommunityCard[]>(communities)
    return (
        <DbContext.Provider
          value={{
            communitiesList
          }}
        >
          {props.children}
        </DbContext.Provider>
      );

 
}