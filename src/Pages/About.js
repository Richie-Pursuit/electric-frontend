import React from 'react';

const About = () => {
    return (
        <div className='flex justify-center'>
        <img className=' pr-10 sm:w-96 max-w-sm'  src='https://theiowa.org/wp-content/uploads/2022/04/onewheel-gt-trails.jpeg' alt='photo' />
            <br></br>
            <div>
            <h1 className='font-extrabold'>Richie C</h1>
            <br></br>
            <p>Hello, I am a fellow at Pursuit, an intensive 12 month software engineering fellowship with a 9% acceptance rate. At pursuit I am learning first hand how to become a Full Stack Web Developer. Ever since I took an HTML course at Lehman College, I always had a curiosity for tech and the way things work behind the scenes. That spark of intelectual curiosity fueled my desire to learn more about the various programming languages that are relevant to the way we interact with technology on a daily basis. From what has started out as a simple spark of curiosity has now turned into my passion. I have prior experiences with auditing through a large volume of data, which allowed me to make the best use of my organizational skills. Outside of my profesional interest, I enjoy cycling through the city while taking photographs of all the beautiful scenes that New York has to offer.
My career goal started out as an audit specialist but has shifted into a future career in tech. For my career, I am looking for an organization where I can make the best use of my creativity while growing along with the company. I am someone who likes to solve problems, build solutions and would love to contribute content that will help make a users experience just a little easier.
            </p>
            </div>
        </div>
    );
};

export default About;