import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";

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
    id: 103,
    name: "order Delivered",
    icon: <DeliveryDiningIcon />,
    navigate: "/order",
  },
  {
    id: 104,
    name: "Add Products",
    icon: <InventoryIcon />,
    navigate: "/products",
  },
  {
    id: 105,
    name: "Address",
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
    name: "Bills",
    icon: <ReceiptIcon />,
  },
  {
    id: 108,
    name: "Rating",
    icon: <StarIcon />,
  },
  {
    id: 109,
    name: "Review",
    icon: <ThumbUpIcon />,
  },
];
