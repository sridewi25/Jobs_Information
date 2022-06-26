import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faMapLocationDot,
  faArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { getalljobs } from "../../actions/Jobaction";
import { useDispatch, useSelector } from "react-redux";

function JobsInformation() {
  const { getJobsResult, getJobsLoading, getJobsError } = useSelector(
    (state) => state.jobReducer
  );
  const [searchlocation, setSearchlocation] = useState("");
  const [searchdescription, setSearchdescription] = useState("");
  const [searchtype, setSearchtype] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getalljobs(localStorage.getItem("access_token")));
  }, [dispatch]);
  return (
    <>
      <div className="job-bg-color">
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center pb-2 tile-line">
              <p className="section-title px-5">
                <span className="px-2 title-style-job">
                  - Job Information -
                </span>
              </p>
              <h1 className="mb-4 title-style-job">All Job Information</h1>
            </div>

            <div className="row pb-3">
              <div className="col-lg-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </span>
                  <input
                    type="text"
                    className="form-control form-control"
                    placeholder="Search by Location"
                    onChange={(event) => {
                      setSearchlocation(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </span>{" "}
                  <input
                    type="text"
                    className="form-control form-control"
                    placeholder="Search by Job Description"
                    onChange={(event) => {
                      setSearchdescription(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4">
              <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </span>{" "}
                  <input
                    type="text"
                    className="form-control form-control"
                    placeholder="Search by Type"
                    onChange={(event) => {
                      setSearchtype(event.target.value);
                    }}
                  />
                </div>
            </div>
            </div>
            <br></br>
            <div className="row pb-3">
              {getJobsResult ? (
                getJobsResult
                  .filter((job) => {
                    if (searchlocation === "" && searchdescription === "" && searchtype === "") {
                      return job;
                    } else if (
                      job.location
                        .toLowerCase()
                        .includes(searchlocation.toLowerCase()) &&
                      job.description.toLowerCase().includes(searchdescription) 
                      &&
                      job.type.toLowerCase().includes(searchtype) 
                    ) {
                      return job;
                    }
                  })
                  .map((e) => {
                    return (
                      <div className="col-lg-4 mb-4 ">
                        <div className="card border-0 shadow-sm mb-2 box-shadow-job">
                          <img
                            className="card-img-top mb-2"
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
                            alt=""
                          />
                          <div className="card-body bg-light text-center p-4">
                            <h4 className="h4-title-job">{e.title}</h4>
                            <div className="d-flex justify-content-center mb-4">
                              <small className="padding-icon">
                                <FontAwesomeIcon
                                  icon={faBusinessTime}
                                ></FontAwesomeIcon>{" "}
                                {e.type}
                              </small>
                              <small className="padding-icon">
                                <FontAwesomeIcon
                                  icon={faMapLocationDot}
                                ></FontAwesomeIcon>{" "}
                                {e.location}
                              </small>
                            </div>
                            <p>{e.company}</p>
                            <Link
                              to={`info/${e.id}`}
                              className="btn btn-primary px-4 mx-auto my-2"
                            >
                              Read More{" "}
                              <span>
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                ></FontAwesomeIcon>{" "}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : getJobsLoading ? (
                <p>Loading</p>
              ) : (
                <p>{getJobsError ? getJobsError : "Data Kosong"}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default JobsInformation;
