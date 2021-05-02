import React, { useEffect, useRef } from 'react'

interface ICountupProps {
  start?: number;
  end: number;
  duration?: number;
}

const Countup: React.FC<ICountupProps> = (props) => {
  const { start = 0, end, duration = 2 } = props
  const countRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef<number>()  // 开始翻牌的时间
  const frameValRef = useRef<number>() // 每一帧的值
  const rafRef = useRef<any>();

  useEffect(() => {
    onStart()
  }, [])

  const onStart = () => {
    const curTime = Date.now()
    if (!startTimeRef.current) startTimeRef.current = curTime
    frameValRef.current = Math.round(start + (end - start) * (curTime - startTimeRef.current) / (duration * 1000))
    if (frameValRef.current < end) {
      rafRef.current = requestAnimationFrame(onStart)
    } else {
      frameValRef.current = end
      cancelAnimationFrame(rafRef.current)
    }
    if (countRef.current) {
      countRef.current.innerHTML =  frameValRef.current.toString()
    }
  }

  return <>
  <div ref={countRef} />
  </>
}

export default Countup