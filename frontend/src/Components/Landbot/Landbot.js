import { useEffect } from "react";

const LandbotChat = () => {
  useEffect(() => {
    const loadLandbot = () => {
      if (window.Landbot) {
        new window.Landbot.Livechat({
          configUrl: "https://storage.googleapis.com/landbot.online/v3/H-2860620-CL992XZLRUCJFCVK/index.json",
        });
      } else {
        console.error("Landbot failed to load.");
      }
    };

    const script = document.createElement("script");
    script.id = "landbot-script";
    script.type = "module";
    script.async = true;
    script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";

    script.onload = loadLandbot;
    script.onerror = () => console.error("Landbot script failed to load.");

    document.body.appendChild(script);
  }, []);

  return null; // No UI, just loads the chatbot
};

export default LandbotChat;
