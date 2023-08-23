import { FaLocationPinLock } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";
import { MdBedroomParent } from "react-icons/md";
import { FaLandmark} from "react-icons/fa6";
import Footer from "./Footer";
import './style.css';
// Import Swiper React components
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
 // import required modules
import { Autoplay, Navigation } from 'swiper/modules';



function Home(){  
     return  <>
     {/* HOME SECTION */}
       <section className="container">
         
      <img src="/src/images/main-img/florian-schmidinger-b_79nOqf95I-unsplash.jpg" alt="main-img" />
            {/* ABOUT THE JUMEIRAH ESTATES */}
        <div className="about">
          <h1>About our Estates</h1>
          <p>Jumeriah Estates by Mohammed Bin Salman is an elite residential complex by the development companies of Durar and Fortune 8. The project is distinguished by its exceptional design from the world-renowned fashion icon Mohammed Bin. As of May 2025, the project is under construction with the anticipated date of completion in June 2026.</p>
        </div>
          {/*  POPULAR PROPERTIES */}
           <div className="popular container">
            {/* Heading Popular content */}
               <div className="popular-section">
             <h1>Popular Properties</h1>
               </div>
                  {/* Popular Content */}
                <div className="popular-content swiper">
                <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 755500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280:{spaceBetween: 10,
            slidesPerView:1},
            320:{spaceBetween: 15,
              slidesPerView:2},
              510:{spaceBetween: 15,
                slidesPerView:2},
              758:{spaceBetween: 25,
                slidesPerView:2},
                900:{spaceBetween: 35,
                  slidesPerView:2},
          }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="popular-content"
      >
        {/* Popular Houses / Estates */}
        <SwiperSlide>
          {/* Estate box */}
           <div>
              <img src="src/images/main-part/r-architecture-2gDwlIim3Uw-unsplash.jpg" alt="main houses for sale"  className="estate-img"/>
           </div>
            {/* Estate txt */}
              <div className="estate-txt">
                <h2 className="location">Jumeirah Lake Towers</h2>
                <h2><FaLocationPinLock className="location"/>Palm Jumeirah</h2>
                {/*About Estate */}
                 <div>
                   <div><h3>Baths <FaBath className="location"/> 2</h3></div>
                   <div><h3>Bedrooms <FaBedPulse className="location"/> 3</h3></div>
                   <div><h3>Rooms <MdBedroomParent className="location"/> 4</h3></div>
                   <div><h3>Area <FaLandmark className="location"/> 5500 Sq ft</h3></div>
                 </div>
              {/*Property Agent */}
               <div className="agent">
                  <img src="src/images/Agents/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="property-agent" className="agent-img"/>
                {/* about agent */}
                  <div className="agent-txt">
                    <h3 className="location">Ali Morshedlou</h3>
                    <h3>Property Agent</h3>
                        <h3>Price Tag</h3>
                          <h2>$469.000</h2>      
                  </div>
               </div>
              </div>
                       </SwiperSlide>
                       {/* end estate 1 */}
                      
                      
                       <SwiperSlide>
          {/* Estate box */}
           <div>
              <img src="src/images/main-part/alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg" alt="main houses for sale"  className="estate-img"/>
           </div>
            {/* Estate txt */}
              <div className="estate-txt">
                <h2 className="location">Jumeirah</h2>
                <h2><FaLocationPinLock className="location"/>Jumeirah East</h2>
                {/*About Estate */}
                 <div>
                   <div><h3>Baths <FaBath className="location"/> 2</h3></div>
                   <div><h3>Bedrooms <FaBedPulse className="location"/> 4</h3></div>
                   <div><h3>Rooms <MdBedroomParent className="location"/> 5</h3></div>
                   <div><h3>Area <FaLandmark className="location"/> 5700 Sq ft</h3></div>
                 </div>
              {/*Property Agent */}
               <div className="agent">
                  <img src="src/images/Agents/austin-distel-7uoMmzPd2JA-unsplash.jpg" alt="property-agent" className="agent-img"/>
                {/* about agent */}
                  <div className="agent-txt">
                    <h3 className="location">Austin Distel</h3>
                    <h3>Property Agent</h3>
                        <h3>Price Tag</h3>
                          <h2>$549.000</h2>      
                  </div>
               </div>
              </div>
                       </SwiperSlide>
                       {/* end estate 2 */}
                       <SwiperSlide>
          {/* Estate box */}
           <div>
              <img src="src/images/main-part/john-fornander-Id7u0EkTjBE-unsplash.jpg" alt="main houses for sale"  className="estate-img"/>
           </div>
            {/* Estate txt */}
              <div className="estate-txt">
                <h2 className="location">Jumeirah Palm</h2>
                <h2><FaLocationPinLock className="location"/>Jumeirah Village Circle</h2>
                {/*About Estate */}
                 <div>
                   <div><h3>Baths <FaBath className="location"/> 2</h3></div>
                   <div><h3>Bedrooms <FaBedPulse className="location"/> 4</h3></div>
                   <div><h3>Rooms <MdBedroomParent className="location"/> 4</h3></div>
                   <div><h3>Area <FaLandmark className="location"/> 7500 Sq ft</h3></div>
                 </div>
              {/*Property Agent */}
               <div className="agent">
                  <img src="src/images/Agents/brian-tromp-B4VXQIJ_oew-unsplash.jpg" alt="property-agent" className="agent-img"/>
                {/* about agent */}
                  <div className="agent-txt">
                    <h3 className="location">Melissa Melinda</h3>
                    <h3>Property Agent</h3>
                        <h3>Price Tag</h3>
                          <h2>$669.030</h2>      
                  </div>
               </div>
              </div>
                       </SwiperSlide>
                       {/* end estate 3 */}

                       <SwiperSlide>
          {/* Estate box */}
           <div>
              <img src="src/images/main-part/stephan-bechert-yFV39g6AZ5o-unsplash.jpg" alt="main houses for sale"  className="estate-img"/>
           </div>
            {/* Estate txt */}
              <div className="estate-txt">
                <h2 className="location">Jumeirah Estate</h2>
                <h2><FaLocationPinLock className="location"/>Palm West</h2>
                {/*About Estate */}
                 <div>
                   <div><h3>Baths <FaBath className="location"/> 2</h3></div>
                   <div><h3>Bedrooms <FaBedPulse className="location"/> 4</h3></div>
                   <div><h3>Rooms <MdBedroomParent className="location"/> 4</h3></div>
                   <div><h3>Area <FaLandmark className="location"/> 8000 Sq ft</h3></div>
                 </div>
              {/*Property Agent */}
               <div className="agent">
                  <img src="src/images/Agents/clay-elliot-HfMCgqOLTyM-unsplash.jpg" alt="property-agent" className="agent-img"/>
                {/* about agent */}
                  <div className="agent-txt">
                    <h3 className="location">Elliot Clay</h3>
                    <h3>Property Agent</h3>
                        <h3>Price Tag</h3>
                          <h2>$455.000</h2>      
                  </div>
               </div>
              </div>
                       </SwiperSlide>
                       {/* end estate 4 */}

                       <SwiperSlide>
          {/* Estate box */}
           <div>
              <img src="src/images/main-part/ravi-avaala-2d4lAQAlbDA-unsplash.jpg" alt="main houses for sale"  className="estate-img"/>
           </div>
            {/* Estate txt */}
              <div className="estate-txt">
                <h2 className="location">Jumeirah City Showers</h2>
                <h2><FaLocationPinLock className="location"/>West Jumeirah</h2>
                {/*About Estate */}
                 <div>
                   <div><h3>Baths <FaBath className="location"/> 3</h3></div>
                   <div><h3>Bedrooms <FaBedPulse className="location"/> 3</h3></div>
                   <div><h3>Rooms <MdBedroomParent className="location"/> 3</h3></div>
                   <div><h3>Area <FaLandmark className="location"/> 7500 Sq ft</h3></div>
                 </div>
              {/*Property Agent */}
               <div className="agent">
                  <img src="src/images/Agents/clay-elliot-mpDV4xaFP8c-unsplash.jpg" alt="property-agent" className="agent-img"/>
                {/* about agent */}
                  <div className="agent-txt">
                    <h3 className="location">Doreen Morales</h3>
                    <h3>Property Agent</h3>
                        <h3>Price Tag</h3>
                          <h2>$352.000</h2>      
                  </div>
               </div>
              </div>
                       </SwiperSlide>
                       {/* end estate 1 */}
                       <SwiperSlide>
          {/* Estate box */}
           <div>
              <img src="src/images/main-part/lycs-architecture-kUdbEEMcRwE-unsplash.jpg" alt="main houses for sale"  className="estate-img"/>
           </div>
            {/* Estate txt */}
              <div className="estate-txt">
                <h2 className="location">Jumeirah Estates</h2>
                <h2><FaLocationPinLock className="location"/>Atlantis Island</h2>
                {/*About Estate */}
                 <div>
                   <div><h3>Baths <FaBath className="location"/> 2</h3></div>
                   <div><h3>Bedrooms <FaBedPulse className="location" /> 3</h3></div>
                   <div><h3>Rooms <MdBedroomParent className="location"/> 3</h3></div>
                   <div><h3>Area <FaLandmark className="location"/> 6400 Sq ft</h3></div>
              </div>
              {/*Property Agent */}
               <div className="agent">
                  <img src="src/images/Agents/linked-sales-solutions-pAtA8xe_iVM-unsplash.jpg" alt="property-agent" className="agent-img"/>
                {/* about agent */}
                  <div className="agent-txt">
                    <h3 className="location">Steve Alex</h3>
                    <h3>Property Agent</h3>
                        <h3>Price Tag</h3>
                          <h2>$745.000</h2>      
                  </div>
               </div>
                 </div>
                       </SwiperSlide>
                       {/* end estate 1 */}
                       <SwiperSlide>
          {/* Estate box */}
           <div>
              <img src="src/images/main-part/r-architecture-2gDwlIim3Uw-unsplash.jpg" alt="main houses for sale"  className="estate-img"/>
           </div>
            {/* Estate txt */}
              <div className="estate-txt">
                <h2 className="location">Jumeirah Lake Towers</h2>
                <h2><FaLocationPinLock className="location"/>Palm Jumeirah</h2>
                {/*About Estate */}
                 <div>
                   <div><h3>Baths <FaBath className="location"/> 2</h3></div>
                   <div><h3>Bedrooms <FaBedPulse className="location"/> 3</h3></div>
                   <div><h3>Rooms <MdBedroomParent className="location"/> 4</h3></div>
                   <div><h3>Area <FaLandmark className="location"/> 5500 Sq ft</h3></div>
              </div>
              {/*Property Agent */}
               <div className="agent">
                  <img src="src/images/Agents/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="property-agent" className="agent-img"/>
                {/* about agent */}
                  <div className="agent-txt">
                    <h3 className="location">Ali Morshedlou</h3>
                    <h3>Property Agent</h3>
                        <h3>Price Tag</h3>
                          <h2>$469.000</h2>      
                  </div>
               </div>
                 </div>
                       </SwiperSlide>
                       {/* end estate 6 */}
      </Swiper>

                </div>
            </div> 
           <div className="section-2">
             <h2>JUMEIRAH ESTATES BY MOHHAMMED BIN SALMAN BY DURAR AND FORTUNE 5</h2>
             <p>Properties in Jumeirah Estates by Mohammed Bin Salman are presented by an exquisite collection of spacious and elegantly designed Estates with 3 bedrooms.</p>
              <p>Living areas range from 4,200 sq. ft to 4,700 sq. ft. These unique residences will be surrounded by lush greenery. The layout of the Estates in Jumeirah Estates by Mohammed Bin includes terraces/balconies and a covered garage.</p>
               <div>
                <h2>INTERIOR DESIGN OF OUR PROPERTIES</h2>
                  <div className="inside-part">
                    <nav className="nav">
                      <li>
                        <img src="src/images/Inside-part/r-architecture-oGmf8o53LeE-unsplash.jpg" alt="inside-interior" />
                      </li>
                      <li>
                        <img src="src/images/Inside-part/sidekix-media-wRzBarqn3hs-unsplash.jpg" alt="inside-interior" />
                      </li>
                      <li>
                        <img src="src/images/Inside-part/sidekix-media-Mr2sz24thbE-unsplash.jpg" alt="inside-interior" />
                      </li>
                      <li>
                        <img src="src/images/Inside-part/spacejoy-RUvW1KGD9a4-unsplash.jpg" alt="inside-interior" />
                      </li>
                    </nav>
                  </div>
               </div>
           </div>
           <Footer />
        </section>
     </>
   }
    export default Home;