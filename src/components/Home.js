import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillBriefcaseFill } from "react-icons/bs";

const Home = () => {
  return (
    <main className="bg-light p-5 min-vh-100">
        <section>
        <div className='container-fluid'>
        <div className='d-sm-flex align-items-center justify-content-between'>
            <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
              <h1 className=''>A Ashiq</h1>
              <h1 className='fw-bold custom-font'>FullStack Developer.</h1>
              <p className='pt-5'> Iam a student in VIT University in Vellore.</p>
              <p className='pt-2'><button>[Python ]</button> <button>[ Machine Learning ]</button> <button>[ FullStack Development ]</button></p>
              <NavLink to='/projects'><button className='btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2'>My Work</button></NavLink>
            </div>

            <div>
              <Player
                src='https://assets6.lottiefiles.com/packages/lf20_pwohahvd.json'
                className="player"
                loop
                autoplay
                style={{ maxHeight: '700px', maxWidth: '700px' }}
              />
            </div>
          </div>
        </div>
        </section>
          
        <section>


        </section>

        <section className='pt-5  d-flex flex-column'>
            <h1 class='mt-5 pe-1  text-center sm:text-center  text-4xl font-semibold custom-font ps-sm-5'>
              My Work Experience
            </h1>

          <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                      className="vertical-timeline-element--work w-1/2 md:w-full mx-auto"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="May 2022 - July 2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<BsFillBriefcaseFill />}
                    >
                      <h3 className="vertical-timeline-element-title">"Data Analyst Intern"</h3>
                      <h4 className="vertical-timeline-element-subtitle">AICTE - internship</h4>
                      <p>
                        Microsoft Excel · Tableau · R markdown · Data Science · GitHub 
                      </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="March 2023 - May 2023"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<BsFillBriefcaseFill />}
                    >
                    <h3 className="vertical-timeline-element-title">"Summer of Bitcon"</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bcoin.ltd</h4>
                    <p>
                      Proposal on the BIP:39 on the standard of mnemonic phrases for Bitcoin Core and accepted.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2023 - June 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BsFillBriefcaseFill />}
                  >
                    <h3 className="vertical-timeline-element-title">"Data Science Fellowship"</h3>
                    <h4 className="vertical-timeline-element-subtitle">International Journal of Scientific Research and publications</h4>
                    <p>
                    · Excel · Tableau · Data Science · Analytical Skills · Documentation
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="May 2023 - July 2023"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<BsFillBriefcaseFill />}
                    >
                      <h3 className="vertical-timeline-element-title">"Technical Intern"</h3>
                      <h4 className="vertical-timeline-element-subtitle">Clowak Innovations LLP</h4>
                      <p>
                        React-Native · Oauth · BLE/ESP32 Intergration  · ESP32 · Firebase Realtime DB
                      </p>
                </VerticalTimelineElement>

                  <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date="July 2023 - September 2023"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<BsFillBriefcaseFill />}
                  >
                  <h3 className="vertical-timeline-element-title">"BackEnd Development"</h3>
                  <h4 className="vertical-timeline-element-subtitle">Thoughtful Wellness</h4>
                  <p>
                  · Nodejs · Postgres · AWS · Python · Shopify API · Documentation · CI/CD tekton
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="Augest 2023 - Present"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<BsFillBriefcaseFill />}
                    >
                      <h3 className="vertical-timeline-element-title">"Backend Development"</h3>
                      <h4 className="vertical-timeline-element-subtitle">Flexdin</h4>
                      <p>
                        · Nodejs  · API/Route Testing · Github Actions · Postgres · Video(FFmpeg) encoding · API Documentation 
                      </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
          </div>
        </section>

  </main>
  )
}

export default Home