import { useState, memo } from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

import { Button } from './components/Button';
import { AUTHOR } from 'src/constants';

export const Form = memo(({ addMessage }) => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (chatId) {
      addMessage(chatId, {
        author: AUTHOR.USER,
        value,
      });
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputProps={{ 'data-testid': 'input' }}
      />
      <Button disabled={!value} render={(label) => <div>{label}</div>}>
        send
      </Button>
    </form>
  );
});
