// import * as React from "react";
import React,{useEffect} from 'react';
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';


import { createBrowserHistory } from '@remix-run/router';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const history= createBrowserHistory();
  
 
  useEffect(()=>{
   if(value===0){
        window.history.pushState({},undefined,"/")}
        else if(value===1){
          window.history.pushState({},undefined,"/movies")
        }
        else if(value===2){
          window.history.pushState({},undefined,"/series")
        }
        else if(value===3){
          window.history.pushState({},undefined,"/search")
        }
  }
      ,[value,history]);
      
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 100,
        backgroundColor:'black',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
