import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import "./index.css";
import OrderListComponent from "../orderListComponent";
import TotalAmount from "../totalAmount";
import OrderStatusComponent from "../orderStatus";
import { Height } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "40%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 21,
  p: 4,
  borderRadius: "8px",
  cursor: "pointer",
};
const style2 = {
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 21,
  p: 2,
  borderRadius: "8px",
  cursor: "pointer",
  height: "100%",
};

export default function OrderModal({
  open1,
  setOpen1,
  data,
  setProductList,
  setOrder,
}) {
  const [isScreenSmall, setIsScreenSmall] = React.useState(
    window.innerWidth <= 560
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 560);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={!isScreenSmall ? style : style2}>
            <div className="CloseContainner">
              <CloseIcon
                sx={{ fontSize: "17px", fontWeight: "bold" }}
                onClick={() => setOpen1(false)}
              />
            </div>
            <Typography
              id="spring-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: "600" }}
            >
              Order Details
            </Typography>
            <Box className="OrderList_Containner">
              {data?.productDetails?.map((list) =>
                list?.productDetails?.map((element) => (
                  <OrderListComponent key={element?._id} info={element} />
                ))
              )}
            </Box>
            <TotalAmount total={data?.productDetails?.[0]?.totalamount} />
            <OrderStatusComponent
              setOpen1={setOpen1}
              open1={open1}
              data={data?.productDetails}
              setOrder={setOrder}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
