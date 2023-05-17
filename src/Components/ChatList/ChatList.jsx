import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";

import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

export const ChatList = () => {
  const [chatList, setChatList] = useState([
    { name: "Chat-1", id: 1, image: "./lolo.jpg" },
    { name: "OLLOLO2", id: 2, image: "./lolo.jpg" },
    { name: "Sorry MAAAAM", id: 3, image: "./lolo.jpg" },
  ]);
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        {chatList.map((msg) => (
          <ListItem disablePadding key={msg.id}>
            <ListItemButton>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt={msg.name}
                  src={msg.image}
                  sx={{ marginRight: 2 }}
                ></Avatar>
              </Stack>
              <ListItemText primary={msg.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
