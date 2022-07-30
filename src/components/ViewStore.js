import React from "react";
import './Style.css';
function ViewStore(props) {
  return (
    <>
    <div id="store_content">
      <h1 className="heading">{props.storeDetails.title}</h1>
      <div className="store_details_container">
        <img
          className="cover_img"
          src={props.storeDetails.cover}
          alt="cover-img"
        />
        
        <div className="photo_gallery">
          <img src={props.storeDetails.galleryImg1} alt="img1" />
          <img src={props.storeDetails.galleryImg2} alt="img2" />
          <img src={props.storeDetails.galleryImg3} alt="img3" />
        </div>
        
        <div className="store_hours">
          <h3>Shope Hours</h3>
          <p>
            <b>Monday:</b> {props.storeDetails.storeHrs.from} -{" "}
            {props.storeDetails.storeHrs.to}
          </p>
          <p>
            <b>Tuesday:</b> {props.storeDetails.storeHrs.from} -{" "}
            {props.storeDetails.storeHrs.to}
          </p>
          <p>
            <b>Wednesday:</b> {props.storeDetails.storeHrs.from} -{" "}
            {props.storeDetails.storeHrs.to}
          </p>
          <p>
            <b>Thursday:</b> {props.storeDetails.storeHrs.from} -{" "}
            {props.storeDetails.storeHrs.to}
          </p>
          <p>
           <b> Friday:</b> {props.storeDetails.storeHrs.from} -{" "}
            {props.storeDetails.storeHrs.to}
          </p>
          <p>
            <b>Saturday:</b> {props.storeDetails.storeHrs.from} -{" "}
            {props.storeDetails.storeHrs.to}
          </p>
          <p>
            <b>Sunday:</b> {props.storeDetails.storeHrs.from} -{" "}
            {props.storeDetails.storeHrs.to}
          </p>
        </div>
        <div className="about_us">
          <h3>About Us</h3>
          <p>{props.storeDetails.about}</p>
        </div>
        
        <div className="store_location">
          <h3>Location</h3>
          <p>{props.storeDetails.location}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973450298!2d75.65047228361074!3d26.88514167956319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1659024492208!5m2!1sen!2sin"
            width="400"
            height="200"
            title="map"
          ></iframe>
        </div>
        
        <div className="product_range">
          <h3>Product Range</h3>
          <p>We provide products in the following categories</p>
          <ul>
            <li>{props.storeDetails.categories.category1}</li>
            <li>{props.storeDetails.categories.category2}</li>
            <li>{props.storeDetails.categories.category3}</li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default ViewStore;
