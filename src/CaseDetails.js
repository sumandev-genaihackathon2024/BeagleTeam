import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CaseDetails() {
  const [activeTab, setActiveTab] = useState('service');

  const renderContent = () => {
    switch (activeTab) {
      case 'service':
        return (
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={sidebarStyle}>
              {/* Case Details Sidebar */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <i className="fas fa-folder" style={{ color: '#ff4081', fontSize: '18px' }}></i>
                  <span style={{ marginLeft: '12px', fontSize: '18px', fontWeight: 'bold', color: '#333333' }}>Case Details</span>
                </div>
                <div style={{ fontSize: '16px', color: '#555555', lineHeight: '1.6' }}>
                  <div style={{ marginBottom: '12px' }}><strong>Case Number:</strong> 00001359</div>
                  <div style={{ marginBottom: '12px' }}><strong>Case Owner:</strong> <span style={{ color: '#0070d2' }}>Linda Service</span></div>
                  <div style={{ marginBottom: '12px' }}><strong>Priority:</strong> High</div>
                  <div style={{ marginBottom: '12px' }}><strong>Type:</strong> Product Support</div>
                  <div style={{ marginBottom: '12px' }}><strong>Status:</strong> Working</div>
                  <div style={{ marginBottom: '12px' }}><strong>Language:</strong> English</div>
                  <div style={{ marginBottom: '12px' }}><strong>Sub-Type:</strong> -</div>
                  <div style={{ marginBottom: '12px' }}><strong>Case Origin:</strong> Email</div>
                </div>
              </div>

              {/* Contact Information Sidebar */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <i className="fas fa-address-card" style={{ color: '#673ab7', fontSize: '18px' }}></i>
                  <span style={{ marginLeft: '12px', fontSize: '18px', fontWeight: 'bold', color: '#333333' }}>Contact</span>
                </div>
                <div style={{ fontSize: '16px', color: '#555555', lineHeight: '1.6' }}>
                  <div style={{ marginBottom: '12px' }}><strong>Name:</strong> Lauren Doyle</div>
                  <div style={{ marginBottom: '12px' }}><strong>Title:</strong> Lab Director</div>
                  <div style={{ marginBottom: '12px' }}><strong>Phone:</strong> <span style={{ color: '#0070d2' }}>+17602070450</span></div>
                  <div style={{ marginBottom: '12px' }}><strong>Email:</strong> <span style={{ color: '#0070d2' }}>ldoyle0518@gmail.com</span></div>
                  <div style={{ marginBottom: '12px' }}><strong>Account Name:</strong> United Diagnostics</div>
                  <div style={{ marginBottom: '12px' }}><strong>Postal Code:</strong> 94105</div>
                </div>
              </div>

              {/* Asset Details Sidebar */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <i className="fas fa-box" style={{ color: '#ff9800', fontSize: '18px' }}></i>
                  <span style={{ marginLeft: '12px', fontSize: '18px', fontWeight: 'bold', color: '#333333' }}>Asset Details</span>
                </div>
                <div style={{ fontSize: '16px', color: '#555555', lineHeight: '1.6' }}>
                  <div style={{ marginBottom: '12px' }}><strong>Serial Number:</strong> P-3894765</div>
                  <div style={{ marginBottom: '12px' }}><strong>Starter Kit:</strong> -</div>
                </div>
              </div>
            </div>

            <div style={mainContentStyle}>
              <h2 style={{ color: '#0070d2' }}>Case Processing</h2>

              {/* Original Email from Customer */}
              <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '12px', border: '1px solid #d8dde6', boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <i className="fas fa-user-circle" style={{ color: '#0070d2', fontSize: '20px' }}></i>
                  <span style={{ marginLeft: '12px', fontSize: '18px', color: '#333333' }}>Lauren Doyle</span>
                </div>
                <div style={{ fontSize: '16px', color: '#555555', lineHeight: '1.6' }}>
                  <p>Hi - I'm trying to build an internal business case to invest in ddPCR. It's quite a bit more expensive than standard PCR technology. Do you have any information you can share about the benefits of ddPCR compared to PCR?</p>
                  <p>Thanks so much,</p>
                  <p>Lauren</p>
                </div>
              </div>

              {/* AI Drafted Response Section */}
              <h2 style={{ color: '#0070d2', marginBottom: '16px' }}>AI-Generated Response</h2>
              <textarea
                style={{
                  width: '100%',
                  height: '150px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #d8dde6',
                  fontSize: '16px',
                  color: '#555555',
                  lineHeight: '1.6',
                  resize: 'vertical',
                  marginBottom: '16px',
                  outline: 'none',
                  boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)'
                }}
                value="Dear Lauren, Thank you for reaching out to us. ddPCR offers significant advantages over traditional PCR, including higher accuracy and precision in quantification. It also reduces the risk of contamination and can detect rare mutations more effectively. Please let us know if you need more detailed information. Best regards, Linda Service"
                onChange={() => {}}
              />

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <button style={actionButtonStyle('#28a745')}>Send</button>
                <button style={actionButtonStyle('#ffc107')}>Edit Draft</button>
                <button style={actionButtonStyle('#dc3545')}>Request Re-draft</button>
              </div>
            </div>

            {/* Knowledge Base */}
            <div style={sidebarStyle}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ color: '#0070d2', fontWeight: 'bold' }}>How does the Droplet Digital...</span>
                  <i className="fas fa-ellipsis-v" style={{ color: '#333333' }}></i>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <p>An overview of what Droplet Digital...</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#0070d2', fontWeight: 'bold', cursor: 'pointer' }}>Article Details</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#999999' }}>70% relevant</span>
                      <span style={{ color: '#0070d2', cursor: 'pointer' }}>Mark as Not Helpful</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ color: '#0070d2', fontWeight: 'bold' }}>What is the advantage of Droplet Digital...</span>
                  <i className="fas fa-ellipsis-v" style={{ color: '#333333' }}></i>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <p>Why ddPCR stands out as a superior choice among digital PCR technologies...</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#0070d2', fontWeight: 'bold', cursor: 'pointer' }}>Article Details</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#999999' }}>70% relevant</span>
                      <span style={{ color: '#0070d2', cursor: 'pointer' }}>Mark as Not Helpful</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <span style={{ color: '#0070d2', fontWeight: 'bold' }}>More</span>
                <i className="fas fa-caret-down" style={{ color: '#0070d2' }}></i>
              </div>
            </div>
          </div>
        );
      case 'sales':
        return (
          <div style={mainContentStyle}>
            <h2 style={{ color: '#0070d2' }}>Sales AI - Leads</h2>
            {/* Add the content for Sales AI Leads here */}
            <p>This section will list leads for the Sales AI tab.</p>
          </div>
        );
      case 'compliance':
        return (
          <div style={mainContentStyle}>
            <h2 style={{ color: '#0070d2' }}>Compliance AI - Document Upload</h2>
            <div>
              <label htmlFor="file-upload" style={{ display: 'block', marginBottom: '12px' }}>Upload Marketing Document:</label>
              <input type="file" id="file-upload" style={{ marginBottom: '20px' }} />
              <button style={actionButtonStyle('#0070d2')}>Submit for Review</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', padding: '20px', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={logoStyle}>
          <div style={logoIconStyle}>
            <i className="fas fa-heart" style={{ color: '#ffffff', fontSize: '18px' }}></i>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333' }}>Pay Pros Co.</span>
        </div>
        <div style={tabsContainerStyle}>
          <div style={activeTab === 'service' ? activeTabStyle : tabStyle} onClick={() => setActiveTab('service')}>
            Service AI
            {activeTab === 'service' && (
              <div style={subMenuStyle}>
                <Link to="/home" style={subMenuItemStyle}>Home</Link>
                <Link to="/accounts" style={subMenuItemStyle}>Accounts</Link>
                <Link to="/contacts" style={subMenuItemStyle}>Contacts</Link>
                <Link to="/cases" style={subMenuItemStyle}>Cases</Link>
                <Link to="/reports" style={subMenuItemStyle}>Reports</Link>
                <Link to="/dashboards" style={subMenuItemStyle}>Dashboards</Link>
              </div>
            )}
          </div>
          <div style={activeTab === 'sales' ? activeTabStyle : tabStyle} onClick={() => setActiveTab('sales')}>
            Sales AI
            {activeTab === 'sales' && (
              <div style={subMenuStyle}>
                <Link to="/home" style={subMenuItemStyle}>Home</Link>
                <Link to="/accounts" style={subMenuItemStyle}>Accounts</Link>
                <Link to="/contacts" style={subMenuItemStyle}>Contacts</Link>
                <Link to="/leads" style={subMenuItemStyle}>Leads</Link>
                <Link to="/reports" style={subMenuItemStyle}>Reports</Link>
                <Link to="/dashboards" style={subMenuItemStyle}>Dashboards</Link>
              </div>
            )}
          </div>
          <div style={activeTab === 'compliance' ? activeTabStyle : tabStyle} onClick={() => setActiveTab('compliance')}>
            Compliance AI
            {activeTab === 'compliance' && (
              <div style={subMenuStyle}>
                <Link to="/home" style={subMenuItemStyle}>Home</Link>
                <Link to="/accounts" style={subMenuItemStyle}>Accounts</Link>
                <Link to="/contacts" style={subMenuItemStyle}>Contacts</Link>
                <Link to="/compliance" style={subMenuItemStyle}>Upload Document</Link>
                <Link to="/reports" style={subMenuItemStyle}>Reports</Link>
                <Link to="/dashboards" style={subMenuItemStyle}>Dashboards</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
}

// Styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  padding: '12px 24px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px'
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoIconStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: '#0070d2',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '12px',
};

const tabsContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const tabStyle = {
  padding: '8px 16px',
  cursor: 'pointer',
  color: '#0070d2',
  fontWeight: 'bold',
  marginRight: '16px',
  borderBottom: '2px solid transparent',
};

const activeTabStyle = {
  padding: '8px 16px',
  cursor: 'pointer',
  color: '#0070d2',
  fontWeight: 'bold',
  marginRight: '16px',
  borderBottom: '2px solid #0070d2',
  position: 'relative',
};

const subMenuStyle = {
  display: 'flex',
  flexDirection: 'row',
  padding: '8px 0',
  marginTop: '8px',
  borderTop: '1px solid #e0e0e0',
};

const subMenuItemStyle = {
  color: '#0070d2',
  textDecoration: 'none',
  marginRight: '16px',
  fontWeight: 'bold',
};

const sidebarStyle = {
  flex: '1',
  padding: '16px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
};

const mainContentStyle = {
  flex: '2',
  padding: '16px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
};

const actionButtonStyle = (color) => ({
  backgroundColor: color,
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  textAlign: 'center'
});