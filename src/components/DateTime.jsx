import React, { useState, useEffect } from 'react'

function DateTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      
      const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
      const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
      
      const day = dayNames[now.getDay()]
      const month = monthNames[now.getMonth()]
      const date = now.getDate()
      
      let hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const ampm = hours >= 12 ? 'pm' : 'am'
      
      hours = hours % 12
      hours = hours ? hours : 12
      
      const formatted = `${day} ${month} ${date} ${hours}:${minutes}${ampm}`
      setTime(formatted)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>{time}</div>
  )
}

export default DateTime