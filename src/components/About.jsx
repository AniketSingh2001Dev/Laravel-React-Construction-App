import AboutImg from '../assets/img/about-us.jpg';
import MemberImg from '../assets/img/team1.jpg';

const About = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="section-7">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Quality. Integrity. Value.</span>
                                <h1>About Us</h1>
                                <p>
                                    We excel at transforming visions into reality through
                                    <br />
                                    outstanding craftsmanship and precise attention to detail.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section className="section-2 py-4">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-12 col-md-6 gap">
                                <img src={AboutImg} alt="image" className='img-fluid w-100' />
                            </div>
                            <div className="col-12 col-md-6">
                                <span>about us</span>
                                <h2>Crafting structures that last a lifetime</h2>
                                <p>
                                    Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices.
                                    By drawing on historical insights and utilizing modern technology.
                                </p>
                                <p>
                                    Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices.
                                    By combining lessons from the past with the power of modern technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="section-8 py-4 bg-light">
                    <div className="container py-4">
                        <div className="section-header text-center">
                            <span>team</span>
                            <h2>Our Team</h2>
                            <p>
                                We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={MemberImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title text-capitalize pb-0 mb-0">
                                            <h3>John Doe</h3>
                                        </div>
                                        <div className="card-text text-capitalize">
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={MemberImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title text-capitalize pb-0 mb-0">
                                            <h3>John Doe</h3>
                                        </div>
                                        <div className="card-text text-capitalize">
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={MemberImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title text-capitalize pb-0 mb-0">
                                            <h3>John Doe</h3>
                                        </div>
                                        <div className="card-text text-capitalize">
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={MemberImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title text-capitalize pb-0 mb-0">
                                            <h3>John Doe</h3>
                                        </div>
                                        <div className="card-text text-capitalize">
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;