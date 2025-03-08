import { Button, QRCode } from "antd";
import React, { useRef } from "react";
import "./style.css";
import { TabletSmartphone } from "lucide-react";
export default function ComponentQrCode() {
  const qrRef = useRef<any>(null);

  const downloadQRCode = (value: string) => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      if (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL(`image/${value}`);
        link.download = `qrcode.${value}`;
        link.click();
      }
    }
  };

  return (
    <div className="qr">
      <div className="title">QR text: https://cutt.ly/12321321321421421</div>

      <div ref={qrRef} className="qr-code">
        <QRCode value="https://example.com" />
      </div>
      <div className="btn-down">
        <Button onClick={() => downloadQRCode("png")} className="btn-png">
          <span>Download</span>
          <span>PNG</span>
          <TabletSmartphone />
        </Button>

        <Button onClick={() => downloadQRCode("jpeg")} className="btn-jpeg">
          <span>Download</span>
          <span>JPEG</span>
          <TabletSmartphone />
        </Button>

        <Button onClick={() => downloadQRCode("webp")} className="btn-webp">
          <span>Download</span>
          <span>WEBP</span>
          <TabletSmartphone />
        </Button>
      </div>
    </div>
  );
}
