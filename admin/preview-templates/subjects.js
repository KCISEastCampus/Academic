/**
 * Preview template for Subjects data
 * Shows a visual preview of how subjects will appear on the website
 */
const SubjectsPreview = ({ entry }) => {
  const data = entry.get('data').toJS();
  const alevel = data.alevel || [];
  const igcse = data.igcse || [];

  const colorMap = {
    success: '#27ae60',
    primary: '#3498db',
    secondary: '#95a5a6',
    danger: '#e74c3c',
    warning: '#f39c12',
    info: '#17a2b8'
  };

  const renderSubjectCard = (subject) => {
    const color = colorMap[subject.color] || '#3498db';
    return `
      <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background: white; text-align: center;">
        <div style="font-size: 2em; margin-bottom: 8px;">${subject.icon || '📚'}</div>
        <h3 style="margin: 0 0 5px 0; color: #2c3e50; font-size: 1em;">${subject.name}</h3>
        <p style="margin: 0; color: ${color}; font-size: 0.85em;">
          <code>${subject.path}</code>
        </p>
      </div>
    `;
  };

  return `
    <div style="padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      ${alevel.length > 0 ? `
        <h1 style="color: #27ae60; border-bottom: 3px solid #27ae60; padding-bottom: 10px;">
          📗 A-Level Subjects (${alevel.length})
        </h1>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
          ${alevel.map(renderSubjectCard).join('')}
        </div>
      ` : ''}

      ${igcse.length > 0 ? `
        <h1 style="color: #3498db; border-bottom: 3px solid #3498db; padding-bottom: 10px;">
          📘 IGCSE Subjects (${igcse.length})
        </h1>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px;">
          ${igcse.map(renderSubjectCard).join('')}
        </div>
      ` : ''}

      ${alevel.length === 0 && igcse.length === 0 ? `
        <p style="color: #7f8c8d; text-align: center; padding: 40px;">No subjects defined yet.</p>
      ` : ''}
    </div>
  `;
};

CMS.registerPreviewTemplate('subjects', SubjectsPreview);
