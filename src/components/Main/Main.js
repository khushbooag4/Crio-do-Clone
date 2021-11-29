import React from 'react';
import './Main.css';
// import Footer from '../Footer/Footer';

function Main() {
    return (
        <>
        {/* Main Part 1 */}
        <div>
        <div className="main">
            <div className="container">
                <div className="heading">
                     <h1>Revive Your Developer Course</h1>
                     <h1>With Confidence</h1>
                </div>
                <div className="sub-main">
                    <h3 className="earn">Earn up to <span className="scho">$3000 scholarship</span></h3>
                    <p>Limited Time Offer</p>
                </div>
                <p><span className="bold">Build</span> internship-grade development-projects</p>
                <p><span className="bold">Learn</span> Full Stack development or Backend development hands-on</p>
                <p><span className="bold">Grow</span> your career with real-work experience</p>
                 <div className="skill">
                      <i class="fas fa-play-circle fa-3x"><h4>Upskill with Crio</h4></i>
                     
                 </div>
                 <div className="button">
                     <button className="btn">Exlore our Programs<i className="fas fa-location-arrow"></i></button>
                     <button className="skeleton-btn btn">Book Your Free Trail<i className="fas fa-location-arrow"></i></button>
                 </div>

            </div>
            <div>
                <img className="hero" src="/Images/home-hero.webp" alt=" "/>
            </div>
        </div>
        {/* Main Part 2 */}
        <div className="main1">
        <div className="container">
            <div className="heading">
            <h1>Devellopers from Crio have Cracked Career In</h1>
            </div>
            <div className="sub-main">
                {/* <Carousel></Carousel> */}
             </div>
             <div className="button">
                 <button className="skeleton-btn btn">Book Your Free Trail<i className="fas fa-location-arrow"></i></button>
             </div>
        </div>
       </div>
        {/* Main Part 3 */}
       <div className="main2">
        <div className="container">
            <div className="heading">
            <h1>Take Your Developer Career to New Levels</h1>
            <p className="para">Unlike regular courses,<span> hands-on, project-led learning </span> is at the heart of everything you do at Crio. Land top
                 full stack developer or backend developer jobs with <span>real work experience</span> in key skills by working on
                 <span> internship-grade development projects.</span></p>
                
            </div>
            <div className="sub-main grid">
                <div className="section">
                    <img src="/Images/One.webp" alt="" />
                    <div>
                        <h1>True, Project-based Learning</h1>
                        <p>Learn Full-Stack development or
                           Backend development through
                           an immersive project-based
                           curriculum focused on practical developer skills.</p>
                    </div>
                </div>
                <div className="section">
                    <img src="/Images/Two.webp" alt="" />
                    <div>
                        <h1>Real Work Experience</h1>
                        <p>Learn with real work experience 
                           by building internship-grade
                           projects, with world-class mentorship,
                           in an actual developer environment.</p>
                    </div>
                </div>
                <div className="section">
                    <img src="/Images/Three.webp" alt="" />
                    <div>
                        <h1>Job-ready Portfolio on GitHub</h1>
                        <p>Go beyond just certificates with
                           a Crio verified project portfolio
                           on GitHub and impress any
                           recruiter with your skills and experience.</p>
                    </div>
                </div>
                <div className="section">
                    <img src="/Images/Four.webp" alt="" />
                    <div>
                        <h1>Personalised Career Guidance & Support</h1>
                        <p>Land exciting developer jobs
                           with structured planning and
                           personalised guidance & support
                           from Crio career coaches.</p>
                    </div>
                </div>
             </div>
             </div>
       </div>
              {/* Main Part 4 */}
        <div className="main3">
           <img src="/Images/Middle-Strip.webp" alt="" />
           <div className="container">
               
                 <div className="box">
                 <h2><span>#BreakTheChain</span> of copy/pasting others code to learn.</h2>
                </div>
                <h1>Learn by building Full-Stack / Backend</h1>
                <h1>projects on your own.</h1>
                <h2>Earn up to <span className="underline">₹ 30,000 scholarship</span>. Limited Time Offer.</h2> 
        </div>
       </div>
       </div>
    </>
    )
}

export default Main
