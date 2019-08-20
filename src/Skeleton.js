import React from 'react'
import './Skeleton.css';
export default function skeleton() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="content">
            <div className="skeleton-image"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="skeleton-image"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="skeleton-image"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        </React.Fragment>
    )
}
