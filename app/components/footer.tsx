export default function Footer() {
  return (
    <footer className="p-4">
      <div className="p-4 border-t border-accent-soft flex flex-col lg:flex-row justify-between items-center font-sans text-sm">
        <span className="">
          2025 | thomasl.dev
        </span>
        <div className="flex items-center gap-4 ">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-accent-light">/</span>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Github
          </a>
          <span className="text-accent-light">/</span>
          <a 
            href="#" 
            download
            className="hover:text-white transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}