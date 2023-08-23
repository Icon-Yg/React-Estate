import "bootstrap/dist/css/bootstrap.min.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import './style.css';
function Footer(){
  return <>
    {/* Remove the container if you want to extend the Footer to full width. */}
<div className="container my-5">

  <footer className="footer">
    {/* Grid container */}
    <div className="container p-4">
      {/*Grid row */}
      <div className="row mt-4">
        {/*Grid column */}
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4"> Jumeirah Estates</h5>

          <p>
          Jumeriah Estates by Mohammed Bin Salman is an elite residential complex by the development companies of Durar and Fortune 8.
          </p>

          <p>
         The project is under construction with the anticipated date of completion in June 2026.            
          </p>

          <div className="mt-4">
            {/* Facebook */}
            <a type="button" className="btn btn-floating btn-light btn-lg"> <FaSquareFacebook/> </a>
            {/* Dribbble */}
            <a type="button" className="btn btn-floating btn-light btn-lg"> <FaTwitter/> </a>
            {/* Twitter */}
            <a type="button" className="btn btn-floating btn-light btn-lg"> <FaGoogle/> </a>
            {/* Google + */}
            <a type="button" className="btn btn-floating btn-light btn-lg"> <FaLinkedin/> </a>
            {/* Linkedin */}
          </div>
        </div>
          {/*Grid column */}

        {/*Grid column */}
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1"> Search</h5>

          <div className="form-outline form-white mb-4">
            <input type="text" id="formControlLg" className="form-control form-control-lg" />
          {/*  <label className="form-label" for="formControlLg">Search</label> */}
          </div>

          <ul className="fa-ul">
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Jumeirah, 00-967, Dubai</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">Jumeirahestates@hotmail.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
            </li>
          </ul>
        </div>
        {/*Grid column */}

        {/*Grid column */}
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4"> Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*Grid column */}
      </div>
      {/*Grid row */}
    </div>
    {/* Grid container */}

    {/* Copyright */}
    <div className="text-center p-3">
      © 2023 Copyright reserved.
   {/*   <a className="text-white">jumeirahestates.com</a> */}
    </div>
    {/* Copyright */}
  </footer>

</div>
{/* End of .container */}
  </>
  
}
   export default Footer;