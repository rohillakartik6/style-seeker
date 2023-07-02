import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

function Header() {
    return (
        <Fragment>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-5 col-6 logo-col" style={{ border: "black" }}>
                            <div className="logo">
                                <h1>style-seeker</h1>
                                {/* <Link>
                                    <img src="../Assets/img/daksh-logo.png" alt="daksh_india" className="img-responsive" width="100%" />
                                </Link> */}
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9">
                            <div className="row">
                                {/* <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="select-field">
                                        <div className="city-name">
                                            <p className="mb-0">
                                                <strong>st</strong>
                                            </p>
                                        </div>
                                        <div className="user-name">
                                            <p className="mb-0">{headerUserType}</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-lg-7 col-md-6 col-sm-8 col-8">
                                    {/* <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for products..." aria-label="Username" aria-describedby="basic-addon1" />
                                        <button className="search-button">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fas fa-search" />
                                            </span>
                                        </button>
                                    </div> */}
                                </div>
                                <div className="col-lg-3">
                                    {/* <Link to="/my-cart" type="button" className="btn btn-success cart-button">
                                        <i className="fas fa-shopping-cart" />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
