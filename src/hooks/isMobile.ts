import { useState, useEffect } from 'react'

const useIsMobile = () => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const media = window.screen.width
    if (media < 1024) {
      setMatch(true)
    }
  }, [match])

  return match
}

export default useIsMobile
