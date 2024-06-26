function CFormTR(jsonText) {
  const jsonObject = JSON.parse(jsonText);
  const { componentType, title, fields, submitButtonLabel } = jsonObject;

  const formComponent = `
  import React, { useState } from 'react';
  
  function ${componentType}() {
    const [formData, setFormData] = useState({
      ${fields.map((field) => `${field.name}: ''`).join(",\n      ")}
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add form submission logic here, e.g., validation, API calls, etc.
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>${title}</h2>
        ${fields
          .map(
            (field) => `
            <div>
              <label htmlFor="${field.name}">${field.label}:</label>
              <input
                type="${field.type}"
                id="${field.name}"
                name="${field.name}"
                placeholder="${field.placeholder}"
                value={formData.${field.name}}
                onChange={handleInputChange}
                ${field.required ? "required" : ""}
              />
            </div>
          `
          )
          .join("")}
        <button type="submit">${submitButtonLabel}</button>
      </form>
    );
  }
  
  export default ${componentType};
    `;

  return formComponent;
}

export default CFormTR;
