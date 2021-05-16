import React, { useEffect, useRef, useState } from "react";
import { BaseProps } from "../utils/code";
import "./Carousel.css";

interface CarouselProps extends BaseProps {
  slides?: number;
}

const keys = ["item 1", "item 2", "item 3", "item 4", "item 5"];

const defaultKey = 0

const Carousel: React.FC<CarouselProps> = (props) => {
  const { visible, slides = 5 } = props;
  const cRef = useRef<HTMLDivElement>(null);
  const [copyData, setCopyData] = useState<string[]>([]);
  const [currKey, setCurrKey] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [wrapperX, setWrapperX] = useState(0)
  const mid = Math.floor(keys.length / 2)

  useEffect(() => {
    if (keys.length >= slides) {
      const data = [...keys.slice(defaultKey + 1, slides), ...keys] as string[];
      setCopyData(data);
      setCurrKey(Math.floor(data.length / 2));
    }
    if (cRef.current) {
      setItemWidth(cRef.current.clientWidth / slides);
    }
  }, []);

  useEffect(() => {
    setWrapperX(itemWidth * (mid - currKey))
  }, [itemWidth, currKey])

  const onNext = () => {
    if (currKey >= (mid + Math.floor(copyData.length / 2))) {
      
      setCurrKey(currKey + 1)
      setCurrKey(mid)
    } else {
      setCurrKey(currKey + 1)
    }
    // setCurrKey(currKey + 1)
  }

  const onPrev = () => {
    setCurrKey(currKey - 1)
  }

  return (
    <div className="container" style={{ display: visible ? "flex" : "none" }}>
      <div
        className="carousel"
        ref={cRef}
        style={{ transform: `translate3d(${wrapperX}px, 0 , 0)` }}
      >
        {copyData.map((c, idx) => (
          <div
            className={`item ${idx === currKey ? "active" : ''}`}
            style={{ width: itemWidth }}
          >
            {c}
          </div>
        ))}
      </div>
      <div className="operation">
        <div className="prev" onClick={onPrev}>上一张</div>
        <div className="next" onClick={onNext}>下一张</div>
      </div>
    </div>
  );
};

export default Carousel;
