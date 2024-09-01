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
      >
        <Surveyed
        surveyedName='Click título'
        surveyedDescription='Esto se ha ido de las manos'
      >
        Esto es la prueba
        </Surveyed>
      </Typography>
      <Surveyed
        surveyedName='Click prueba'
        surveyedDescription='Se ha clickado en Click prueba'
      >
        <Button>Click meeee</Button>
      </Surveyed>
    </main>
  );
}
