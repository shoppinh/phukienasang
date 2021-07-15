import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import "./MobileCartForm.css";
const MobileCartForm = () => {
  return (
    <div className="MobileCartForm">
      <div className="MobileCartForm__TextArea">
        <input placeholder="Họ và tên" type="text" />
        <input placeholder="Địa chỉ" type="text" />
        <input placeholder="Số điện thoại" type="text" />
      </div>
      <div className="MobileCartForm__Control">
        <div className="MobileCartForm__Checkout">
          <CheckCircleIcon style={{ color: "orange" }} />
          <div className="MobileCartForm__Total">Tổng cộng</div>
          <div>223123 VND</div>
        </div>
        <div className="MobileCartForm__Action">
          <Button
            variant="contained"
            style={{ color: "grey", backgroundColor: "orange", width: "47%" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "red", width: "47%" }}
          >
            Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileCartForm;
