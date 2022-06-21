import { useState, useEffect } from "react";
import CourseCard from "../Global/CourseCard";

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);
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
            <div className="heading">
                Popular <span>Courses</span> By Antern
            </div>
            <div className="content">
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
            <style jsx>{`
                .container {
                    background: #f7f7ff;
                    padding: 82px 40px 42px 40px;
                }

                .heading {
                    font-family: Plus Jakarta Display;
                    font-size: 24px;
                    font-weight: 500;
                    letter-spacing: -0.02em;
                    color: #5a5a5a;
                    text-align: center;
                    margin-bottom: 50px;
                }

                .heading span {
                    color: #7933ff;
                }

                .content {
                    max-width: 1070px;
                    margin: auto;
                    display: flex;
                    justify-content: center;
                    gap: 50px 30px;
                    flex-wrap: wrap;
                }
            `}</style>
        </div>
    );
};

export default PopularCourses;
