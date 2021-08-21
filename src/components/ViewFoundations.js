import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFoundation } from "../store/selectFoundationReducer";

function ViewFoundations() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllFoundation());
	}, []);

	const { foundationList } = useSelector((state) => {
		return {
			foundationList: state.selectFoundationReducer.foundationList,
		};
	});

	return (
		!!foundationList &&
		foundationList.length > 0 &&
		foundationList.map((foundation) => {
			return (
				<div className="fundationCards">
					<div className="card mb-5">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src="../assets/images/animal-care.jpg"
									className="img-fluid rounded-start"
									alt="..."
								/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{foundation.name}</h5>
									<p className="card-text">{foundation.email}</p>
									<p className="card-text">{foundation.address}</p>
									<p className="card-text">
										<small className="text-muted">{foundation.phone}</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		})
	);
}

export default ViewFoundations;
