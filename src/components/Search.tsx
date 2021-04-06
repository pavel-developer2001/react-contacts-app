import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const currencies = [
  {
    value: "MAN",
    label: "man",
  },
  {
    value: "WOMAN",
    label: "woman",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    main: {
      display: "flex",
      alignItems: 'center',
    },
    button: {
      margin: theme.spacing(1),
    },
    modal: {
      display: "block"
    },
    root1: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const Search = () => {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("MAN");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  const [view, setView] = React.useState('list');

  const handleChangeWindow = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };
  return (
    <div className={classes.main}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search by full Name"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <form className={classes.root1} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Gender"
            value={currency}
            onChange={handleChange}
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>

      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Nationality" variant="outlined" />
      </form>

      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<ClearIcon />}
      >
        Clear
      </Button>
      <ToggleButtonGroup orientation="vertical" className={classes.modal} value={view} exclusive onChange={handleChangeWindow}>
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
      
    </ToggleButtonGroup>
    </div>
  );
};

export default Search;
