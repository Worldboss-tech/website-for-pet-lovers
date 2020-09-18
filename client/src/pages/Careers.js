import React, { useState, useEffect } from 'react';
import Background from '../components/Background';
import "./style.css";
import jobData from "../utils/JobListings"
import JobCard from '../components/CardJob';
import FormSignup from '../components/FormSignup'
import FormLogin from '../components/FormLogin'

export default function Careers() {
    let currentPositions = [];
    let currentPositionsBlaine = [];
    let currentPositionsStillwater = [];
    const [signup, setSignup] = useState(true)

    useEffect(() => {
        for (let i = 0; i < jobData.alljobs.length; i++) {
            if (jobData.alljobs[i].available === true) {
                currentPositions.push(jobData.alljobs[i])
                if (jobData.alljobs[i].location === "Blaine") {
                    currentPositionsBlaine.push(jobData.alljobs[i])
                } else if (jobData.alljobs[i].location === "Stillwater") {
                    currentPositionsStillwater.push(jobData.alljobs[i])
                }
            }
        }
        setJobState({
            all: currentPositions,
            Blaine: currentPositionsBlaine,
            Stillwater: currentPositionsStillwater
        })
        setJobs(currentPositions)
    }, [])

    const [jobState, setJobState] = useState({
        all: [],
        Blaine: [],
        Stillwater: []
    })

    const [jobs, setJobs] = useState([])

    const handleLocationChange = (e) => {
        if (e.target.value === "Blaine") {
            setJobs(jobState.Blaine)
        } else if (e.target.value === "Stillwater") {
            setJobs(jobState.Stillwater)
        } else {
            setJobs(jobState.all)
        }
    }
   
    return (
        <main className="hide-overflow">
            <Background />
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <h1 className="section-title">Available Positions</h1>
                        <button onClick={handleLocationChange} value="Blaine">Blaine</button>
                        <button onClick={handleLocationChange} value="Stillwater">Stillwater</button>
                    </div>
                    <JobCard
                        jobs={jobs}
                    />
                </div>
                <div className="col-md-6">
                    {(signup) ? <FormSignup /> : <FormLogin />}
                </div>
            </div>
        </main>
    )

}
