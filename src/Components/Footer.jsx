import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

function Footer() {
    return (
        <Fragment>
            <div className="section footer">
                <div className="container">
                    <div className="row g-3 mb-4">
                        <div className="col-lg-2 col-md-4">
                            <h3 className="mb-3">
                                {/* <img src="../Assets/img/daksh-logo-dark.png" alt="Daksh India" width="80%" /> */}
                            </h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="row">
                                <div className="col-lg-7">
                                    <p>Our dedication and commitment to providing the best choice to our viewers have made us a people's favourite.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 footer-border">
                            <p className="mb-1">
                                <i className="fas fa-map-marker-alt text-success me-2" /> style-seeker
                            </p>
                            <p className="mb-1">
                                <i className="fas fa-envelope-open-text text-success me-2" /> style-seeker@gmail.com
                            </p>
                            <p className="mb-1">
                                <i className="fas fa-phone text-success me-2" /> +91 xxxxx-12345
                            </p>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="row g-3"></div>
                        </div>
                    </div>{" "}
                    {/* .row end */}
                    <div className="row g-3 border-top pt-3">
                        <div className="col-lg-6 col-md-12 text-center text-lg-start">
                            <span>{/* © 2023 <Link to={`/${cityName}/${userType}`}>Daksh India</Link>. All Rights Reserved. */}© 2023 Style Seeker. All Rights Reserved.</span>
                        </div>
                        <div className="col-lg-6 col-md-12 text-center text-lg-end">
                            <ul className="list-unstyled d-flex justify-content-center justify-content-lg-end mb-0">
                                <li>
                                    {/* <a className="p-2 ms-2 btn-success ps-3 pe-3">
                                        Admin Login
                                    </a> */}
                                </li>
                            </ul>
                        </div>
                    </div>{" "}
                    {/* .row end */}
                </div>
            </div>
        </Fragment>
    );
}
export default Footer;
