/**
 * @author Jiang.Guoyuan
 * @create date 2021-05-22 16:34:33
 * @modify date 2021-05-22 17:02:29
 * @desc 一个简单的可进行循环异形轮播的组件
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BaseProps } from "../utils/code";
import "./Carousel.css";

interface CarouselProps extends BaseProps {
  slides?: number;
}

const keys = ["item 1", "item 2", "item 3", "item 4", "item 5"];

const defaultKey = 0;

const Carousel: React.FC<CarouselProps> = (props) => {
  const { visible, slides = 5 } = props;

  const cRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const [copyData, setCopyData] = useState<string[]>([]);
  const [currKey, setCurrKey] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [wrapperX, setWrapperX] = useState(0);
  const [isCancelTransition, setIsCancelTransition] = useState(false);

  let timer: number;
  const mid = Math.floor(keys.length / 2);

  useEffect(() => {
    if (keys.length >= slides) {
      const data = [...keys.slice(defaultKey + 1, slides), ...keys] as string[];
      setCopyData(data);
      setCurrKey(Math.floor(data.length / 2));
    }
    if (cRef.current) {
      setItemWidth(cRef.current.clientWidth / slides);
    }
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    setWrapperX(itemWidth * (mid - currKey));
  }, [itemWidth, currKey]);

  const onNext = () => {
    if (currKey >= mid + Math.floor(copyData.length / 2)) {
      setCurrKey(currKey + 1);
      timer = window.setTimeout(() => {
        if (cRef.current && itemRef.current) {
          itemRef.current.style.transition = "none";
          itemRef.current.style.transform = "scale(1)";
          cRef.current.style.transition = "none";
          setCurrKey(mid);
          setIsCancelTransition(true);
        }
      }, 300);
    } else {
      if (cRef.current && itemRef.current) {
        itemRef.current.style.transition = "";
        itemRef.current.style.transform = "scale(0.8)";
        cRef.current.style.transition = "";
      }
      setCurrKey(currKey + 1);
      setIsCancelTransition(false);
    }
  };

  const onPrev = () => {
    setCurrKey(currKey - 1);
  };

  return (
    <div className="container" style={{ display: visible ? "flex" : "none" }}>
      <div
        className="carousel"
        ref={cRef}
        style={{ transform: `translate3d(${wrapperX}px, 0 , 0)` }}
      >
        {useMemo(() =>
          copyData.map((c, idx) => (
            <div
              ref={itemRef}
              className={`item ${idx === currKey ? "active" : ""}`}
              style={{
                width: itemWidth,
                transition: isCancelTransition ? "none" : "all 300ms ease",
              }}
            >
              {c}
            </div>
          )), [copyData, currKey, itemWidth, isCancelTransition]
        )}
      </div>
      <div className="operation">
        <div className="prev" onClick={onPrev}>
          上一张
        </div>
        <div className="next" onClick={onNext}>
          下一张
        </div>
      </div>
    </div>
  );
};

export default Carousel;
