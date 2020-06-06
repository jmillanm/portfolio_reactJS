
import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Jhanett. I'm a DataScientist with experience in Python, R, Alteryx, Tableau, Data Studio, Google Analytics, SQL, BigQuery, A/B Testing, GTM, and Google Optimize.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>My latest project, Tech w/ Jhan, is a site where I impart online classes about my passion: Yes, Data Science. You can check it out <a href="https://tech-w-jhan.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. There you can find thousand of hours on courses related to R, Python, and SQL</p>

      
            </Content>
        </div>
    );

}

export default AboutPage;
