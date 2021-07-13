import React from "react";
import Masonry from "react-masonry-css";
import "./index.css";

let items = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "three" },
  { id: 4, name: "four" },
  { id: 5, name: "five" }
];

items = items.map(function (item) {
  return <div key={item.id}>{item.name}</div>;
});

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default function App() {
  return (
    <div className="App">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >		
		<section>
			<h3>Boring - Various</h3>
		</section>
		<section>
			<h3>Countersinking & Counterbores</h3>
				<ul>
					<li>Counterbores Solid</li>
					<li>Countersinking & Counterboring Sets</li>
					<li>Countersinks</li>
					<li>Modular Counterbore System</li>
				</ul>
		</section>
		<section>
			<h3>Deburring</h3>
				<ul>
					<li>Deburring Sets</li>
					<li>Hand Deburring tools</li>
					<li>Machine Deburring</li>
					<li>Machine Rotary Burrs</li>
				</ul>
		</section>
		<section>
			<h3>Drill bits - Various</h3>
		</section>
      <section>
			<h3>Hole Making</h3>
				<ul>
					<li>Carbide Drills</li>
					<li>Drilling Inserts</li>
					<li>Drill Sets</li>
					<li>Drills - Various</li>
					<li>Indexable Drill Bodies</li>
				</ul>
		</section>
		<section>
			<h3>Inserts - Various</h3>
		</section>
      </Masonry>
    </div>
  );
}