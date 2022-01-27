import React, { useState } from "react";
import styled from "styled-components";

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const Pagination = ({ totalPages }) => {
	const [pageNumber, setPageNumber] = useState(1);
	console.log(pageNumber);

	const handleNextPageClick = () => {
		if (pageNumber < totalPages) {
			setPageNumber(pageNumber + 1);
		}
	};

	const handleLastPageClick = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		}
	};

	return (
		<Pages>
			Pages:{" "}
			<ArrowLeft
				// disabled={pageNumber === 1 ? true : false}
				onClick={handleLastPageClick}
				onKeyPress={handleLastPageClick}
				tabIndex="0"
			/>{" "}
			{pageNumber}{" "}
			<ArrowRight
				onClick={handleNextPageClick}
				onKeyPress={handleNextPageClick}
				tabIndex="0"
			/>
		</Pages>
	);
};

export default Pagination;

const Pages = styled.div`
	color: yellow;
	border: 2px solid yellow;
	background: black;
	font-size: 50px;
	font-weight: 900;
	display: flex;
	padding: 40px;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 50px;
	width: 12em;
	margin: auto;
	border-radius: 30px;
`;

const ArrowRight = styled(FiArrowRight)`
	cursor: pointer;
	margin-left: 1em;
`;

const ArrowLeft = styled(FiArrowLeft)`
	margin-left: 1em;
	margin-right: 1em;
	cursor: pointer;
	&:disabled {
		filter: grayscale(100%);
	}
	&:disabled {
		cursor: not-allowed;
	}
`;
