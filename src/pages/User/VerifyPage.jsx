import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function VerifyPage({ code, setCode, firstInputRef, onResend }) {
  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {    //เช็คinputว่าเป็นเลข 0–9 หรือค่าว่าง
      const newCode = [...code];  //แทนที่ตัวเลขในตำแหน่งที่กรอก อัปเดตโค้ดใหม่ใน state
      newCode[index] = value;
      setCode(newCode);
      if (value && index < code.length - 1) { //กรอกเลขได้แบบไม่ต้องคลิกทีละช่อง
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {  
    if (e.key === "Backspace" && !code[index] && index > 0) { //เช็คเงื่อนไขว่าผู้ใช้กดปุ่ม Backspace ,ช่องนี้ไม่มีค่า,ช่องนี้ไม่ใ่ช่องแรก
      document.getElementById(`code-${index - 1}`)?.focus(); //ถ้าเข้าเงื่อนไขย้ายcursor(focus)ไปช่องก่อนหน้า
    }
  };




  // resen popup
  return (
    <Box textAlign="center">
      <Typography sx={{ fontSize: 16, fontWeight: 500, mb: 2, mt: 8, textAlign: "left" }}>
        Enter the 4-digit code sent to your email / phone
      </Typography>

      <Box display="flex" justifyContent="center" gap={2} mb={1}>
        {code.map((c, i) => (
          <TextField
            key={i}
            id={`code-${i}`}
            inputRef={i === 0 ? firstInputRef : null}
            value={c}
            onChange={(e) => handleChange(i, e.target.value)} //กดพิมพ์เลข
            onKeyDown={(e) => handleKeyDown(i, e)} //กดลบเลข
            //ช่องกรอกรหัส
            variant="outlined"
            inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: 24, padding: 12 } }}
            sx={{ width: 60 }}
          />
        ))}
      

      {/*ข้อความใต้ช่องกอกรหัส*/}
      </Box>
      <Typography sx={{ fontSize: 12, color: "grey.600", textAlign: "left", mb: 4, mt: 3 }}>
        Tip: Make sure to check your inbox and spam folders
      </Typography>
      <Box display="flex" justifyContent="flex-start">
        
      
      {/*ปุ่ม resend code*/}
        <Button
          variant="contained"
          onClick={onResend}
          sx={{
            bgcolor: "grey.400",
            color: "black",
            borderRadius: "50px",
            textTransform: "none",
            "&:hover": { bgcolor: "#ECBD35", color: "white" },
          }}
        >
          Resend Code
        </Button>
      </Box>
    </Box>
  );
}
