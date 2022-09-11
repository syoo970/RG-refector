import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  pages: {
    title: string;
    headTo: string;
  }[];
}

const PageList = ({ pages }: Props) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map(({ title, headTo }) => (
        <Button key={title} disableRipple component={NavLink} to={headTo}>
          {title}
        </Button>
      ))}
    </Box>
  );
};

export default PageList;
