import { useSelector, useDispatch } from "react-redux";
import UploadNews from "./UploadNews";
import { deleteNews } from "../store/selectAdminReducer";

function NewsManager() {
  const dispatch = useDispatch();

  const { newsToDelete } = useSelector((state) => {
    return {
      newsToDelete: state.selectAdminReducer.newsToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deleteNews(newsToDelete));
  };

  return (
    <div>
      <div>
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#UploadNews"
              className="newManBtnGp btn btn-primary"
            >
              Subir
            </button>
          </label>
          <label>
            <button type="button" className="btn btn-primary" onClick={handleDelete}>
              Eliminar
            </button>
          </label>
        
      </div>
      <UploadNews />
    </div>
  );
}

export default NewsManager;
