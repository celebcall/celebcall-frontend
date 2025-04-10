import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ChatList from './pages/ChatList';
import Call from './pages/Call';
import Store from './pages/Store';
import More from './pages/More';



function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chats" element={<ChatList />} />
            <Route path="/call" element={<Call />} />
            <Route path="/store" element={<Store />} />
            <Route path="/more" element={<More />} />
        </Routes>

    );
}

export default App
