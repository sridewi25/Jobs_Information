import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { get_JOB_detail } from "../../actions/Jobaction";
import { useParams } from "react-router-dom";

function DetailJobs() {
  const { getDetailjobResult, getDetailjobLoading, getDetailjobError } =
    useSelector((state) => state.jobReducer);

  const { id } = useParams();

  console.log(+id);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(get_JOB_detail(+id, localStorage.getItem("access_token")));
  }, [dispatch]);
  return (
    <div className="bg-color-product">
      <br></br>
      <br></br>
      <div className="container row-bg-color">
        <br></br>
        {getDetailjobResult ? (
          getDetailjobResult.map((e) => {
            return (
              <>
                <div className="row justify-content-center ">
                  <div className="col-7">
                    <img
                      src={e.company_logo}
                      alt=""
                      align="center"
                      className="img-fluid img-responsive img-thumbnail"
                    />
                  </div>
                  <div className="col-5 ">
                    <div className="card-body">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text">{e.description}</p>
                      <p className="card-text">{e.url}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          <span>
                            <FontAwesomeIcon
                              icon={faClock}
                            ></FontAwesomeIcon>{" "}
                            Tipe Pekerjaan :{" "}
                          </span>
                          {e.type}{" "}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <br></br>
              </>
            );
          })
        ) : getDetailjobLoading ? (
          <p>Loading</p>
        ) : (
          <p>{getDetailjobError ? getDetailjobError : "Data Kosong"}</p>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default DetailJobs;
