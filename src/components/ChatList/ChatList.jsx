import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { Chat } from 'src/constants';




export const ChatList = ({ chats, onAddChat }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });
      setValue('');
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink
              to={`/chats/${chat.id}`}
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'blue',
              })}
            >
              {chat.name}
            </NavLink>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>create chat</button>
      </form>
    </>
  );
};
