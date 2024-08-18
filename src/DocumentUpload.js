import React from 'react';

export default function DocumentUpload() {
  const mainContentStyle = {
    flex: '2',
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  const actionButtonStyle = {
    backgroundColor: '#0070d2',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center'
  };

  return (
    <div style={mainContentStyle}>
      <h2 style={{ color: '#0070d2' }}>Compliance AI - Document Upload</h2>
      <div>
        <label htmlFor="file-upload" style={{ display: 'block', marginBottom: '12px' }}>Upload Marketing Document:</label>
        <input type="file" id="file-upload" style={{ marginBottom: '20px' }} />
        <button style={actionButtonStyle}>Submit for Review</button>
      </div>
    </div>
  );
}