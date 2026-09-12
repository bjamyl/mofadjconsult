import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0A3D42",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 88, fontWeight: 600, color: "#fff" }}>Mofad-J.</div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#8FCFCB" }}>
          Project Management Consulting in Ghana
        </div>
      </div>
    ),
    { ...size }
  );
}
