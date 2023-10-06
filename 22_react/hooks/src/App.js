import Faq from "./components/Faq";
import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemoEx from "./components/UseMemoEx";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle('React Hooks 학습');
  
  return (
    <div className="App">
      <h1>Hooks Project</h1>
      <UseMemoEx />
      <UseCallbackEx />
      <UseCallbackEx2 postId={7}/>
      <UseReducer />
      <Faq />
    </div>
  );
}

export default App;
