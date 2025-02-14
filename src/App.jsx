import { useState } from 'react' 
import "./component/Style.css";

import NotificationContainer from './component/NotificationContainer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NotificationContainer/>
   </>
  )
}

export default App;
