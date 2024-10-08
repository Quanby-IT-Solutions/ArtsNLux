import React from 'react';

interface EmailFormProps {}

const EmailForm: React.FC<EmailFormProps> = () => {
  return (
    <div className="flex flex-col mt-9 w-full max-md:max-w-full">
      <form className="flex flex-wrap gap-4 justify-between items-center w-full text-lg leading-loose max-md:max-w-full">
        <label htmlFor="email" className="sr-only">Enter your email address to get started</label>
        <input
          type="email"
          id="email"
          className="overflow-hidden self-stretch px-8 py-3.5 my-auto font-medium border bg-secondary-1 placeholder:text-white border-white border-solid min-w-[240px] text-white text-opacity-70 w-[377px] max-md:px-5"
          placeholder="Enter your email address to get started"
        />
        <button type="submit" className="gap-2.5 self-stretch px-12 py-3.5 my-auto font-bold whitespace-nowrap bg-white min-h-[53px] text-stone-600 w-[162px] max-md:px-5">
          SUBMIT
        </button>
      </form>
      <p className="text-sm font-medium leading-7 text-white max-md:max-w-full">
        or email us at{' '}
        <a href="mailto:busdev@citem.com.ph" className="font-semibold underline text-stone-200" target="_blank" rel="noopener noreferrer">
          busdev@citem.com.ph
        </a>
      </p>
    </div>
  );
};

export default EmailForm;