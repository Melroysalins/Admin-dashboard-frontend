import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";

export const BaseUrl = "http://localhost:4000/api/admin";

export const Menulistcontent = [
  {
    id: 101,
    name: "Dashbaord",
    icon: <DashboardIcon />,
    navigate: "/dashboard",
  },
  {
    id: 102,
    name: "Store",
    icon: <StoreIcon />,
    navigate: "/store",
  },
  {
    id: 104,
    name: "Add Products",
    icon: <InventoryIcon />,
    navigate: "/products",
  },
  {
    id: 105,
    name: "Products",
    navigate: "/allproducts",
    icon: <AddLocationAltIcon />,
  },
  {
    id: 106,
    name: "Profile",
    icon: <PersonIcon />,
    navigate: "/profile",
  },
  {
    id: 107,
    name: "Edit",
    navigate: "/editstore",
    icon: <ReceiptIcon />,
  },
  {
    id: 109,
    name: "Review",
    icon: <ThumbUpIcon />,
  },
];

export const EditDetails = [
  {
    id: "1111",
    name: "Edit Your Store",
    icon: <StorefrontIcon />,
    backgroundColor: "#4D4D4D",
    iconcolor: "white",
    navigate: "/editstore",
  },
  {
    id: "1113",
    name: "Edit Profile",
    icon: <PermIdentityIcon />,
    backgroundColor: "#D6EDB9",
    iconcolor: "#474845",
    navigate: "/editprofile",
  },
];

export const DashBoardFilter = [
  {
    id: "2020202",
    name: "New Order",
  },
  {
    id: "2020203",
    name: "Order Delivered",
  },
  {
    id: "2020204",
    name: "Accepted Order",
  },
];
