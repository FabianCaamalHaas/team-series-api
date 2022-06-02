import { 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon,
  ListItemText
} from '@mui/material';

import { 
  ChevronLeft,
  MoveToInbox as InboxIcon,
  Mail as MailIcon
} from '@mui/icons-material';

interface Prop {
  open: boolean,
  changeOpen: () => void
}

export const DrawerApp = ({ open = false, changeOpen }: Prop) => {
  return (
    <Drawer open={open} onClose={changeOpen} >
      <div>
        <IconButton onClick={changeOpen} >
          <ChevronLeft />
        </IconButton>
      </div>

      <Divider />
      
      <List className='' >
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Drawer>
  )
}
