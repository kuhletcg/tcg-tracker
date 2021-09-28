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

  const loginWithGoogle = () => {
    setIsLoading(true);
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    fireAuth
      .signInWithRedirect(googleProvider)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Header size="medium">
        TCG tracker <Label color="primary">1.0.1 </Label>
      </Header>
    </div>
  );
};
export default HomePage;
