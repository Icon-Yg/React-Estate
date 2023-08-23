import "bootstrap/dist/css/bootstrap.min.css";
import {FaStar } from "react-icons/fa6";
import {FaRegStar } from "react-icons/fa6";
import {FaQuoteLeft} from "react-icons/fa6";
import {FaStarHalfAlt} from "react-icons/fa"
import './style.css';
 function Review(){
     return <>
        <section className="container">
  <div className="py-5 review">
    <div className="row d-flex justify-content-center">
      <div className="col-md-10 col-xl-8 text-center">
        <h3 className="fw-bold mb-4">Reviews from our Community.</h3>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0">Working together as the Jumeirah Real Estate Team, we are very thankful for our loyal clients.  Our business is one of close relationships and we are very fortunate to be able to share so many positive real estate experiences with our clients.  Your satisfaction is the ultimate reward for our work and it is why we strive to be Your Dubai Real Estate Experts!.
        </p>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="card">
          <div className="card-body py-4 mt-2">
            <div className="d-flex justify-content-center mb-4">
                    <img src="src/images/Review/marina-abrosimova-bWTx0aWUKQg-unsplash.jpg" 
                    className="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 className="font-weight-bold">Teresa May</h5>
            <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <FaStar/>
              </li>
              <li>
                <FaStar/>
              </li>
              <li>
              <FaStar/>
              </li>
              <li>
                <FaStar/>
              </li>
              <li>
               <FaStarHalfAlt/>
              </li>
            </ul>
            <p className="mb-2">
              <FaQuoteLeft/>Throughout my adult years, I have had the experience of purchasing a few different houses.
               As my family began to grow, I recently found the need and desire to purchase a larger home. 
               I spoke to a variety of different realtors that showed me a variety of homes until I found Mike Gibson.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="card">
          <div className="card-body py-4 mt-2">
            <div className="d-flex justify-content-center mb-4">
              <img src="src/images/lashawn-dobbs-wOe_VGJe3TE-unsplash.jpg"
                className="rounded-circle shadow-1-strong" width="100" height="100" /> 
            </div>
            <h5 className="font-weight-bold">Fritz Hans</h5>
            <h6 className="font-weight-bold my-3">Civil Engineer in ATL</h6>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <FaStar/>
              </li>
              <li>
                <FaStar/>
              </li>
              <li>
              <FaStar/>
              </li>
              <li>
              <FaStar/>
              </li>
              <li>
              <FaStar/>
              </li>
            </ul>
            <p className="mb-2">
              <FaQuoteLeft/>Im Laufe meiner Erwachsenenzeit habe ich die Erfahrung gemacht, mehrere verschiedene Häuser zu kaufen.
               Als meine Familie zu wachsen begann, verspürte ich kürzlich das Bedürfnis und den Wunsch, ein größeres Haus zu kaufen. 
               Ich habe mit verschiedenen Maklern gesprochen.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-0">
        <div className="card">
          <div className="card-body py-4 mt-2">
            <div className="d-flex justify-content-center mb-4">
              <img src="src/images/Review/courtney-cook-TSZo17r3m0s-unsplash.jpg"
                className="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 className="font-weight-bold">Alexa Horwitz</h5>
            <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
            <ul className="list-unstyled d-flex justify-content-center">
            <li>
                <FaStar/>
              </li>
              <li>
                <FaStar/>
              </li>
              <li>
              <FaStar/>
              </li>
              <li>
              <FaStar/>
              </li>
              <li>
                 <FaRegStar/>
              </li>
            </ul>
            <p className="mb-2">
               <FaQuoteLeft/>Nel corso della mia età adulta, ho avuto l'esperienza di acquistare diverse case diverse. 
               Recentemente, quando la mia famiglia ha iniziato a crescere, ho sentito il bisogno e il desiderio di acquistare una casa più grande. 
               Ho parlato con vari agenti che mi hanno mostrato varie case.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     </>

 }

export default Review;