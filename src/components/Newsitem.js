import React, { Component } from "react";
import broken from './broken.png'

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="card" style={{ margin: "9px" }}>
          <img
            
            src={!imageUrl? broken:imageUrl}
            style={{ height: "11rem" }}
            className="card-img-top d-flex align-items-center justify-content-center"
            alt=" Not Unavailable"
          />
          <div className="card-body">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left: '85%', zIndex:1}} >
              {source}
              
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
