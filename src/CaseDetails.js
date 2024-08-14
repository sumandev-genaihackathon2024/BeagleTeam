import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Example() {
  const [aiDraft, setAiDraft] = useState("Dear Lauren, Thank you for reaching out to us. ddPCR offers significant advantages over traditional PCR, including higher accuracy and precision in quantification. It also reduces the risk of contamination and can detect rare mutations more effectively. Please let us know if you need more detailed information. Best regards, Linda Service");

  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (rating) => {
    setFeedback(rating);
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', padding: '20px', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
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
            <i className="fas fa-heart" style={{ color: '#ffffff', fontSize: '18px' }}></i>
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
          <i className="fas fa-search" style={{ color: '#0070d2', fontSize: '18px' }}></i>
          <i className="fas fa-bell" style={{ color: '#0070d2', fontSize: '18px' }}></i>
          <i className="fas fa-question-circle" style={{ color: '#0070d2', fontSize: '18px' }}></i>
          <i className="fas fa-user-circle" style={{ color: '#0070d2', fontSize: '18px' }}></i>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Sidebar */}
        <div style={{ flex: '1', padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          {/* Case Details */}
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

          {/* Contact */}
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

          {/* Asset Details */}
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

        {/* Main Content */}
        <div style={{ flex: '2', padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333' }}>Case Processing</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ backgroundColor: '#0070d2', color: '#ffffff', padding: '8px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Follow</button>
              <button style={{ backgroundColor: '#ff4081', color: '#ffffff', padding: '8px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Escalate</button>
            </div>
          </div>

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
            value={aiDraft}
            onChange={(e) => setAiDraft(e.target.value)}
          />

          {/* Rich Text Formatting Toolbar */}
          <div style={{ marginBottom: '24px' }}>
            <button style={toolbarButtonStyle}><i className="fas fa-bold"></i></button>
            <button style={toolbarButtonStyle}><i className="fas fa-italic"></i></button>
            <button style={toolbarButtonStyle}><i className="fas fa-underline"></i></button>
            <button style={toolbarButtonStyle}><i className="fas fa-link"></i></button>
            <button style={toolbarButtonStyle}><i className="fas fa-list-ul"></i></button>
            <button style={toolbarButtonStyle}><i className="fas fa-list-ol"></i></button>
            <button style={toolbarButtonStyle}><i className="fas fa-quote-right"></i></button>
          </div>

          {/* Feedback Section */}
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#333333', fontSize: '16px', marginRight: '16px' }}>Rate AI Draft Quality:</span>
              <button style={feedbackButtonStyle} onClick={() => handleFeedback('👍')}>👍</button>
              <button style={feedbackButtonStyle} onClick={() => handleFeedback('👎')}>👎</button>
            </div>
            {feedback && (
              <div style={{ fontSize: '16px', color: feedback === '👍' ? '#28a745' : '#dc3545' }}>
                {feedback === '👍' ? 'You liked the draft!' : 'You disliked the draft.'}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button style={actionButtonStyle('#28a745')}>Send</button>
            <button style={actionButtonStyle('#ffc107')}>Edit Draft</button>
            <button style={actionButtonStyle('#dc3545')}>Request Re-draft</button>
          </div>
        </div>

        {/* Knowledge Section */}
        <div style={{ flex: '1', padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
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
    </div>
  );
}

// Common button styles
const toolbarButtonStyle = {
  backgroundColor: '#0070d2',
  color: '#ffffff',
  padding: '8px 12px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  marginRight: '8px',
  fontSize: '16px'
};

const feedbackButtonStyle = {
  backgroundColor: '#f8f9fa',
  color: '#0070d2',
  padding: '8px 12px',
  borderRadius: '6px',
  border: '1px solid #d8dde6',
  cursor: 'pointer',
  marginRight: '8px',
  fontSize: '16px'
};

const actionButtonStyle = (color) => ({
  backgroundColor: color,
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  width: '30%',
  textAlign: 'center'
});