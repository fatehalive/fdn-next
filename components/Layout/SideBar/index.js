import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon, 
  SwipeableDrawer 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";
import { toggleNav } from "@/redux/actions/app.reducer";

/* -------------------- SIDEBAR START -------------------- */
export default function SideBar() {
  const { app } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleNav())
  }

  return (
    // <aside>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link href="/editorials">Editorials</Link>
    //       </li>
    //       <li>
    //         <Link href="/reviews">Reviews</Link>
    //       </li>
    //       <li>
    //         <Link href="/studio">Studio</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </aside>
    <StyledDrawer
      anchor={"left"}
      open={app.navigationToggle}
      onClose={handleClose}
      onOpen={() => console.log("")}
      PaperProps={{
        component: "nav"
      }}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={handleClose}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 70 }}>
          <Box>
            <Link href="/">
              <img src="/icons/logo-fd.svg" alt="logo-brand" />
            </Link>
          </Box>
        </Box>
        <List>
          {['Editorials', 'Reviews', 'Studio'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ textAlign: 'center' }}>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: { xd: 'flex', md: 'none' }}}>
        <List>
          <ListItem sx={{ justifyContent: 'center' }}>
            <Button variant="contained">Login</Button>
          </ListItem>
        </List>
      </Box>
    </StyledDrawer>
  )
};

/* -------------------- STYLE -------------------- */
const StyledDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
}));