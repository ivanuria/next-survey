import {
  Typography,
  Button
} from '@mui/material'
import Surveyed from '@/app/_suverys_assets/Surveyed';

export default function Home() {
  return (
    <main>
      <Typography
        component='h1'
        variant='h1'
        color='primary'
      >Esto es la prueba</Typography>
      <Surveyed
        surveyedName='Click prueba'
        surveyedDescription='Se ha clickado en Click prueba'
      >
        <Button>Click meeee</Button>
      </Surveyed>
    </main>
  );
}
