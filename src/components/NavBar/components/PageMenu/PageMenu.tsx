import { useState } from "react";
import { IconButton, Icon, Menu, MenuItem, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Text from "@/components/Text";

interface Props {
  pages: {
    title: string;
    headTo: string;
  }[];
}

const PageMenu = ({ pages }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
      <IconButton size="large" onClick={handleOpen}>
        <Icon>menu</Icon>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={!!anchorEl}
        onClose={handleClose}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        {pages.map(({ title, headTo }) => (
          <MenuItem key={title} component={NavLink} to={headTo}>
            <Text textAlign="center">{title}</Text>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default PageMenu;
