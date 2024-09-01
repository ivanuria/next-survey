'use client';
import { Box } from '@mui/material'

export default function Surveyed({
  children,
  surveyedName,
  surveyedDescription,
}:
  Readonly<{
  children: React.ReactNode;
  surveyedName: string;
  surveyedDescription: string;
}> ) {

  if (!process.env.NEXT_PUBLIC_SURVEY) {
  return (
    <>
      {children}
    </>
  )
}

const handleClick = () => {
  console.log(surveyedName)
  console.log(surveyedDescription)
  return null
}

return (
  <Box onClick={handleClick}>
    {children}
  </Box>
);
}