import React from 'react';
import './Courses.css';
import ai from '../../../assets/img/ai.png';
import sd from '../../../assets/img/sd.png';
import dg from '../../../assets/img/dg.png';
import hacker from '../../../assets/img/hacking.png';

export default function Courses (){

    const couseData = [
      {
        title: "AI Development",
        desc: "Master AI Development",
        img: ai,
      },
      {
        title: "Software Development",
        desc: "Master Software Development",
        img: sd,
      },
      {
        title: "Digital Marketing",
        desc: "Master Digital Marketing",
        img: dg,
      },
      {
        title: "Cyber Security",
        desc: "Master Cyber Security",
        img: hacker,
      },
    ];

    return (
      <div className="container course-container">
        <div className="course-top"></div>
        <h2 className="section_title">Our Free Courses</h2>
        <p>The Top Trending Free Courses With Free Certificates</p>
        <div className="course-wrapper">
          {couseData.map((courses, index) => (
            <div className="course-item" key={index}>
              <span className="course-icon">
                <img src={courses.img} alt="" />
              </span>
              <div className="course-content">
                <h4>{courses.title}</h4>
                <p>{courses.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

}