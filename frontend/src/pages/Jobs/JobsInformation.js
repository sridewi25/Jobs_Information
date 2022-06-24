import React, { useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { get_JOB_detail, getjob } from "../../actions/Jobaction";
import { useDispatch, useSelector } from "react-redux";

function JobsInformation() {
  const { getjobResult, getjobLoading, getjobError } = useSelector(
    (state) => state.jobReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getjob(localStorage.getItem("access_token")));
  }, [dispatch]);
  return (
    <>
      <div className="bg-color-product">
        <div className="container">
          <br></br>
          <h1 className="product-title">All Jobs</h1>
          <br></br>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {getjobResult ? (
              getjobResult.map((e) => {
                return (
                  <>
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src={e.company_logo}
                          className="card-img-top img-thumbnail"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{e.title}</h5>
                          <p className="card-text"> {e.company}</p>
                          <p className="card-text"> {e.type}</p>
                          <p className="card-text"> {e.location}</p>
                          <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                            <Link
                              className="btn btn-sm btn btn-outline-primary"
                              onClick={() => dispatch(get_JOB_detail(e.id))}
                              to={`detail/${e.id}`}
                            >
                              <span>
                                <FontAwesomeIcon
                                  icon={faInfo}
                                ></FontAwesomeIcon>
                              </span>{" "}
                              Readmore
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : getjobLoading ? (
              <p>Loading</p>
            ) : (
              <p>{getjobError ? getjobError : "Data Kosong"}</p>
            )}
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobsInformation;
