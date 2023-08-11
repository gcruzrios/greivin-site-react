import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import axios from "axios";
const Detail = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const { id } = useParams();
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const peticionGet = async () => {
    await axios.get(`/wp-json/wp/v2/posts/${id}`).then((response) => {
      setTitle(response.data.title.rendered);
      setData(response.data.content.rendered);
      console.log(data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <div>
      <Header />
      <br />

      {/* <!-- ======= Resume Section ======= --> */}
      <section id="resume" className="resume">
        <div className="container">
          <h2 className="text-end">
            <Link to="/news">Go to News Page</Link>
          </h2>
          <div className="section-title">
            <h2>{title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </section>
      {/* <!-- End Resume Section --> */}
    </div>
  );
};

export default Detail;
