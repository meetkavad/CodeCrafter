function CCardTR(jsonText) {
  const jsonObject = JSON.parse(jsonText);
  const { componentType, title, image, description, button } = jsonObject;

  const component = `import React from 'react';
  
  function ${componentType}() {
    return (
      <div className="${componentType.toLowerCase()}">
        ${
          image && image.url && image.alt
            ? `<img src="${image.url}" alt="${image.alt}" />`
            : ""
        }
        <div className="card-content">
          <h2>${title}</h2>
          ${description ? `<p>${description}</p>` : ""}
          ${
            button && button.text && button.link
              ? `<a href="${button.link}">${button.text}</a>`
              : ""
          }
        </div>
      </div>
    );
  }
  
  export default ${componentType};
  `;

  return component;
}

export default CCardTR;
