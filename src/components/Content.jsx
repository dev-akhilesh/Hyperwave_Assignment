import React from 'react';
import CourseArticle from './CourseArticle';

const coursecard = [
    {
        subTitle: "Fundamentals of Product Design",
        chapters: 8,
        hours: 2,
        background: "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)",
    },
    {
        subTitle: "Fundamentals of Product Design",
        chapters: 8,
        hours: 2,
        background: "linear-gradient(297deg, #8EC5FC 8.25%, #E0C3FC 91.76%)",
    },
    {
        subTitle: "Fundamentals of Product Design",
        chapters: 8,
        hours: 2,
        background:
            "linear-gradient(270deg, #FF9A8B 0%, #FF6A88 54.59%, #FF99AC 100%)",
    },
    {
        subTitle: "Fundamentals of Product Design",
        chapters: 8,
        hours: 2,
        background: "linear-gradient(297deg, #FBAB7E 8.25%, #F7CE68 91.76%)",
    },

];
const articlecard = [
    {
        subTitle: "Fundamentals of Product Design",
        chapters: 8,
        hours: 2,
        background:
            "linear-gradient(270deg, #FF9A8B 0%, #FF6A88 54.59%, #FF99AC 100%)",
    },
    {
        subTitle: "Fundamentals of Product Design",
        chapters: 8,
        hours: 2,
        background: "linear-gradient(297deg, #FBAB7E 8.25%, #F7CE68 91.76%)",
    },
    {
        subTitle: "Fundamentals of Product Design",
        chapters: 8,
        hours: 2,
        background: "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)",
    },
    {
        subTitle: "Fundamentals of Product Design",
        chapters: 8,
        hours: 2,
        background: "linear-gradient(297deg, #8EC5FC 8.25%, #E0C3FC 91.76%)",
    },

];

const Content = () => {
    return (
        <>
            <CourseArticle
                card={coursecard}
                title={"Courses for you"}
                subtitle={"Listen to byte-sized audio courses from top thinkers"}
                mt={"0px"}
            />
            <CourseArticle
                card={articlecard}
                title={"Article Reads"}
                subtitle={"Listen to audio versions of top web articles"}
                mt={"-90px"}
            />


        </>
    )
}

export default Content