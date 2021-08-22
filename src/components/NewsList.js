import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { assignNewsToDelete, getAllNews } from "../store/selectAdminReducer";

function NewsList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignNewsToDelete(id));
  };

  const { newsList } = useSelector((state) => {
    return {
      newsList: state.selectAdminReducer.newsList,
    };
  });

  const renderTableNews = () => {
    return (
      !!newsList &&
      newsList.length > 0 &&
      newsList.map((news) => {
        return (
            <div className="radioCont">
          <tr Style="display: flex;align-items: center;">
            
            <th>
              <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                // id={news._id}
                name="newsToDelete"
                value={news._id}
                onChange={(e) => handleDelete(e.target.value)}
                // checked
                />
              </div>
            </th>
            <td>
              <label htmlFor={news._id}>
                <img src={news.news} alt="News" className="d-block w-100" />
              </label>
            </td>
          </tr>
      </div>
        );
      })
    );
  };

  return (
    <table className="table table-hover">
      {/* <thead>
        <tr>
          <th>Selecciona</th>
          <th>Imagen</th>
        </tr>
      </thead> */}
      <tbody>{renderTableNews()}</tbody>
    </table>
  );
}

export default NewsList;
