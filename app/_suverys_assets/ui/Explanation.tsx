import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog
} from '@mui/material';

export default function Explanation({
  survey,
  step,
  title,
  content,
  open,
  onNext,
}:
  Readonly<{
    survey: string,
    step: number,
    title: string,
    content: string,
    open: boolean,
    onNext: Function
  }>
) {
  return (
    <Dialog
      open={open}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={(e: React.MouseEvent<HTMLElement>) => onNext()}
        >Siguiente</Button>
      </DialogActions>
    </Dialog>
  )
}