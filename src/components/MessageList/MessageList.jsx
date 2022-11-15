import { Message } from 'src/constants';

export const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, idx) => (
        <li key={idx} data-testid="li">
          {message.author}: {message.value}
        </li>
      ))}
    </ul>
  );
};
