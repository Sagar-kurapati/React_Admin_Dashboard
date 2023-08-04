 import { useState } from "react";
 import {Sidebar, Menu ,MenuItem} from "react-pro-sidebar";
 import {Box, IconButton ,Typography , useTheme} from '@mui/material';
 import { Link }from 'react-router-dom';
//  import "react-pro-sidebar/dist/css/styles.css";
 import {tokens} from "../../theme";
 import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
 import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
 import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
 import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
 import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
 import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
 import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
 import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
 import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
 import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
 import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
 import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Dashboard from "../dashboard";
import Team from "../team";
import { Contacts } from "@mui/icons-material";


// const Item = ({ title, to, icon, selected, setSelected }) => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     return (
//       <MenuItem
//         active={selected === title}
//         style={{
//           color: colors.grey[100],
//         }}
//         onClick={() => setSelected(title)}
//         icon={icon}
//       >
//         <Typography>{title}</Typography>
//         <Link to={to} />
//       </MenuItem>
//     );
//   };


 const Sidebar1 =() =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed]= useState(false);
    const [selected, setSelected] = useState("Dashboard"); 

    return (
        <Box  
        sx={{
            "& .Sidebar-inner":{
                background:`${colors.primary[400]} !important`
            },
            "& .icon-wrapper":{
                backgroundColor: "transparent !important"
            },
            "& .inner-item":{
                padding: "5px 35px 5px 20px !important"
            },
            "& .Sidebar-item: hover":{
                color: "#868dfb !important"
            },
            "& .menu-item.active":{
                color: "#6070fa !important"
            },
        }}
        >
        <Sidebar collapsed={isCollapsed}
         backgroundColor={colors.primary[400]} 
        >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
               
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="200px"
                  height="150px"
                  margin="50px"
                  src={`../../assests/PROFILE.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Sagar Kurapati
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                   React Admin Dashboard
                </Typography>
              </Box>
            </Box>
          )}
            {/* menu items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

          <MenuItem 
          component={<Link to="/" />} 
           active={selected === Dashboard}
           style={{
           color: colors.grey[100],
                  }}
           onClick={() => setSelected(Dashboard)}
           icon={<HomeOutlinedIcon />}> Dashboard
           </MenuItem>

            {/* <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Dataa
            </Typography>
            <MenuItem 
          component={<Link to="/team" />} 
          //  active={selected === Team}  uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Team)} uncomment later
           icon={<PeopleOutlinedIcon />}> Manage Team
           </MenuItem>
            {/* <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <MenuItem 
          component={<Link to="/contacts" />} 
          //  active={selected === Contacts}  uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Contacts)} uncomment later
           icon={<ContactsOutlinedIcon />}> Contacts Information
           </MenuItem>

            {/* <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
           
           <MenuItem 
          component={<Link to="/invoices" />} 
          //  active={selected === Invoices}  uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Invoices)} uncomment later
           icon={<ReceiptOutlinedIcon />}>Invoices Balances
           </MenuItem>

            {/* <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <MenuItem 
          component={<Link to="/form" />} 
          //  active={selected === Form} uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Form)} uncomment later
           icon={<PersonOutlinedIcon />}>Profile Form
           </MenuItem>
            {/* <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

          <MenuItem 
          component={<Link to="/calendar" />} 
          //  active={selected === Calendar} uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Calendar)} uncomment later
           icon={<CalendarTodayOutlinedIcon />}> Calendar
           </MenuItem>

            {/* <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <MenuItem 
          component={<Link to="/faq" />} 
          //  active={selected === FAQ} uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(FAQ)}  uncomment later
           icon={<HelpOutlineOutlinedIcon />}>FAQ Page
           </MenuItem>

            {/* <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <MenuItem 
          component={<Link to="/bar" />} 
          //  active={selected === Bar}  uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Bar)}   uncomment later
           icon={<BarChartOutlinedIcon />}>Bar Chart
           </MenuItem>

            {/* <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <MenuItem 
          component={<Link to="/pie" />} 
          //  active={selected === Pie}  uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Pie)}   uncomment later
           icon={<PieChartOutlineOutlinedIcon  />}>Pie Chart
           </MenuItem>

            {/* <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <MenuItem 
          component={<Link to="/line" />} 
          //  active={selected === Line}  uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Line)} uncomment later
           icon={<TimelineOutlinedIcon />}>Line Chart
           </MenuItem>

            {/* <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <MenuItem 
          component={<Link to="/goegraphy" />} 
          //  active={selected === Geography} uncomment later
           style={{
           color: colors.grey[100],
                  }}
          //  onClick={() => setSelected(Geography)}  uncomment later
           icon={<MapOutlinedIcon />}>Geography Chart
           </MenuItem>

            {/* <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </Sidebar>

         </Box>
     );
};
export default Sidebar1;