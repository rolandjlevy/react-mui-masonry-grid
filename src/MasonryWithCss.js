import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./index.css";

const breakpointColumnsObj = {
  default: 3,
  1280: 3,
  960: 2,
  600: 1
};

export default function MasonryWithCss() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="container"
        columnClassName="container-column"
      >
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>1. Boring - Various</h3>
          </header>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>2. Countersinking & Counterbores</h3>
          </header>
          <ul>
            <li>Counterbores Solid</li>
            <li>Countersinking & Counterboring Sets</li>
            <li>Countersinks</li>
            <li>Modular Counterbore System</li>
          </ul>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>3. Deburring</h3>
          </header>
          <ul>
            <li>Deburring Sets</li>
            <li>Hand Deburring tools</li>
            <li>Machine Deburring</li>
            <li>Machine Rotary Burrs</li>
          </ul>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>4. Drill bits - Various</h3>
          </header>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>5. Hole Making</h3>
          </header>
          <ul className={checked1 ? 'closed' : 'open'}>
            <li>Carbide Drills</li>
            <li>Drilling Inserts</li>
            <li>Drill Sets</li>
            <li>Drills - Various</li>
            <li>Indexable Drill Bodies</li>
            <li>Jobber Drills</li>
            <li>Long Series Drills</li>
            <li>Maintenance Drills</li>
            <li>Replaceable Tip Drills</li>
            <li>Specialist Drills</li>
            <li>Spotting & Centre Drills</li>
            <li>Stub Drills</li>
            <li>Taper Shank Drills</li>
          </ul>
          <div className="toggle-link" onClick={() => setChecked1(prevState => !prevState)}>Show {checked1 ? 'more' : 'less'}</div>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>6. Inserts - Various</h3>
          </header>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>7. Hole Making</h3>
          </header>
          <ul>
            <li>Carbide Drills</li>
            <li>Drilling Inserts</li>
            <li>Drill Sets</li>
            <li>Drills - Various</li>
            <li>Indexable Drill Bodies</li>
          </ul>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>8. Milling</h3>
          </header>
          <ul className={checked2 ? 'closed' : 'open'}>
            <li>Ball Nose</li>
            <li>Bore Milling</li>
            <li>Die & Mould Indexable</li>
            <li>Die & Mould Solid Carbide</li>
            <li>End Mills</li>
            <li>End Mills & Slot Drills - Various</li>
            <li>Indexable Bodies</li>
            <li>Key & Slot Cutters</li>
            <li>Milling Inserts</li>
            <li>Replaceable Head Milling Cutters</li>
            <li>Roughing & Ripper Cutters</li>
            <li>Slitting Saws</li>
            <li>Slot Drills</li>
            <li>Special Geometry Cutters</li>
            <li>Throwaway Cutters</li>
          </ul>
          <div className="toggle-link" onClick={() => setChecked2(prevState => !prevState)}>Show {checked2 ? 'more' : 'less'}</div>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>9. Parting & Grooving</h3>
          </header>
          <ul>
            <li>Inserts & Blades</li>
            <li>Square, Round & Rectangular Toolbits</li>
            <li>Toolholders</li>
            <li>Turning & Parting Toolholders</li>
          </ul>
        </section>
        <section>
          <header>
            <img src="https://via.placeholder.com/125" alt="placeholder" />
            <h3>10. Precision Boring</h3>
          </header>
          <ul>
            <li>Microbore Boring Systems</li>
            <li>Pinzbohr Boring Replacement Parts & Spares</li>
            <li>Pinzbohr Boring Systems</li>
            <li>Pinzbohr Toolholding Accessories</li>
            <li>Sandvik Coromant Boring System</li>
          </ul>
        </section>
      </Masonry>
    </div>
  );
}