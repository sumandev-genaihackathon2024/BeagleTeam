import React from 'react';

export default function KnowledgeBase() {
  const knowledgeBaseStyle = {
    flex: '1',
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={knowledgeBaseStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333' }}>Knowledge</div>
        <button style={{
          backgroundColor: '#0070d2',
          color: '#ffffff',
          padding: '8px 20px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer'
        }}>
          New Article
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <input
          type="text"
          style={{
            flexGrow: '1',
            border: '1px solid #d8dde6',
            borderRadius: '6px',
            padding: '10px',
            fontSize: '16px',
            color: '#555555',
            outline: 'none'
          }}
          placeholder="Search Knowledge..."
        />
        <button style={{
          backgroundColor: '#0070d2',
          color: '#ffffff',
          padding: '10px 20px',
          borderRadius: '6px',
          border: 'none',
          marginLeft: '12px',
          cursor: 'pointer'
        }}>
          Filter
        </button>
      </div>
      <div style={{ fontSize: '16px', color: '#555555', marginBottom: '24px', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span>Einstein Recommendations</span>
          <span style={{ color: '#999999', fontSize: '14px' }}>Last Updated 05:56 PM - 3 recommendations</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ color: '#0070d2', fontWeight: 'bold' }}>What is Droplet Digital PCR technology...</span>
          <i className="fas fa-ellipsis-v" style={{ color: '#333333' }}></i>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <p>ddPCR enables the measurement of thousands of independent...</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#0070d2', fontWeight: 'bold', cursor: 'pointer' }}>Article Details</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#999999' }}>70% relevant</span>
              <span style={{ color: '#0070d2', cursor: 'pointer' }}>Mark as Not Helpful</span>
            </div>
          </div>
        </div>
        {/* More articles */}
      </div>
    </div>
  );
}