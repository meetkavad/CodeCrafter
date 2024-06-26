function CNavbarTR(jsonText) {
  const jsonObject = JSON.parse(jsonText);
  const { componentType, logo, links } = jsonObject;

  const component = `import React from 'react';

function ${componentType}() {
  return (
    <nav>
      <div>
        ${
          logo && logo.url && logo.alt
            ? `<img src="${logo.url}" alt="${logo.alt}" />`
            : ""
        }
      </div>
      <ul>
        ${links
          .map(
            (link) => `
              <li>
                <a href="${link.url}">${link.title}</a>
                ${
                  link.dropdown
                    ? `<ul>
                        ${link.dropdown
                          .map(
                            (item) => `
                            <li>
                                <a href="${item.url}">${item.title}</a>
                              </li>
                            `
                          )
                          .join("")}
                      </ul>`
                    : " "
                }
              </li>
            `
          )
          .join("")}
      </ul>
    </nav>
  );
}

export default ${componentType};
`;

  return component;
}

export default CNavbarTR;
