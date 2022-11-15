import MUIButton from '@mui/material/Button';

export const Button = ({
  disabled = false,
  click = () => null,
  // children,
  render,
}) => (
  <MUIButton
    disabled={disabled}
    variant="contained"
    type="submit"
    onClick={click}
    data-testid="button"
  >
    {render && render('send')}
  </MUIButton>
);
