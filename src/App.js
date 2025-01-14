// import React,{useState} from 'react';
// import {Button,Stack,Box} from '@mui/material';


// function App() {
//   const [showVideo, setshowVideo] = useState(false);

//   const handleClick = () => {
//     setshowVideo(true);
//   }

//   const handleClose = () => {
//     setshowVideo(false);
//   }
//   return (
//     <Box sx = {{
//       width : '100%',
//       height : "100vh",
//       display : "flex",
//       justifyContent : "center"
//       }}
//     >
//       {!showVideo ? (
//         <Stack spacing = {2} direction = "row">
//           <Button variant = "contained" color = "primary" onClick = {handleClick}>
//             Show Full Video
//           </Button>
//         </Stack>
//       ) : (
//         <Box sx = {{
//           position : "fixed",
//           top : 0,
//           left : 0,
//           width : "100%",
//           height : "100%",
//           backgroundColor : "black",
//           zIndex : 1000,
//           display : "flex",
//           justifyContent : "center",
//           alignItems : "center",
//         }}> 
//         <video
//           src="F:\FE Projects\HPBD HTran\hpbd_htran\src\components\Video.mp4"
//           autoPlay
//           controls
//           style ={{
//             width : "100%",
//             height : "100%",
//             objectFit : "contain",
//           }}/>
//         <Button
//          variant = "contained" 
//          color = "secondary" 
//          sx ={{position : "absolute", top : "10px",right: "10px" ,zIndex : 1001 }} 
//          onClick = {handleClose}
//         >
//          Close
//         </Button>
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Button, Stack, Box } from "@mui/material";
import videohpbd from "./assets/videohpbd.mp4";

function App() {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        marginBottom: "100px",
        justifyContent: "center",
        alignItems: "center", 
        position: "fixed",
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/004/548/332/non_2x/glossy-happy-birthday-balloons-background-illustration-free-vector.jpg")', // Để dễ nhìn thấy
      }}
    >
      {!showVideo ? (
        <Stack spacing={2} direction="row" >
          <Button variant="contained" color="error" sx= {{position: "absolute",
            bottom: "200px", 
            left: "50%", 
            transform: "translateX(-50%)", 
            zIndex: 1001,
           
          }}
           borderRadius = "4px"
            onClick={handleClick}>
            Click here Htrannn
          </Button>
        </Stack>
      ) : (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Đảm bảo rằng src video đúng */}
          <video
            src={videohpbd}
            controls
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            width = "100%"
            height = "auto"
          />
          <Button
            variant="contained"
            color="error"
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1001,
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default App;

