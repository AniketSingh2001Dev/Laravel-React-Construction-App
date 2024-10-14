import AboutImg from '../assets/img/about-us.jpg';
import ServiceImg from '../assets/img/construction2.jpg';
import ProjectImg from '../assets/img/construction3.jpg';
import BlogImg from '../assets/img/construction121.jpg';
import Icon1 from '../assets/img/icon-1.svg';
import Icon2 from '../assets/img/icon-2.svg';
import Icon3 from '../assets/img/icon-3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AvatarImg from '../assets/img/author-2.jpg';
import { Navigation, Pagination } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="section-1">
                    <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <span>Welcome Amazing Constructions</span>
                                <h1>Crafting dreams with <br /> precision and excellence.</h1>
                                <p>
                                    We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail.
                                    <br />
                                    With years of experience and a dedication to quality.
                                </p>
                                <div className="mt-4">
                                    <a href="#" className="btn btn-primary">contact now</a>
                                    <a href="#" className="btn btn-secondary ms-3">view projects</a>
                                </div>
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

                {/* Services */}
                <section className="section-3 bg-light py-4">
                    <div className="container-fluid py-4">
                        <div className="section-header text-center">
                            <span>our services</span>
                            <h2>Our Construction Services</h2>
                            <p>
                                We offer a diverse array of construction services, spanning residential, commercial, and industrial services.
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h4 className="mb-3">Specialty Construction</h4>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                            </p>
                                            <a href="#" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h4 className="mb-3">Specialty Construction</h4>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                            </p>
                                            <a href="#" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h4 className="mb-3">Specialty Construction</h4>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                            </p>
                                            <a href="#" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h4 className="mb-3">Specialty Construction</h4>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                            </p>
                                            <a href="#" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reason */}
                <section className="section-4 py-4">
                    <div className="container py-4">
                        <div className="section-header text-center">
                            <span>why choose us</span>
                            <h2>Discover Our Wide Variety Of Projects</h2>
                            <p>
                                Created in close partnership with our clients and collaborators, this approach merges industry expertise, decades of experience, innovation and flexibility to consistently deliver excellence.
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon1} alt="icon" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>
                                    <div className="card-text">
                                        <p>
                                            Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon2} alt="icon" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Superior Craftsmanship</h3>
                                    </div>
                                    <div className="card-text">
                                        <p>
                                            Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon3} alt="icon" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Knowledge and Expertise</h3>
                                    </div>
                                    <div className="card-text">
                                        <p>
                                            Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="section-3 bg-light py-4">
                    <div className="container-fluid py-4">
                        <div className="section-header text-center">
                            <span>our projects</span>
                            <h2>Discover Our Diverse Range Of Projects</h2>
                            <p>
                                We offer a diverse array of construction services, spanning residential, commercial, and industrial services.
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ProjectImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h4 className="mb-3">Kolkata Project</h4>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                            </p>
                                            <a href="#" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ProjectImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h4 className="mb-3">Kolkata Project</h4>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                            </p>
                                            <a href="#" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ProjectImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h4 className="mb-3">Kolkata Project</h4>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                            </p>
                                            <a href="#" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ProjectImg} alt="image" className="img-fluid w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h4 className="mb-3">Kolkata Project</h4>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                                            </p>
                                            <a href="#" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="section-5 py-4">
                    <div className="container py-4">
                        <div className="section-header text-center">
                            <span>testimonials</span>
                            <h2>What People Are Saying About Us</h2>
                            <p>
                                We offer a diverse array of construction services, spanning residential, commercial, and industrial services.
                            </p>
                        </div>
                        <Swiper modules={[Navigation, Pagination]} spaceBetween={50} slidesPerView={3} pagination={{ clickable: true }} navigation>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating">
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                        </div>
                                        <div className="card-text pt-4 pb-2 content">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero quos in est quibusdam eum. Commodi, quaerat placeat corporis inventore impedit accusamus!
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="d-flex radius pt-4">
                                            <div>
                                                <img src={AvatarImg} alt="image" className="img-fluid w-100" />
                                            </div>
                                            <div className="ps-3">
                                                <div className="name">John Doe</div>
                                                <div className="designation">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating">
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                        </div>
                                        <div className="card-text pt-4 pb-2 content">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero quos in est quibusdam eum. Commodi, quaerat placeat corporis inventore impedit accusamus!
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="d-flex radius pt-4">
                                            <div>
                                                <img src={AvatarImg} alt="image" className="img-fluid w-100" />
                                            </div>
                                            <div className="ps-3">
                                                <div className="name">John Doe</div>
                                                <div className="designation">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating">
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                        </div>
                                        <div className="card-text pt-4 pb-2 content">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero quos in est quibusdam eum. Commodi, quaerat placeat corporis inventore impedit accusamus!
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="d-flex radius pt-4">
                                            <div>
                                                <img src={AvatarImg} alt="image" className="img-fluid w-100" />
                                            </div>
                                            <div className="ps-3">
                                                <div className="name">John Doe</div>
                                                <div className="designation">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating">
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                            <i className="fa-solid fa-star fa-lg"></i>
                                        </div>
                                        <div className="card-text pt-4 pb-2 content">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero quos in est quibusdam eum. Commodi, quaerat placeat corporis inventore impedit accusamus!
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="d-flex radius pt-4">
                                            <div>
                                                <img src={AvatarImg} alt="image" className="img-fluid w-100" />
                                            </div>
                                            <div className="ps-3">
                                                <div className="name">John Doe</div>
                                                <div className="designation">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                {/* Blogs */}
                <section className="section-6 py-4 bg-light">
                    <div className="container py-4">
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
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;