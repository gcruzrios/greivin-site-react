import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";





const Testimonial = () => {

  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [resumen, setResumen] = useState([]);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const peticionGet = async () => {
    await axios.get("/wp-json/wp/v2/pages/29558").then((response) => {
      setTitle(response.data.title.rendered);
      //setData(removeTags(response.data.content.rendered));
      setData(response.data.content.rendered);
      setResumen(removeTags(response.data.excerpt.rendered));
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <div>
      <Header />
      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            
            <h2>{title}</h2>
          </div>

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div dangerouslySetInnerHTML={{ __html: data }} />
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}
    </div>
  );
};

export default Testimonial;
