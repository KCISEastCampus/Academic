/**
 * Preview template for Student Council data
 * Shows a visual preview of how the data will appear on the website
 */
const StudentCouncilPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS();
  const council = data.council || {};
  const executives = data.executives || [];
  const groups = data.groups || [];
  const members = data.members || [];
  const contact = data.contact || {};

  const groupColors = {};
  groups.forEach(g => { groupColors[g.name] = g.color; });

  return `
    <div style="padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <h1 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;">
        ${council.name || 'Student Council'}
        ${council.short_name ? `<span style="color: #7f8c8d; font-size: 0.6em;"> (${council.short_name})</span>` : ''}
      </h1>
      <p style="color: #555; font-size: 1.1em;">${council.description || ''}</p>

      ${executives.length > 0 ? `
        <h2 style="color: #2c3e50; margin-top: 30px;">🎯 Core Team</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px;">
          ${executives.map(exec => `
            <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background: #f8f9fa;">
              <h3 style="margin: 0 0 5px 0; color: #2c3e50;">${exec.name}</h3>
              <p style="margin: 0 0 5px 0; color: #e74c3c; font-weight: bold;">${exec.role}</p>
              <p style="margin: 0 0 5px 0; color: #7f8c8d; font-size: 0.9em;">${exec.grade || ''} ${exec.class || ''}</p>
              ${exec.groups && exec.groups.length > 0 ? `
                <div style="margin-top: 8px;">
                  ${exec.groups.map(g => `
                    <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-right: 5px; background: ${groupColors[g.name] || '#95a5a6'}20; color: ${groupColors[g.name] || '#95a5a6'};">
                      ${g.name} - ${g.role}
                    </span>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${groups.length > 0 ? `
        <h2 style="color: #2c3e50; margin-top: 30px;">🏢 Departments</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px;">
          ${groups.map(group => `
            <div style="border-left: 4px solid ${group.color}; padding: 15px; background: #f8f9fa; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 5px 0; color: ${group.color};">
                <i class="${group.icon || ''}"></i> ${group.name}
              </h3>
              <p style="margin: 0 0 5px 0; color: #555;"><strong>负责人:</strong> ${group.leader_name_cn || ''}</p>
              <p style="margin: 0 0 10px 0; color: #666; font-size: 0.95em;">${group.description || ''}</p>
              ${group.responsibilities && group.responsibilities.length > 0 ? `
                <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 0.9em;">
                  ${group.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${members.length > 0 ? `
        <h2 style="color: #2c3e50; margin-top: 30px;">👥 Members (${members.length})</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${members.map(m => `
            <span style="padding: 4px 12px; border-radius: 15px; background: #ecf0f1; color: #2c3e50; font-size: 0.9em;">
              ${m.name}
              ${m.groups && m.groups.length > 0 ? `<span style="color: #7f8c8d;"> (${m.groups.join(', ')})</span>` : ''}
            </span>
          `).join('')}
        </div>
      ` : ''}

      ${contact.email || contact.location ? `
        <h2 style="color: #2c3e50; margin-top: 30px;">📞 Contact</h2>
        <p style="color: #555;">
          ${contact.email ? `📧 ${contact.email}` : ''}
          ${contact.email && contact.location ? ' | ' : ''}
          ${contact.location ? `📍 ${contact.location}` : ''}
        </p>
      ` : ''}
    </div>
  `;
};

CMS.registerPreviewTemplate('student_council', StudentCouncilPreview);
