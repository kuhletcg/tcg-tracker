import { Button, Icon, Header, Label } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import history from "../routes/history";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (state.authUser !== null) {
      history.push("/progress-list");
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Header size="medium">
        TCG tracker <Label color="primary">1.0.1 </Label>
      </Header>
    </div>
  );
};
export default HomePage;
