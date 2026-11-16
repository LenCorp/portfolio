import { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(time)

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(time)

  return (
    <div className="text-sm text-slate-300">
      <p className="font-mono text-lg text-white">
        {formattedTime}
      </p>

      <p className="text-xs">
        {formattedDate} · WIB
      </p>
    </div>
  )
}

export default Clock