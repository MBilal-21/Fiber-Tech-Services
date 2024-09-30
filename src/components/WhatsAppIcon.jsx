
'use client';
// import { useState } from 'react';
// import IconWhatsappFill from "@/components/Icons/IconWhatsapp";
// import { ChatBubbleLeftRightIcon,ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';


const WhatsAppIcon = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [message, setMessage] = useState('');

  // const handleSendMessage = () => {
  //   const phoneNumber = '923188146730'; // Replace with your WhatsApp number
  //   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  //   window.open(url, '_blank');
  //   setIsOpen(false);
  //   setMessage('');
  // };
  // const [show, setShow] = useState(true);

  return (
    <button className='fixed bottom-[100px] right-[15px] md:right-[90px] border-none z-[1000] cursor-pointer'>
    <div className="relative">
      {/* <div className="absolute -top-8 -left-12  flex  justify-between items-center bg-white rounded px-4">
        Contact-us
        <span>x</span>
      </div> */}
      <a href="https://wa.me/14438126432" target="_blank" className='flex items-center gap-2 group'>
      <div className='bg-white px-2 py-1 opacity-80 group-hover:opacity-100'>Contact us</div>
      
        {/* <IconWhatsappFill fill="#32b646" className="w-12 h-12" /> */}
        <Image  src="/Assets/icons/icons-svg/whatsapp-symbol-logo-svgrepo-com.svg" className='drop-shadow-md hover:drop-shadow-xl drop-shadow-custom-blue' width={50} height={50} alt='whatsApp Icon'/>

      </a>
    </div>
  </button>
  );
};
// <div style={{
//   position: "fixed",
//   bottom: "100px",
//   right: "90px",
//   border: "none",
//   zIndex: 1000,
//   cursor: "pointer",
//   display:"flex",
//   flexDirection:'column',
//   alignItems:"end",
// }}>
//   {isOpen && (
//     <div style={modalStyle} className='border-2 border-custom-blue rounded'>
//       <div style={modalContentStyle} className='rounded'>
//         <h2 className='font-bold pb-2'>Need Any Help!</h2>
//         {/* <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message here..."
//           rows="4"
//           style={{ width: '100%' }}
//         /> */}
//        <a href="https://wa.me/14438126432" target="_blank" className='block w-full'><div className='w-full bg-custom-blue rounded p-1 flex justify-start items-center hover:bg-black'>
//         <IconWhatsappFill fill="#32b646" className="w-12 h-12" />
//         <div className='text-white ps-2'>Contact us For Help!</div>
//         </div></a> 
//       </div>
//     </div>
//   )}
//   <button onClick={() => setIsOpen(!isOpen)} className='bg-custom-blue p-2 rounded-full'>
//   {isOpen ?
//    <ChevronDownIcon className="h-8 w-8 text-gray-50" />:
//    <ChatBubbleLeftRightIcon className="h-8 w-8 text-gray-50" /> 
//   }

//   </button>

  
// </div>

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
 
  width: '300px',
};

export default WhatsAppIcon;


