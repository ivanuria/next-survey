import SurveryThemeProvider from "./theme/SurveyThemeProvider";
// Components
import Header from "./ui/Header";

export default function Survey() {
  if (process.env.SURVEY !== 'true') return null
  return (
    <SurveryThemeProvider>
      <Header />
    </SurveryThemeProvider>
  )
}