import React, { useEffect, useState } from "react";
import axios from 'axios';


const Intro = () => {
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
 


    await axios.get("/wp-json/wp/v2/pages/9").then((response) => {
    
      setTitle(response.data.title.rendered);
      setData(response.data.content.rendered);
      setResumen(removeTags(response.data.excerpt.rendered));

    });
  };

  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <div>
      {/* <!-- ======= Hero Section ======= --> */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>{title}</h1>
          
          <p>
            {resumen}
          </p>  

          {/* I'm{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span> */}
 

          {/* <div dangerouslySetInnerHTML={{ __html: data }}/>  */}

        </div>
      </section>
      {/* <!-- End Hero --> */}
    </div>
  );
};

export default Intro;
