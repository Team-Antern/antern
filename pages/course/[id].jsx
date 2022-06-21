import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import CourseBanner from "../../components/Course Page/CourseBanner";
import CourseCurriculum from "../../components/Course Page/CourseCurriculum";
import CourseFeatures from "../../components/Course Page/CourseFeatures";
import CourseSummaryAndEnroll from "../../components/Course Page/CourseSummaryAndEnroll";
import CourseUniqueThing from "../../components/Course Page/CourseUniqueThing";
import CurriculumDifference from "../../components/Course Page/CurriculumDifference";

const CoursePage = () => {
    const { query } = useRouter();
    const { id } = query;
    const [courseDetails, setCourseDetails] = useState();
    useEffect(() => {
        const fetchCourseDetails = async () => {
            const response = await fetch(`https://api.npoint.io/${id}`);
            const json = await response.json();
            setCourseDetails(json);
        };
        id && fetchCourseDetails();
    }, [id, setCourseDetails]);
    return (
        <>
            <Head>
                <title>
                    {courseDetails
                        ? `Antern - ${courseDetails.heading}`
                        : "Antern"}
                </title>
                <meta
                    name="description"
                    content="We can’t find the page that you’re looking for!"
                />
                <meta
                    property="og:title"
                    content={
                        courseDetails
                            ? `Antern - ${courseDetails.heading}`
                            : "Antern"
                    }
                />
                <meta
                    property="og:description"
                    content="We can’t find the page that you’re looking for!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/ogimage/home.png" />
            </Head>
            {courseDetails ? (
                <>
                    <CourseBanner
                        heading={courseDetails.heading}
                        enrollLink={courseDetails.enrollLink}
                        trailerLink={courseDetails.trailerLink}
                        bannerImage={courseDetails.bannerImage}
                    />
                    <CourseFeatures />
                    <CourseUniqueThing
                        uniqueFeatureHeading={
                            courseDetails.uniqueFeature.uniqueFeatureHeading
                        }
                        uniqueFeatureImage={
                            courseDetails.uniqueFeature.uniqueFeatureImage
                        }
                    />
                    <CurriculumDifference />
                    <CourseCurriculum curriculum={courseDetails.curriculum} />
                    <CourseSummaryAndEnroll
                        courseSummaryAndEnroll={
                            courseDetails.courseSummaryAndEnroll
                        }
                        enrollLink={courseDetails.enrollLink}
                    />
                </>
            ) : null}
        </>
    );
};

export default CoursePage;
