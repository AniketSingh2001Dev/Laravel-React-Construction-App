const Contact = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="section-7">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Quality. Integrity. Value.</span>
                                <h1>Contact Us</h1>
                                <p>
                                    We offer a divere array of construction services,
                                    <br />
                                    spanning residential, commercial, and industrial projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-9 py-4">
                    <div className="container py-4">
                        <div className="section-header text-center">
                            <h2>Contact Us</h2>
                            <p>
                                Our dedicated experts are here to help you with any of your questions.
                                <br />
                                Kindly contact us by filling out the form given below and we will be in touch shortly.
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h3 className="pb-0 mb-0">Call Us</h3>
                                        <a href="#">(888-000-0000)</a> <br />
                                        <a href="#">(222-123-12345)</a> <br />
                                        <br />
                                        <h3 className="pb-0 mb-0">Email Us</h3>
                                        <a href="#">example@example.com</a> <br />
                                        <a href="#">info@example.com</a> <br />
                                        <br />
                                        <h3 className="pb-0 mb-0">Address</h3>
                                        <p>
                                            B-18X, Rajaji Puram Road, <br />
                                            Lucknow, Uttar Pradesh, <br />
                                            India - 226017
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-8 col-xl-9">
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <input type="text" name="name" id="name" className="form-control form-control-lg" placeholder="Name" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="text" name="email" id="email" className="form-control form-control-lg" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="phone" className="form-label">Phone</label>
                                                    <input type="text" name="phone" id="phone" className="form-control form-control-lg" placeholder="Phone" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="subject" className="form-label">Subject</label>
                                                    <input type="text" name="subject" id="subject" className="form-control form-control-lg" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="form-label">Message</label>
                                                <textarea name="message" id="message" cols="30" rows="6" className="form-control form-control-lg" placeholder="Message"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-4">Submit</button>
                                        </form>
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

export default Contact;