import React from 'react'

import Main from '../components/section/Main'

import about from "../assets/img/about.jpg";

const introText = {
    title: "port developer",
    desc: ["talent is", "found at the end of the", "effort"],
};

const Home = () => {
    return (
        <Main
            title="Home"
            description="Welcome Mppp">
            <section id="home">
                <div className="home__inner">
                    <h1 className="home__title">{introText.title}</h1>
                    <div className="home__lines" aria-hidden="true">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    <div className="home__text">
                        <div className="text">
                            <div>{introText.desc[0]}</div>
                            <div>{introText.desc[1]}</div>
                            <div>{introText.desc[2]}</div>
                        </div>
                        <div className="img">
                            <img src={about} alt="About me" />
                        </div>
                    </div>
                    <div className="home__lines bottom" aria-hidden="true">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default Home

