// import { ReactComponent as ArrowLeft } from '../assets/chevron-left-solid.svg';
// import { ReactComponent as ArrowRight } from '../assets/chevron-right-solid.svg';
// import { ReactComponent as Circle } from '../assets/circle-solid.svg';
import React, { useEffect, useState } from "react";
import { items } from "../organism/Testimonials.data";

const Carousel: React.FC = () => {
  const [leftCard, setLeftCard] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [rightCard, setRightCard] = useState<number>(0);
  const [arrayLength, setArrayLength] = useState<number>(0);

  useEffect(() => {
    const length = items.length;
    setArrayLength(length);
    const activeItemIndex = items.findIndex(
      (item: { status: string }) => item.status === "active"
    );
    if (activeItemIndex !== -1) {
      setLeftCard(activeItemIndex - 1 < 0 ? length - 1 : activeItemIndex - 1);
      setActiveIndex(activeItemIndex);
      setRightCard(activeItemIndex + 1 >= length ? 0 : activeItemIndex + 1);
    }
  }, []);
  const activatePreviousSlide = () => {
    const newLeftCard = leftCard - 1 < 0 ? arrayLength - 1 : leftCard - 1;
    setRightCard(activeIndex);
    setActiveIndex(leftCard);
    setLeftCard(newLeftCard);
  };

  const activateNextSlide = () => {
    const newRightCard = rightCard + 1 >= arrayLength ? 0 : rightCard + 1;
    setLeftCard(activeIndex);
    setActiveIndex(rightCard);
    setRightCard(newRightCard);
  };

  const trackerArray = Array.from({ length: arrayLength }, (_, index) => (
    <div className="transform scale-75" key={index}></div>
  ));

  return (
    <div className="flex flex-col items-center bg-antiquewhite text-center bg-gray-200">
      <div className="flex w-full">
        <div
          className={`card ${
            leftCard === -1 ? "hidden" : ""
          } mx-2 my-20 bg-ivory p-8 w-1/3 h-48 shadow-lg bg-white`}
        >
          <img
            className="rounded-full h-24 -mt-24 ml-[225px] "
            src={items[leftCard].imgSrc}
            alt="avatar"
          />
          <div className="overflow-hidden">
            <h3 className="mt-2 mb-0.5">{items[leftCard].name}</h3>
            <i className="block">{items[leftCard].position}</i>
            <p className="px-3">{items[leftCard].quote}</p>
          </div>
        </div>
        <div
          className={`card active mx-2 my-20 bg-ivory p-8 w-1/3 h-48 shadow-lg bg-white`}
        >
          <img
            className="rounded-full h-24 -mt-24 ml-[225px]"
            src={items[activeIndex].imgSrc}
            alt="avatar"
          />
          <span>
            <div className="overflow-hidden">
              <h3 className="mt-2 mb-0.5">{items[activeIndex].name}</h3>
              <i className="block">{items[activeIndex].position}</i>
              <p className="px-3">{items[activeIndex].quote}</p>
            </div>
            <div className="flex justify-between -mt-20 relative">
              <button onClick={activatePreviousSlide}>
                ArrowLeft SVG
              </button>
              <button onClick={activateNextSlide}>
                ArrowRight SVG
              </button>
            </div>
          </span>
        </div>
        <div
          className={`card ${
            rightCard === -1 ? "hidden" : ""
          } mx-2 my-20 bg-ivory p-8 w-1/3 h-48 shadow-lg bg-white`}
        >
          <img
            className="rounded-full h-24 -mt-24 ml-[225px]"
            src={items[rightCard].imgSrc}
            alt="avatar"
          />
          <div className="overflow-hidden">
            <h3 className="mt-2 mb-0.5">{items[rightCard].name}</h3>
            <i className="block">{items[rightCard].position}</i>
            <p className="px-3">{items[rightCard].quote}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-10 mt-4">{trackerArray}</div>
    </div>
  );
}


export default Carousel;
