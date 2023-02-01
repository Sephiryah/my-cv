import { MainContent, AdditionalInfo } from "./component";

const App = () => {
  return (
    <div className="flex font-sans h-screen">
      <AdditionalInfo />
      <MainContent />
    </div>
  )
}

export default App;