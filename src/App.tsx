import * as React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SubComponent from "./subcomponent";

interface StyleTypes {
  root: {
    color: string;
  };
}

interface AppProps {
  cool: boolean;
  man: string;
}

const useStyles = makeStyles<StyleTypes, AppProps>({
  root: {
    color: props => (props.cool ? "white" : "black")
  }
});
const App: React.FC<AppProps> = props => {
  const classes = useStyles(props);
  return (
    <div>
      <Button
        variant="contained"
        className={classes.root}
        fullWidth
        color="secondary">
        Primary
      </Button>
      <SubComponent
        num={23}
        tex="fdg"
        handle={event => {
          event.preventDefault();
        }}
      />
    </div>
  );
};

export default App;
