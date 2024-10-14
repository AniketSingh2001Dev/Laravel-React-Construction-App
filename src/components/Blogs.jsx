import BlogImg from '../assets/img/construction121.jpg';

const Blogs = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="section-7">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Quality. Integrity. Value.</span>
                                <h1>Blogs</h1>
                                <p>
                                    We offer a divere array of construction services,
                                    <br />
                                    spanning residential, commercial, and industrial projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blogs */}
                <section className="section-6 bg-light py-5">
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>our blogs</span>
                            <h2>Blogs & Blog Posts</h2>
                            <p>
                                We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title mb-4">
                                            <a href="#" className="text-capitalize">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title mb-4">
                                            <a href="#" className="text-capitalize">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title mb-4">
                                            <a href="#" className="text-capitalize">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title mb-4">
                                            <a href="#" className="text-capitalize">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title mb-4">
                                            <a href="#" className="text-capitalize">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="card-title mb-4">
                                            <a href="#" className="text-capitalize">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
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

export default Blogs;