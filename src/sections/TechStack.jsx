import TitleHeader from "../components/TitleHeader.jsx";
import {techStackIcons} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y:0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
             scrollTrigger: {
                trigger: '#skills',
                 start: 'top center'
             }
        })
    })
    return (
        <div id="skills" className="flex-center section-padding">
            <div>
                <TitleHeader title="My Preferred Tech Stack" sub="What I Use Most"/>

                <div className="tech-grid">
                    {techStackIcons.map((techStackicon) => (
                        <div key={techStackicon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={techStackicon}/>
                                </div>
                                <div className="padding-x w-full">
                                   <p>{techStackicon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;