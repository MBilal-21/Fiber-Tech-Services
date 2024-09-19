
'use client';
import { useState } from 'react';
import IconWhatsappFill from "@/components/Icons/IconWhatsapp";

const WhatsAppIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const phoneNumber = '923188146730'; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "100px",
      right: "90px",
      border: "none",
      zIndex: 1000,
      cursor: "pointer",
      display:"flex",
      flexDirection:'column',
      alignItems:"end",
    }}>
      {isOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>Send a message</h2>
            {/* <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows="4"
              style={{ width: '100%' }}
            /> */}
            {/* <button onClick={handleSendMessage}>Send</button>
            <button onClick={() => setIsOpen(false)}>Close</button> */}
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} >
      <IconWhatsappFill fill="#32b646" className="w-12 h-12" />
      </button>

      
    </div>
  );
};

const modalStyle = {
  position: 'relative',
  // top: 0,
  // left: 0,
  // right: 0,
  // bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  width: '300px',
};

export default WhatsAppIcon;


