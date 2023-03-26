import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  const [alertGörünür, setAlertGörünür] = useState(false);
  const handleClick = () => {
    setAlertGörünür(true);
  };

  return (
    <div>
      <div>
        {alertGörünür ? (
          <Alert
            alert="Sitemiz yapım aşamasındadır!"
            kapat={() => setAlertGörünür(false)}
          />
        ) : (
          <Button buton="My Button" onClick={handleClick} />
        )}
      </div>
      <br />
      <ListGroup baslik="Şehirler" />
    </div>
  );
}

export default App;
