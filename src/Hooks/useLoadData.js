
import { useState, useEffect, useCallback } from 'react'


export default function useLoadData({ url, options = {} }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)  


  const getData = useCallback(async () => {
    await fetch(url)
    .then(r => r.json())
    .then(json => {
      if (options?.limit) {
        setData(json.slice(0, options.limit))
        setLoading(false)
        return 
      } 

      setData(json)
      setLoading(false)

    })        
  },[url, options.limit])

  useEffect(() => {
    getData()
    return () => {
      setData([])
      setLoading(true)      
    }
  }, [url, getData])

  return { data, loading }
}