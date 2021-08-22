import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewsManager from "./NewsManager";
import NewsList from "./NewsList";
import ListFoundations from "./ListFundations";
import { getAllFoundation } from "../store/selectFoundationReducer";

function Navigation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoundation());
  }, []);

	return (
		<div className="navigation-card card">
			<div className="card-header">
				<nav>
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<button
							className="nav-link active"
							id="nav-news-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-news"
							type="button"
							role="tab"
							aria-controls="nav-news"
							aria-selected="true"
						>
							Noticias
						</button>
						<button
							className="nav-link"
							id="nav-update-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-update"
							type="button"
							role="tab"
							aria-controls="nav-update"
							aria-selected="false"
						>
							Actualizar información
						</button>
					</div>
				</nav>

				<div className="tab-content" id="nav-tabContent">
					<div
						className="tab-pane fade show active"
						id="nav-news"
						role="tabpanel"
						aria-labelledby="nav-news-tab"
					>
						<br />
						<div>
							<NewsManager />
							<br />
							<h2>Noticias</h2>
							<br />
							<NewsList />
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="nav-update"
						role="tabpanel"
						aria-labelledby="nav-update-tab"
					>
						<ListFoundations />
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
