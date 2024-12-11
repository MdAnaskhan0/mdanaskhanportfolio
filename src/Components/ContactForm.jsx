import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Zod validation schema
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message should be at least 10 characters long" }),
});

const ContactForm = () => {
  // Use React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data) => {
    // You can integrate EmailJS or a custom backend API here
    // For EmailJS, you'll need an account and a template configured
    console.log("Form Data:", data);
    
    // Example using EmailJS (don't forget to configure EmailJS with your credentials):
    // await emailjs.send("your_service_id", "your_template_id", data, "your_user_id");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16 sm:px-8 lg:px-12 font-yujiMai">
      {/* Resume Title and Description */}
      <section className="text-left mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Contact</h3>
        <hr className="w-16 border-t-2 border-blue-500 mb-6" />
        <p className="text-md md:text-xl text-gray-600 leading-relaxed text-justify">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column (Address and Google Map) */}
        <div className="flex flex-col items-start justify-start bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-4">Feel free to reach out to me for any inquiries:</p>
          
          <p className="text-md text-gray-700"><i className="fas fa-map-marker-alt mr-2 text-black"></i> Address: Dhaka, Bangladesh</p>
          <p className="text-md text-gray-700"><i className="fas fa-phone-alt mr-2 text-black"></i>Phone: 01981380806</p>
          <p className="text-md text-gray-700"><i className="fas fa-envelope mr-2 text-black"></i> Email: anas.cse.201@gmail.com</p>

          {/* Embed Google Map */}
          <div className="w-full mt-6">
            <iframe
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.50571133158!2d90.39850161498364!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e37e0bc82d%3A0x84d7f04072e8c089!2sGreen%20University%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1630895646038!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Column (Contact Form) */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="text-lg font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                {...register("name")}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="text-lg font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                {...register("email")}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-lg font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                {...register("message")}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                rows="5"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-md w-full mt-6 hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;


