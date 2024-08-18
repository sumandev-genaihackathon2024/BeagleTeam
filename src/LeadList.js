import React from 'react';

export default function LeadList() {
  const mainContentStyle = {
    flex: '2',
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={mainContentStyle}>
      <h2 style={{ color: '#0070d2' }}>Sales AI - Leads</h2>
      <p>This section will list leads for the Sales AI tab.</p>
      {/* Additional content for Leads can be added here */}
    </div>
  );
}