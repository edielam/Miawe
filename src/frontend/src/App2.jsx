// import React, { useState, useEffect, useRef } from 'react';
// import { w3cwebsocket as W3CWebSocket } from 'websocket';
// import Peer from 'simple-peer';
// import { invoke } from '@tauri-apps/api/tauri';
// import './index.css';

// function App2() {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [peerId, setPeerId] = useState('');
//   const [myPeerId, setMyPeerId] = useState('');
//   const peerRef = useRef(null);
//   const socketRef = useRef(null);

//   useEffect(() => {
//     const newSocket = new W3CWebSocket('ws://localhost:4003');

//     newSocket.onopen = () => {
//       console.log('WebSocket connection established');
//     };

//     newSocket.onmessage = (event) => {
//       const [event_type, ...payload_parts] = event.data.split(':');
//       const payload = payload_parts.join(':');

//       if (event_type === 'peer-id') {
//         setMyPeerId(payload);
//         console.log('My Peer ID:', payload);
//       } else if (event_type === 'offer') {
//         const [sender_peer_id, signal] = JSON.parse(payload);
//         console.log('Received offer from', sender_peer_id, 'with signal', signal);
//         handleReceiveOffer(sender_peer_id, signal);
//       } else if (event_type === 'answer') {
//         const [sender_peer_id, signal] = JSON.parse(payload);
//         console.log('Received answer from', sender_peer_id, 'with signal', signal);
//         handleReceiveAnswer(sender_peer_id, signal);
//       }
//     };

//     socketRef.current = newSocket;

//     fetchMessages();

//     return () => {
//       newSocket.close();
//     };
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       if (window.__TAURI_IPC__) {
//         const response = await invoke('get_messages');
//         setMessages(response);
//       } else {
//         console.log('Tauri environment not detected.');
//       }
//     } catch (error) {
//       console.error('Failed to fetch messages:', error);
//     }
//   };

//   const handleSendMessage = async () => {
//     if (message.trim()) {
//       try {
//         await invoke('send_message', { message });
//         setMessage('');
//         fetchMessages();
//         if (peerRef.current) {
//           peerRef.current.send(message);
//         }
//       } catch (error) {
//         console.error('Failed to send message:', error);
//       }
//     }
//   };

//   const handleReceiveOffer = (sender_peer_id, signal) => {
//     console.log('Handling received offer from', sender_peer_id, 'with signal', signal);
//     if (!peerRef.current) {
//       const peer = new Peer({ initiator: false, trickle: false });
//       peer.on('signal', (data) => {
//         console.log('Sending answer:', data);
//         socketRef.current.send(`answer:${JSON.stringify([sender_peer_id, data])}`);
//       });
//       peer.on('data', (data) => {
//         setMessages((prev) => [...prev, data.toString()]);
//         console.log('Received data:', data.toString());
//       });
//       peer.signal(signal);
//       peerRef.current = peer;
//     }
//   };

//   const handleReceiveAnswer = (sender_peer_id, signal) => {
//     console.log('Handling received answer from', sender_peer_id, 'with signal', signal);
//     if (peerRef.current) {
//       peerRef.current.signal(signal);
//     }
//   };

//   const handleConnect = () => {
//     console.log('Attempting to connect with peer ID:', peerId);
//     const peer = new Peer({ initiator: true, trickle: false });
//     peer.on('signal', (data) => {
//       console.log('Sending offer:', data);
//       socketRef.current.send(`offer:${JSON.stringify([peerId, data])}`);
//     });
//     peer.on('data', (data) => {
//       setMessages((prev) => [...prev, data.toString()]);
//       console.log('Received data from peer:', data.toString());
//     });
//     peerRef.current = peer;
//   };

//   return (
//     <div className="App">
//       <h1>Ebe nuka?</h1>
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div key={index} className="chat-message">
//             {msg}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type a message"
//       />
//       <button onClick={handleSendMessage}>Snitch</button>
//       <input
//         type="text"
//         value={peerId}
//         onChange={(e) => setPeerId(e.target.value)}
//         placeholder="Enter Peer ID"
//       />
//       <button onClick={handleConnect}>Connect</button>
//       <div id="peerIdLabel">My Peer ID: <span className='peerIdtext'>{myPeerId}</span></div>
//     </div>
//   );
// }

// export default App2;
import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import './index.css';

function App2() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [peerId, setPeerId] = useState('');
  const [publicIp, setPublicIp] = useState('');
  
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      if (window.__TAURI_IPC__) {
        const response = await invoke('get_messages');
        setMessages(response);
      } else {
        console.log('Tauri environment not detected.');
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      try {
        await invoke('send_message', { message });
        setMessage('');
        fetchMessages();
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  };

  const handleConnect = async () => {
    if (publicIp.trim() && peerId.trim()) {
      const multiaddr = `/ip4/${publicIp}/udp/9090/webrtc-direct/p2p/${peerId}`;
      try {
        await invoke('connect_peer', { multiaddr });
        console.log(`Connected to peer ${peerId} at ${publicIp}`);
      } catch (error) {
        console.error('Failed to connect to peer:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Ebe Nuka?</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
      <input
        type="text"
        value={publicIp}
        onChange={(e) => setPublicIp(e.target.value)}
        placeholder="Enter Public IP"
      />
      <input
        type="text"
        value={peerId}
        onChange={(e) => setPeerId(e.target.value)}
        placeholder="Enter Peer ID"
      />
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
}

export default App2;
