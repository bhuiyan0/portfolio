import { ImageResponse } from "next/og";

// Code-generated "MB" monogram favicon — no asset file needed.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c3aed",
          color: "white",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          borderRadius: 14,
        }}
      >
        MB
      </div>
    ),
    { ...size }
  );
}
