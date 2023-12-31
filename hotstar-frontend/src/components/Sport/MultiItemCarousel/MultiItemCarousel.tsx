import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICarousel } from "./types";
import prev from "../../../assets/image/download.png";
import next from "../../../assets/image/download (1).png";
import { ISport, ISportEvent, ITournament } from "../../../types/sportsTypes";
import React from "react";
const itemsPerSlide = 6;
const MultiItemCarousel: React.FC<ICarousel> = ({
  item,
  component: Component,
  tag,
}) => {
  const [activeIndex, setActiveIndex] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [show, setShow] = useState(false);
  const totalSlides = Math.ceil(item.length / itemsPerSlide);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    setActiveIndex(false);
  };
  const isSport = (
    item: ISport | ISportEvent | ITournament
  ): item is ISport => {
    return (item as ISport).sportPoster !== undefined;
  };
  function isTournament(
    item: ISport | ISportEvent | ITournament
  ): item is ITournament {
    return (item as ITournament).tournamentPoster !== undefined;
  }
  function isSportEvent(
    item: ISport | ISportEvent | ITournament
  ): item is ISportEvent {
    return (item as ISportEvent).eventPoster !== undefined;
  }
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    setActiveIndex(true);
  };
  const navigate = useNavigate();
  const handlePath = (path: string, state?: ISport[] | ISportEvent[] | ITournament[] | string | ISportEvent) => {
     navigate(path , {state : state})
  }
  return (
    <>
      <div
        className="relative  w-6/6 mt-0 "
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div>
          <div className="inline-block text-white text-2xl ml-6 mb-0">
            {tag}
          </div>
          {show && (
            <div
              className="text-white float-right inline-block z-[1]"
              onClick={() => handlePath(`view/${tag}`, item)}
            >
              view all
            </div>
          )}
        </div>
        {show ? (
          !activeIndex ? (
            <button
              onClick={prevSlide}
              className="h-full shadow-[inset_rgba(0.4,0.4,0,0.5)_20px_0px_10px_0px] z-[1] absolute left-0 top-0 mr-4 w-8"
            >
              <img src={next} alt="prev" />
            </button>
          ) : (
            <button
              className="h-full shadow-[inset_rgba(0.4,0.4,0,0.5)_-20px_0px_10px_0px] absolute top-0 right-0 z-[1] w-8"
              onClick={nextSlide}
            >
              <img src={prev} alt="next" />
            </button>
          )
        ) : (
          ""
        )}
        <div className="relative h-full  p-5 pt-0 w-full ">
          <div
            className="w-full h-full flex transition-transform  duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            }}
          >
            {item.map((itemData) => (
              <div
                key={Math.random()}
                onClick={() =>
                  (typeof itemData === "object" &&
                  isSportEvent(itemData) &&
                  handlePath(
                    `${itemData.sport.sport}/${itemData.tournament.tournament}/watch/${itemData._id}`,
                    itemData
                  ))
                  || (typeof itemData ==='object' && isSport(itemData) && handlePath(`${itemData.sport}`,item))
                }
              >
                {typeof itemData === "object" && isSport(itemData) && (
                  <Component image={itemData.sportPoster} />
                )}
                {typeof itemData === "object" && isSportEvent(itemData) && (
                  <Component
                    image={itemData.eventPoster}
                    title={itemData.event}
                    description={itemData.description}
                    duration="20m"
                  />
                )}
                {typeof itemData === "object" && isTournament(itemData) && (
                  <Component image={itemData.tournamentPoster} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MultiItemCarousel;
