'use-client'
import { useEffect, useState, useRef } from 'react';

export function useHeadsObserver( ) {

  const [activeId, setActiveId] = useState('')
  
  const handleObsever = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        setActiveId(entry.target.id)
      }
    })
  }

  const observer = useRef(new IntersectionObserver(handleObsever, {
    rootMargin: "-20% 0% -35% 0px"}
  ))

  useEffect(() => {
    const elements = document.querySelectorAll("h2, h3")
    elements.forEach((elem) => observer.current.observe(elem))
    return () => observer.current?.disconnect()
  }, [])

  return {activeId}
}