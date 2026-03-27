import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Pedro Tamburro, a Visual & UX/UI Designer.
                                </h2>
                                <p>I work as a Visual Designer at Editora Globo, where I craft visual solutions for marketing campaigns, UI design, video production, landing pages and email marketing for the company’s brands.</p>
                                <p>I have experience in visual design, prototyping, HTML, CSS, JS and Figma. I hold a degree in Graphic Design from Senac RJ and an MBA in UX Design, Information Architecture and Usability from Instituto Infnet. I’m currently pursuing an MBA in AI-Driven Innovation and User Experience at UX Unicórnio.</p>
                                <p>Passionate about design, technology and innovation.</p>
                                <div className="hero-btns">
                                    <a href="/contact" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery