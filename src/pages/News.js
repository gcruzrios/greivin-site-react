import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ReactPaginate from "react-paginate";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const News = () => {
  const [data, setData] = useState([]);
 

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const peticionGet = async () => {
    await axios.get("/wp-json/wp/v2/posts").then((response) => {
        setData(response.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 20;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Header />
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>News</h2>
          </div>

          {/* <!-- Table with stripped rows --> */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((obs) => (
                <tr key={obs.idOrganizacion}>
                  <td>{obs.title.rendered}</td>
                  <td>{obs.modified}</td>

                  <td>
                    <Link className="btn btn-info" to={`/detail/${obs.id}`}>
                      {" "}
                      <i class="bi bi-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center pt-30">
            <ReactPaginate
              pageCount={Math.ceil(data.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
              previousLabel={"Previus"}
              nextLabel={"Next"}
            />
          </div>
          
          <div className="swiper-pagination"></div>
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}
    </div>
  );
};

export default News;
