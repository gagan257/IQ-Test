import React from 'react'
import meditation from "../Images/meditation-1000062__340.webp"
export default function Contentp1() {
  return (
    <div>
       <div className="container-fluid mb-5" id="forBody">
        <div className="row">
            <div className="col">
                <div className="card bg-light shadow-lg mt-3" id="card-heading">
                    <div className="row">
                        <div className="col-6 mt-4">
                            <a href="#"><img src={meditation}  className="card-img" alt=""/></a>
                        </div>
                        <div className="col-6">
                            <div className="card-body mt-4" id="heading-card">
                                <div className="card-title">
                                    <h3 className="display-2 text-center mt-5 mb-5 typed-out">IQ test</h3>
                                </div>
                                <hr/>
                                <div className="card-text text-center">    
                                    <button className="btn btn-outline-primary btn-lg mt-5 shadow-lg rounded-pill" data-toggle="modal" data-target="#myModal3">TAKE TEST 
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>
                                        </span>
                                    </button>
                                
                                    <div className="modal fade" id="myModal3" data-backdrop="static">
                                        <div className="modal-dialog pt-0 mt-0">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h3 className="modal-title">IQ TEST</h3>
                                                    <button className="close" data-dismiss="modal">
                                                        <span>&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <h4 className="display-5">Test Consist of 10 questions</h4>
                                                    <h3>2</h3><h3 className="md-3"><span className="badge badge-pill badge-success">Easy</span></h3><h3>Questions</h3>
                                                    <h3>5</h3><h3 className="md-3"><span className="badge badge-pill badge-warning text-white">Medium</span></h3><h3>Questions</h3>
                                                    <h3>3</h3><h3 className="md-3"><span className="badge badge-pill badge-danger">Hard</span></h3><h3>Questions</h3>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-danger btn-lg rounded-pill" data-dismiss="modal">
                                                        Go Back
                                                    </button>
                                                    <button className="btn btn-success  rounded-pill"><a href="redirect-questions.html" className="nav-link text-white">PROCEED</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
