import React from 'react'
import './App.css'
import { Email } from './Email';
import Footer from './Footer';
import Bottomcontent from './Bottomcontent';
import Maincontent from './Maincontent';
import { Icongrid } from './Icongrid';
import Teastimonials from './Teastimonials';
import Submitsucces from './Submitsucces';
import Navbar from './Navbar';



export const App = () => {
  return <>
   {/* <!-- Navigation--> */}
        {/* <!-- Masthead--> */}
        <Navbar/>
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            {/* <!-- Page heading--> */}
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                            {/* <!-- Signup form-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!--> */}
                            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                {/* <!-- Email address input--> */}
                                <Email/>
                                {/* <!-- Submit success message-->
                                <!-- has successfully submitted--> */}
                                <Submitsucces/>
                                {/* <!-- Submit error message-->
                                <!-- an error submitting the form--> */}
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- Icons Grid--> */}
       <Icongrid/>
        {/* <!-- Image Showcases--> */}
        <Maincontent/>
        {/* <!-- Testimonials--> */}
        <Teastimonials/>
        {/* <!-- Call to Action--> */}
        <Bottomcontent/>
        <Footer/>

        
  </>
}

export default App;  // export the component so it can be used in other parts of the app.assistant
