import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

function Contact() {

  const message = () => {
    alert("Message Sent Successfully")
  }
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center mt-14'>

        <section className="w-36-contacts-14 bg-white py-12 px-8">
          <div className="contact-top pt-12">
            <div className="container mx-auto">
              <div className="title-heading-w3 mx-auto text-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-800">Want to get in touch?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="contacts12-main">
                  <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="main-input">
                    <div className="grid grid-cols-1 gap-4">
                      <input type="text" placeholder="Name" name="w3lName" id="w3lName" required="" className="py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <input type="email" name="email" placeholder="Email" id="w3lSender" required="" className="py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <input type="text" placeholder="Phone Number" name="w3lName" id="w3lName" required="" className="py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <textarea placeholder="Message" name="w3lMessage" id="w3lMessage" required="" className="py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="text-center mt-8">
                      <Link to="/"><button type="submit" className="btn btn-primary btn-style" onClick={message}>Submit Now</button> </Link>
                    </div>
                  </form>
                </div>
                <div className="map mt-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168144921176335!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1569921526194!5m2!1sen!2sin"
                    frameborder="0" allowfullscreen="" className="w-full h-80 rounded-lg"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
