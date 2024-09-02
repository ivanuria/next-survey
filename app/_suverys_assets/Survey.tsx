import SurveryThemeProvider from "./theme/SurveyThemeProvider";
// Components
import Header from "./ui/Header";
import Poll from "./ui/Poll";

export default function Survey() {
  if (!process.env.NEXT_PUBLIC_SURVEY) return null
  return (
    <SurveryThemeProvider>
      <Header />
      <Poll />
    </SurveryThemeProvider>
  )
}