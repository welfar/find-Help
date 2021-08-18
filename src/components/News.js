import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNews } from "../store/selectAdminReducer"

function News() {
  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => {
    return {
      newsList: state.selectAdminReducer.newsList,
    };
  });
  let counter = 0;

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
      {!!newsList &&
          newsList.length > 0 &&
          newsList.map((news, counter) => (
            <div
              key={news.id}
              className={
                counter === 0 ? "carousel-item active" : "carousel-item"
              }
            >
              <img src={news.news} className="img d-block w-100" alt="..." />
            </div>
          ))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default News;
