export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="flex">
          Thomas l.
        </div>
        <a
          href="#contact"
          className="flex items-center px-4 py-2 bg-[#00FFC5] text-[#2B2B2B] font-['Kode_Mono'] rounded hover:bg-[#00e6b2] transition-colors cursor-pointer"
        >
          say hello
        </a>
      </div>
    </header>
  );
}