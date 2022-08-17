import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [stateFetch, setStateFetch] = useState('loading')
  const [data, setData] = useState<any>([])

  useEffect(() => {
    fetch(url, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setStateFetch('success')
      })
      .catch((err) => {
        setStateFetch('error')
      })
  }, [])

  return { data, stateFetch }
}

export default useFetch
