import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import axios from 'axios';

const TestPage = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [resumen, setResumen] = useState([]);

  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

  const peticionGet = async () => {
 


    await axios.get("/wp-json/wp/v2/pages/2").then((response) => {
    
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
      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
           
            <h2>{title}</h2>
            {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}

            
          </div>
          <div dangerouslySetInnerHTML={{ __html: data }} />

          
        </div>
      </section>
      {/* <!-- End Services Section --> */}
    </div>
  );
};

export default TestPage;
