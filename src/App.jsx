import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { AUTHOR} from './constants';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';

const defaultChats = [
  {
    id: '1',
    name: 'Dan',
  },
  {
    id: '2',
    name: 'Nick',
  },
];

const defaultMessages = {
  '1': [{ author: AUTHOR.USER, value: 'Hello, world' }],
  '2': [{ author: AUTHOR.BOT, value: 'hey you' }],
};

export const App = () => {
  const [chats, setChats] = useState(defaultChats);
  const [messages, setMessages] = useState(defaultMessages);

  const onAddChat = (newChat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    });
  };

  const onAddMessage = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats">
          <Route
            index
            element={<ChatList chats={chats} onAddChat={onAddChat} />}
          />
          <Route
            path=":chatId"
            element={
              <ChatPage
                chats={chats}
                onAddChat={onAddChat}
                messages={messages}
                onAddMessage={onAddMessage}
              />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  );
};
