import { createContext, FC } from 'react'
import ApiBreedResponseType from '../typescript/interfaces/ApiBreedResponse'
import useFetch from '../hooks/fetch'

interface Props {
  children: React.ReactNode
}

const BreedContext = createContext({} as { breeds: ApiBreedResponseType[]; stateFetch: string })

export const BreedContextProvider: FC<Props> = ({ children }) => {
  const { data: breeds, stateFetch } = useFetch('https://api.thecatapi.com/v1/breeds')

  return (
    <BreedContext.Provider value={{ breeds: breeds, stateFetch: stateFetch }}>
      {children}
    </BreedContext.Provider>
  )
}

export default BreedContext
