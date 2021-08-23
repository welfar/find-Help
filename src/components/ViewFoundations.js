import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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

	const handler = window.ePayco.checkout.configure({
		key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
		test: true,
		external: false,
		autoclick: false,
		lang: "es",
	});

	const handlePayment = () => {
		const data = {
			tax: 0,
			tax_base: 0,
			amount: "50000",
			name: "Find&aHelp Donación",
			description: `Está realizando una donación`,
			currency: "cop",
			country: "CO",
			invoice: "1234",

			response: `${process.env.REACT_APP_BASE_URL}/FoundationsView`,
		};
		handler.open(data);
	};

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
									src={foundation.logo}
									className="img-fluid rounded-start"
									alt="Logo"
								/>
							</div>
							<div className="col-md-8" Style="display: contents;">
								<div className="card-body">
									<div>
										<h5 className="card-title">{foundation.name}</h5>
										<p className="card-text">{foundation.email}</p>
										<p className="card-text">{foundation.address}</p>
										<p className="card-text">
											<div className="phoneText">
												<small className="text-muted">{foundation.phone}</small>
											</div>
										</p>
									</div>
									<div className="giveButt">
										<button
											type="button"
											className="donaButt btn btn-success"
                      data-bs-toggle="modal" 
                      data-bs-target="#staticBackdrop"
											onClick={handlePayment}
										>
											<div className="icon">
												<FontAwesomeIcon icon={faHeart} />
											</div>
											Ayúdanos
										</button>
									</div>
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
