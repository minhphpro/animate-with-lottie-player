"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function Home() {
  return (
    <div className="w-full max-w-ful">
      <div className="flex justify-center">
        <LottiePlayer
          style={{ width: "100%", height: "auto", maxHeight: "380px" }}
          src="/star_wings.json"
        />
      </div>
    </div>
  );
}
