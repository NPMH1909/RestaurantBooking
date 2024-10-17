import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const ModalComponent = ({ open, setOpen }) => {
  const [contactName, setContactName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [note, setNote] = React.useState("");

  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    console.log(`Tên: ${contactName}, SĐT: ${phone}, Email: ${email}, Ghi chú: ${note}`);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      handler={handleClose}
      className="max-w-md mx-auto border-4 border-[#e6d3b9] bg-[#faebd7]"
      style={{ margin: "auto" }}
    >
      <div>
      <DialogHeader className="flex flex-col items-start border-b-2 border-gray-300 pb-4">
        <Typography className="text-lg font-semibold">Thông tin người đặt</Typography>
      </DialogHeader>
      <DialogBody>
        <div>
          <Typography className="mb-1" color="blue-gray" variant="h6">Tên khách hàng</Typography>
          <Input
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            className="mb-2 bg-white w-full"
          />
        </div>
        <div>
          <Typography className="mb-1" color="blue-gray" variant="h6">Số điện thoại</Typography>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-4 bg-white w-full"
          />
        </div>
        <div>
          <Typography className="mb-1" color="blue-gray" variant="h6">Email</Typography>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mb-2 bg-white w-full"
          />
        </div>
        <div>
          <Typography className="mb-1" color="blue-gray" variant="h6">Ghi chú</Typography>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mb-2 bg-white w-full"
          />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2 flex justify-end">
      <Button variant="text" color="gray" onClick={handleClose}>
          Huỷ
        </Button>
        <Button variant="gradient" color="blue" onClick={handleConfirm}>
          Tiếp tục
        </Button>
      </DialogFooter>
      </div>
    </Dialog>
  );
};

export default ModalComponent;
