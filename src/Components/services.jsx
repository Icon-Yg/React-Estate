
import Review from "./Reviews";
import Footer from "./Footer";
import './style.css';

function Services(){
    return  <>
               <section className="container">

           {/* Our features of Jumeirah Home Estates */}
         <div className="section1">
           <h2>features in our Community</h2>
           <p>The exceptional complex of Jumeirah Estates by Mohammed Bin offers a wide range of premium amenities and services, presented by Mohammed Bin Salaam</p>
              <div className="inside-part">
                <nav className="nav">
                  <li>
                    <img src="src/images/Features/huum-xn_MghoT9HE-unsplash.jpg" alt="feature-img" />
                  </li>
                  <li>
                <img src="src/images/Features/malcolm-lightbody-jW2CpfyQo7o-unsplash.jpg" alt="feature-img" />
             </li>
           <li>
         <img src="src/images/Features/will-porada-a4qXGQHlB7A-unsplash.jpg" alt="feature-img"/>
         </li>
                </nav>
              </div>
         </div>
           {/* Our floor plans of Jumeirah Home Estates */}
           <div className="plan-head">
               <h2>FLOOR PLANS</h2>
           </div>
             <div className="floor-plan container">
                  <div>
                  <iframe src="src/images/Floorplan/Floorplans-2.pdf" width="400px" height="200px"></iframe>
                     <div>
                      <h4>Floor plan type 2A End unit</h4>
                       <h5>2br end unit</h5>
                       <p>unit area - 1627 sqFt <br /> Terrace/balcony - 249 sqFt <br /> covered garage - 325 sqFt <br />Total area - 2201 sqFt.</p>
                        <button className="btn">Ask for Price</button>
                        <button className="btn">Download Floorplan</button>
                     </div>
                  </div>
                  <div>
                  <iframe src="src/images/Floorplan/Floorplans-3.pdf" width="400px" height="200px"></iframe>
                  <div>
                      <h4>Floor plan type 3A End unit</h4>
                       <h5>3br end unit</h5>
                       <p>unit area - 1878 sqFt <br /> Terrace/balcony - 177 sqFt <br /> covered garage - 277 sqFt <br />Total area - 2332 sqFt.</p>
                        <button className="btn">Ask for Price</button>
                        <button className="btn">Download Floorplan</button>
                     </div>
                  </div>
                  <div>
                  <iframe src="src/images/Floorplan/Floorplans-4.pdf" width="400px" height="200px"></iframe>
                  <div>
                      <h4>Floor plan type 4A End unit</h4>
                       <h5>4br end unit</h5>
                       <p>unit area - 1889 sqFt <br /> Terrace/balcony - 135 sqft <br /> covered garage - 253 sqft <br />Total area - 2223 sqft.</p>
                        <button className="btn">Ask for Price</button>
                        <button className="btn">Download Floorplan</button>
                     </div>
                  </div>
               </div>
               {/* Neighboor */}
               <div className="neigh">
                <h1>About our neighborhood</h1>
                    <img src="src/images/neighboor/jimmy-conover-dvurMDsj09Y-unsplash.jpg" alt="neighboor" />
                <p>We all live in a society and we all have neighbors. But how many of us have really good and loyal neighbors? Some of us don’t even know who stays next door! That is how things have changed in the modern world.Yet others on the other hand have great neighbors, who live more, like a family and enjoy each other’s company.I live in an apartment and I too have a lovely and nice neighbor. They came to this apartment after we had been here for more than a year. At first since my parents and they were also working, we did not have much time to speak to each other.</p>
               </div>
             <div>
                    <Review />
                      <Footer />
             </div>
               </section>
    </>

  }
   export default Services;