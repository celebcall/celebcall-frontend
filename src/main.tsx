import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // ✅ 추가

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter> {/* ✅ 여기로 App을 감싸줘야 Routes가 정상 작동 */}
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
