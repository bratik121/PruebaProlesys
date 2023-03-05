import mainImg from "../../assets/pexels-1.png";

function MainImg() {
	return (
		<div className="main__img ">
			<img src={mainImg} alt="" className="w-full  h-full object-cover" />
		</div>
	);
}

export default MainImg;
