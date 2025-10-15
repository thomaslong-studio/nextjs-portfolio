'use client';

import { useState } from 'react';

export default function SectionContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'New Contact Form Submission from Portfolio');
      formDataToSend.append('_captcha', 'false'); 
      formDataToSend.append('_next', window.location.href); 

      const response = await fetch('https://formsubmit.co/72379ca944a561ae3c597cbac0eee2bf', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wrapper flex flex-col lg:flex-row gap-10 lg:gap-16 w-full" id="contact">
      <div className="flex flex-1 justify-center items-start flex-col">
        <h2 className="font-heading font-semibold text-5xl lg:text-7xl">
          let's build something together.
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-1 justify-center items-start flex-col gap-4">
        {/* Name Field */}
        <div className="flex self-stretch justify-start items-start flex-col gap-2.5 border-solid border-accent-soft border">
          <div className="input-field relative h-[42px] flex self-stretch justify-start items-start flex-row gap-2.5 p-3 border-solid border-accent-light border-b">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="flex-1 text-sm bg-transparent border-none outline-none placeholder:text-accent-light"
              required
            />
            <div className="input-accent"></div>
          </div>
        </div>
        
        {/* Email Field */}
        <div className="flex self-stretch justify-start items-start flex-col gap-2.5 border-solid border-accent-soft border">
          <div className="input-field relative h-[42px] flex self-stretch justify-start items-start flex-row gap-2.5 p-3 border-solid border-accent-light border-b">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="flex-1 text-sm bg-transparent border-none outline-none placeholder:text-accent-light"
              required
            />
            <div className="input-accent"></div>
          </div>
        </div>
        
        {/* Message Field */}
        <div className="flex self-stretch justify-start items-start flex-col gap-2.5 border-solid border-accent-soft border">
          <div className="input-field relative flex self-stretch justify-start items-start flex-col gap-2.5 pt-3 pl-3 border-solid border-accent-light border-b">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Drop me a message – I'll handle the rest!"
              className="min-h-[120px] w-full text-sm bg-transparent border-none outline-none resize-y placeholder:text-accent-light"
              required
            />
            <div className="input-accent"></div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-start items-start flex-col gap-2.5 pt-[24px]">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex text-xl items-center px-6 py-2 text-foreground border border-foreground bg-transparent hover:bg-foreground/[0.08] font-heading cursor-pointer transition-transform duration-200 ease-out transform shadow-[0_0_0_rgba(0,0,0,0)] hover:-translate-y-0.5 hover:shadow-[0_8px_14px_theme(colors.foreground/0.16)]"
          >
            <span className="">
              {isSubmitting ? 'sending...' : 'send it'}
            </span>
          </button>
        </div>
        
        {submitStatus === 'success' && (
          <p className="text-green-400 text-sm">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm">
            Oops! Something went wrong. Mind giving it another shot?
          </p>
        )}
      </form>
    </div>
  );
}