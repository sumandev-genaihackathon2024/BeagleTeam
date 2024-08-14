import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseList() {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          backgroundColor: '#ffffff', 
          padding: '12px 24px', 
          borderRadius: '12px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
          marginBottom: '20px' 
        }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#0070d2', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginRight: '12px'
            }}>
            <i className="fas fa-th" style={{ color: '#ffffff', fontSize: '18px' }}></i>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333' }}>Pay Pros Co.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/home" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/accounts" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>Accounts</Link>
          <Link to="/contacts" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>Contacts</Link>
          <Link to="/cases" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>Cases</Link>
          <Link to="/reports" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>Reports</Link>
          <Link to="/dashboards" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>Dashboards</Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-folder" style={{ color: '#ff9800', fontSize: '18px', marginRight: '12px' }}></i>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333' }}>Cases</span>
            <span style={{ marginLeft: '16px', fontSize: '14px', color: '#555555' }}>Recently Viewed</span>
            <i className="fas fa-caret-down" style={{ color: '#555555', marginLeft: '8px' }}></i>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{ 
                backgroundColor: '#0070d2', 
                color: '#ffffff', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                border: 'none', 
                cursor: 'pointer' 
              }}>
              New
            </button>
            <button style={{ 
                backgroundColor: '#e0e0e0', 
                color: '#333333', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                border: 'none', 
                cursor: 'pointer' 
              }}>
              Change Owner
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '14px', color: '#555555' }}>1 item • Updated a few seconds ago</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input 
              type="text" 
              placeholder="Search this list..." 
              style={{ 
                border: '1px solid #e0e0e0', 
                borderRadius: '6px', 
                padding: '8px', 
                fontSize: '14px', 
                outline: 'none' 
              }} 
            />
            <i className="fas fa-cog" style={{ color: '#0070d2', fontSize: '18px' }}></i>
            <i className="fas fa-th" style={{ color: '#0070d2', fontSize: '18px' }}></i>
            <i className="fas fa-filter" style={{ color: '#0070d2', fontSize: '18px' }}></i>
            <i className="fas fa-sync" style={{ color: '#0070d2', fontSize: '18px' }}></i>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f6f9', borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ padding: '12px 8px', textAlign: 'left', color: '#333333', fontSize: '14px' }}>Case Number</th>
              <th style={{ padding: '12px 8px', textAlign: 'left', color: '#333333', fontSize: '14px' }}>Subject</th>
              <th style={{ padding: '12px 8px', textAlign: 'left', color: '#333333', fontSize: '14px' }}>Status</th>
              <th style={{ padding: '12px 8px', textAlign: 'left', color: '#333333', fontSize: '14px' }}>Date/Time Opened</th>
              <th style={{ padding: '12px 8px', textAlign: 'left', color: '#333333', fontSize: '14px' }}>Case Owner Alias</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>
                <Link to="/case/00001026" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>00001026</Link>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>
                <i className="fas fa-lock" style={{ color: '#333333' }}></i>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>New</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>5/4/2024, 5:52 AM</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>Agent1</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>
                <Link to="/case/00001027" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>00001027</Link>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>
                <i className="fas fa-lock" style={{ color: '#333333' }}></i>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>New</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>6/4/2024, 5:52 AM</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>Agent2</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>
                <Link to="/case/00001028" style={{ color: '#0070d2', textDecoration: 'none', fontWeight: 'bold' }}>00001028</Link>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>
                <i className="fas fa-lock" style={{ color: '#333333' }}></i>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>New</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>7/4/2024, 5:52 AM</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid #e0e0e0' }}>Agent3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}