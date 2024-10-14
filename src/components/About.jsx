import AboutImg from '../assets/img/about-us.jpg';

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
                                <h1>About us</h1>
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
                <section className="section-2 py-5">
                    <div className="container py-5">
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
            </main>
        </>
    );
};

export default About;