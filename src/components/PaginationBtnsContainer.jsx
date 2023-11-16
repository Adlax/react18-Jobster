import Wrapper from "../assets/wrappers/PaginationBtnsContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { changePageAction } from "../features/jobs/jobsSlice";

const PaginationBtnsContainer = () => {
	const { numOfPages, page } = useSelector((store) => store.jobs);
	const dispatch = useDispatch();

	const pagesArray = Array.from({ length: numOfPages }, (_, index) => {
		return index + 1;
	});

	const nextPage = () => {
		console.log("Next page");
		let newPage = page + 1;
		if (newPage > numOfPages) {
			newPage = 1;
		}
		dispatch(changePageAction(newPage));
	};
	const prevPage = () => {
		console.log("Prev page");
		let newPage = page - 1;
		if (newPage < 1) {
			newPage = numOfPages;
		}
		dispatch(changePageAction(newPage));
	};

	return (
		<Wrapper>
			<button type="button" className="prev-btn" onClick={() => prevPage()}>
				<HiChevronDoubleLeft />
				Prev
			</button>
			<div className="btn-container">
				{pagesArray.map((pageNumber) => {
					return (
						<button
							type="button"
							className={pageNumber === page ? "pageBtn active" : "pageBtn"}
							key={pageNumber}
							onClick={() => dispatch(changePageAction(pageNumber))}
						>
							{pageNumber}
						</button>
					);
				})}
			</div>
			<button type="button" className="next-btn" onClick={() => nextPage()}>
				Next
				<HiChevronDoubleRight />
			</button>
		</Wrapper>
	);
};

export default PaginationBtnsContainer;
