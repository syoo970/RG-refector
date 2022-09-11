import { useState } from "react";
import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Avatar from "@/components/Avatar";

const options = [{ title: "마이페이지", headTo: "/mypage" }];

const UserBlock = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleClick} sx={{ p: 0 }}>
        <Avatar src="https://cdn.pixabay.com/photo/2022/04/03/13/54/woman-7109043_960_720.jpg" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!anchorEl}
        onClose={handleClose}
      >
        {options.map(({ title, headTo }) => (
          <MenuItem key={title} component={Link} to={headTo}>
            {title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserBlock;
