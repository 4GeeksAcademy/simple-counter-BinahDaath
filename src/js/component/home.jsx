import React,{ useState, useEffect, useRef }from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
function useInterval(callback, delay) {
	const savedCallback = useRef();
  
	useEffect(() => {
	  savedCallback.current = callback;
	}, [callback]);
  
	useEffect(() => {
	  function tick() {
		savedCallback.current();
	  }
	  if (delay !== null) {
		let id = setInterval(tick, delay);
		return () => clearInterval(id);
	  }
	}, [delay]);
  }
function SecondsCounterView(props)
{
	let count=String(props.seconds)
	count=count.padStart(6,"0")
	return (
	<div>
		<div class="flex w-full h-80 items-center gap-4 justify-center bg-black text-white text-6xl">
			<div class="col-2"><i class="fa-solid fa-clock"></i></div>
			<div class="col-1">{count[0]}</div>
			<div class="col-1">{count[1]}</div>
			<div class="col-1">{count[2]}</div>
			<div class="col-1">{count[3]}</div>
			<div class="col-1">{count[4]}</div>
			<div class="col-1">{count[5]}</div>
		</div>
	</div>);
};
function Counter() {
	let [count, setCount] = useState(0);
  
	useInterval(() => {
	  setCount(count + 1);
	}, 1000);
  
	return <SecondsCounterView seconds={count} />;
  };
function Test()
{
	return
	(
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>

	);
};
//create your first component
const Home = () => {
	return (
		<Counter/>
	);
};

export default Home;
