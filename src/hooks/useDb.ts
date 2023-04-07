import { DbContext } from "@/context/dbContext"
import { useContext } from "react"

export function useDb() {
    const value = useContext(DbContext)
    return value
  }