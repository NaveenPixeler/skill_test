import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ title, options, onApply, onCancel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleApply = () => {
    onApply(selectedOptions);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setSelectedOptions([]);
    onCancel();
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.dropdownToggle} onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <label key={option} className={styles.dropdownOption}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
          <div className={styles.dropdownActions}>
            <button
              className={`${styles.actionButton} ${styles.cancelButton}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className={`${styles.actionButton} ${styles.applyButton}`}
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
