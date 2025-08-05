import { useEffect, useRef, useState } from "react";

function DropdownMenu({ trigger, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={handleToggle} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black border border-green-700 rounded shadow-lg z-50">
          <ul className="py-2">
            {items.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={item.onClick}
                  className="w-full text-left px-4 py-2 text-green-300 hover:bg-green-800 hover:text-green-100 transition text-sm"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
