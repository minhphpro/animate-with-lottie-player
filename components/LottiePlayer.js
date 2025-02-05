import { useEffect } from "react";

const LottiePlayer = ({ src, loop = true, autoplay = true, style = {} }) => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <lottie-player
      src={src}
      loop={loop}
      autoplay={autoplay}
      style={style}
      background="transparent"
    ></lottie-player>
  );
};

export default LottiePlayer;
