import React from 'react'

function Accordion() {
    return (
        <div className="container mx-auto pb-5" id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            What am I doing now?
                    </button>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="row">
                        <div className="col-3 text-center">
                            <image className="img-fluid" src="../img/logo.png"></image>
                        </div>
                        <div className="col-9 text-center my-auto">
                            <div className="card-body">
                                I am currently in a Web
                                Developer Bootcamp at Awesome
                                Inc. My expected graduation date
                            is December 11<sup>th</sup>.
                            Upon graduation I will be
                            equipped with the knowledge and
                            tools to begin a career as a
                            full stack web developer.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="false" aria-controls="collapseTwo">
                            What is my background?
                    </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="row">
                        <div className="col-3 text-center">
                            <image className="img-fluid" src="../img/uk.jpg"></image>
                        </div>
                        <div className="col-9 text-center my-auto">
                            <div className="card-body">
                                I graduated from the University
                                of Kentucky with a Bachelor's
                                degree in Business Management
                                and a minor in Economics. My
                                first job post-graduation was as
                                a Registered Client Service
                                Associate at UBS Financial
                                Services, Inc. here in
                                Lexington. I gained a lot of
                                priceless knowledge in my time
                                there and also acquired my
                                Series 7 and Series 66 licenses,
                                along with my Life and Health
                                Insurance licenses. My
                                inspiration to make a career
                                change came when I began working
                                from home as a result of
                                COVID-19. I realized that the
                                flexibility and independence
                                offered by a career in web
                                development made it the perfect
                            challenge for me.<br /><br />
                                    View my <a href="resume.pdf">resume</a> for
                            a more complete picture of my
                            professional background.
                       </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card pb-5">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
                            aria-expanded="false" aria-controls="collapseThree">
                            Collapsible Group Item #3
                    </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        Test text
                </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion