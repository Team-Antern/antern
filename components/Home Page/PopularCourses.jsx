import React, { useEffect, useState } from "react";
import CourseCard from "../Global/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);
    const [swiper, setSwiper] = useState({});
    const [slideNumber, setSlideNumber] = useState(0);
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch(
                "https://api.npoint.io/0beca2a87bb3e09e5fee"
            );
            const data = await response.json();
            setCourses(data);
        };
        fetchCourses();
    }, []);
    return (
        <div className="container">
            <div className="heading">Popular Courses By Antern</div>
            <div className="content">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => {
                        setSlideNumber(swiper.activeIndex);
                    }}
                >
                    {courses.map((course, index) => (
                        <SwiperSlide
                            key={index}
                            style={{ display: "inline-block" }}
                        >
                            {({ isActive }) => (
                                <CourseCard course={course} active={isActive} />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="pagination">
                    <div
                        className="backward"
                        onClick={() => swiper.slideTo(slideNumber - 1)}
                    >
                        <AiOutlineArrowLeft />
                    </div>
                    <div className="progress" />
                    <div
                        className="backward"
                        onClick={() => swiper.slideTo(slideNumber + 1)}
                    >
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    background: #f4f4f4;
                    padding: 96px 40px;
                    overflow: hidden;
                }

                .heading {
                    margin-bottom: 45px;
                    font-family: "Plus Jakarta Display";
                    text-align: center;
                    font-weight: 500;
                    font-size: 32px;
                    line-height: 67.5%;
                    letter-spacing: -0.02em;
                    color: #494949;
                }

                .content {
                    max-width: 1200px;
                    overflow: hidden;
                    padding: 10px;
                    margin: auto;
                }

                .pagination {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 76px;
                    font-size: 24px;
                }

                .backward,
                .forward {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .progress {
                    max-width: 257px;
                    flex: 1;
                    height: 7px;
                    background: #c4c4c4;
                    border-radius: 6px;
                    position: relative;
                }

                .progress:after {
                    content: "";
                    width: ${(slideNumber / courses.length) * 100}%;
                    position: absolute;
                    height: 100%;
                    background: #293932;
                    border-radius: 6px;
                    transition: 0.2s width;
                }

                @media screen and (max-width: 700px) {
                    .container {
                        padding: 96px 20px;
                    }
                }

                @media screen and (max-width: 500px) {
                    .heading {
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 25px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PopularCourses;
