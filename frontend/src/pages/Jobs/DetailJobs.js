import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faBuilding,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { get_job_detail } from "../../actions/Jobaction";
import { Link, useParams } from "react-router-dom";
import { Button } from "bootstrap";

function DetailJobs() {
  const { getJobsDetailResult, getJobsDetailLoading, getJobsDetailError } =
    useSelector((state) => state.jobReducer);

  const { id } = useParams();

  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(get_job_detail(id, localStorage.getItem("access_token")));
  }, [dispatch]);
  return (
    <>
      <div className="job-bg-color">
        <div className="container py-5">
          <div className="row align-items-start">
            {getJobsDetailResult ? (
              getJobsDetailResult.map((e) => {
                return (
                  <>
                    <div className="col-lg-8">
                      <div className="d-flex flex-column text-left mb-3">
                        <p className="section-title pr-5">
                          <span className="pr-2">Job Detail | {e.created_at}</span>
                        </p>
                        <h1 className="mb-3">{e.title}</h1>
                        <div className="d-flex">
                          <p className="padding-icon">
                            <FontAwesomeIcon
                              icon={faBusinessTime}
                            ></FontAwesomeIcon>{" "}
                            {e.type}
                          </p>
                          <p className="padding-icon">
                            <FontAwesomeIcon
                              icon={faBuilding}
                            ></FontAwesomeIcon>{" "}
                            <span>{e.company}</span>
                          </p>
                          <p className="padding-icon">
                            <FontAwesomeIcon
                              icon={faMapLocationDot}
                            ></FontAwesomeIcon>{" "}
                            {e.location}
                          </p>
                        </div>
                      </div>
                      <div
                        className="mb-5"
                        dangerouslySetInnerHTML={{ __html: e.description }}
                      ></div>
                    </div>
                    <div className="col-lg-4 mt-5 mt-lg-0">
                      <div className="d-flex flex-column text-center bg-color-detail-job rounded mb-5 py-5 px-4">
                        <img
                          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
                          className="img-fluid rounded-circle mx-auto justify-content-center img-style"
                        ></img>

                        <p className="text-white m-0">
                          <a target="_blank" href={e.company_url}> <button className="btn btn-outline-secondary px-4 mx-auto my-2" onClick={e.company_url}>
                            <span>
                              <FontAwesomeIcon
                                icon={faBuilding}
                              ></FontAwesomeIcon>{" "}
                            </span>
                            Company Profile{" "}
                          </button> </a>
                         
                        </p>
                      </div>
                      
                      <div className="d-flex flex-column text-center bg-color-detail-job rounded mb-5 py-5 px-4 text-white">
                      <h2 className=" mb-4 text-white">How To Apply</h2>
                      <div dangerouslySetInnerHTML={{ __html: e.how_to_apply }}>

                      </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : getJobsDetailLoading ? (
              <p>Loading</p>
            ) : (
              <p>{getJobsDetailError ? getJobsDetailError : "Data Kosong"}</p>
            )}
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailJobs;
