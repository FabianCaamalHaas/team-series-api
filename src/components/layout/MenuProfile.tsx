import { AccountCircle, AttachFile } from "@mui/icons-material";
import { MenuItem, Menu, Badge } from "@mui/material";

interface Props {
  menuId: string;
  show: boolean;
  handleMenu: () => void;
  anchor: Element | null;
}

export const MenuProfile = ({ menuId, show, handleMenu, anchor }: Props) => {
  return (
    <Menu
      id={menuId}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={show}
      onClose={handleMenu}
    >
      <MenuItem onClick={handleMenu}>
        <Badge>
          <AccountCircle />
        </Badge>
        <p>Profile</p>
      </MenuItem>

      <MenuItem onClick={handleMenu}>
        <Badge>
          <AttachFile />
        </Badge>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
};
