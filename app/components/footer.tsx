export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center">
        <span className="text-[#EDEDED] text-sm font-['Kode_Mono']">
          2025 | thomasl.dev
        </span>
        <div className="flex items-center gap-4 text-[#EDEDED] text-sm font-['Kode_Mono']">
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