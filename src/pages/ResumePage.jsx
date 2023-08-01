import React from 'react'
export default function ResumePage() {
  return (
    <div className="w-screen h-[650px] px-[20px] py-[50px] bg-[#3F2E56] text-white">
      <div className="font-lora">
        <div className="pb-5">
          <h1 className="text-xl font-bold underline">Skills</h1>
          <ul>
            <li>{"\u2022"} JavaScript</li>
            <li>{"\u2022"} HTML</li>
            <li>{"\u2022"} CSS</li>
            <li>{"\u2022"} SQL</li>
            <li>{"\u2022"} Mongo</li>
            <li>{"\u2022"} NodeJS</li>
            <li>{"\u2022"} React</li>
          </ul>
        </div>
        <div className="pb-5">
          <h1 className="text-xl font-bold underline">Education</h1>
          <ul>
            <li>High School: Montgomery Bell Academy 2015-2018</li>
            <li>College: University of California, Los Angeles 2018-2023</li>
          </ul>
        </div>
        <div className="pb-5">
          <h1 className="text-xl font-bold underline">Work Experience</h1>
          <ul>
            <li>Bookstore</li>
          </ul>
        </div>
        <div className="pb-5">
          <h1 className="text-xl font-bold underline">Extracurriculars</h1>
          <ul>
            <li>Piano</li>
            <li>Member of the Taiko Club at UCLA</li>
            <li></li>
          </ul>
        </div>
        <div className="pb-5">
          <h1 className="text-xl font-bold underline">Languages</h1>
          <ul>
            <li>English</li>
            <li>Mandarin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}