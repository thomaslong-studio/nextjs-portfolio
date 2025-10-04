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
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1200px] flex self-stretch justify-start items-start flex-row gap-3.5 py-[120px] px-[24px]">
      <div className="flex flex-1 justify-center items-start flex-col">
        <p className="self-stretch text-[#EDEDED] text-[64px] font-['Big_Shoulders_Display'] font-semibold border-solid border-[#EDEDED] border">
          Let's Build Something Together.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-1 justify-center items-start flex-col gap-4">
        {/* Name Field */}
        <div className="flex self-stretch justify-start items-start flex-col gap-2.5 border-solid border-[#2B2B2B] border">
          <div className="h-[42px] flex self-stretch justify-start items-start flex-row gap-2.5 p-3 border-solid border-[#EDEDED] border-b">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="flex-1 text-[#EDEDED] text-sm font-['Kode_Mono'] bg-transparent border-none outline-none placeholder:text-[#8A8A8A]"
              required
            />
          </div>
        </div>
        
        {/* Email Field */}
        <div className="flex self-stretch justify-start items-start flex-col gap-2.5 border-solid border-[#2B2B2B] border">
          <div className="h-[42px] flex self-stretch justify-start items-start flex-row gap-2.5 p-3 border-solid border-[#EDEDED] border-b">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="flex-1 text-[#EDEDED] text-sm font-['Kode_Mono'] bg-transparent border-none outline-none placeholder:text-[#8A8A8A]"
              required
            />
          </div>
        </div>
        
        {/* Message Field */}
        <div className="flex self-stretch justify-start items-start flex-col gap-2.5 border-solid border-[#2B2B2B] border">
          <div className="flex self-stretch justify-start items-start flex-col gap-2.5 pt-3 pl-3 border-solid border-[#EDEDED] border-b">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Drop me a message – I'll handle the rest!"
              className="min-h-[120px] w-full text-[#EDEDED] text-sm font-['Kode_Mono'] bg-transparent border-none outline-none resize-y placeholder:text-[#8A8A8A]"
              required
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-start items-start flex-col gap-2.5 pt-[24px]">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex justify-center items-center flex-row gap-2.5 py-2.5 px-[32px] bg-[#FFFFFF] hover:bg-[#F0F0F0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span className="text-[#2B2B2B] font-['Big_Shoulders_Display'] font-bold">
              {isSubmitting ? 'sending...' : 'send it'}
            </span>
          </button>
        </div>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <p className="text-green-400 text-sm font-['Kode_Mono']">
            Message sent successfully!
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm font-['Kode_Mono']">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}