import { useState } from 'react';

const AndroidSmartBanner = ({ installPrompt }) => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <button
      className={`fixed bottom-0 z-50 ${
        showBanner ? 'flex' : 'hidden'
      } text-medium w-full flex-col justify-center space-y-5 bg-primary px-6 py-3 text-lg text-white`}
      onClick={() => {
        if (installPrompt) {
          installPrompt.prompt(); // Wait for the user to respond to the prompt
          installPrompt.userChoice.then((choice) => {
            if (choice.outcome === 'accepted') {
              console.log('User accepted');
            } else {
              console.log('User dismissed');
            }
          });
        }
      }}
    >
      Download Internxt Drive for Android
    </button>
  );
};

{
  /* <button
  className={`fixed top-0 left-0 z-30 flex h-16 w-screen flex-col items-center justify-center bg-primary font-medium text-white`}
  onClick={() => {
    if (installPrompt) {
      installPrompt.prompt(); // Wait for the user to respond to the prompt
      installPrompt.userChoice.then((choice) => {
        if (choice.outcome === 'accepted') {
          console.log('User accepted');
        } else {
          console.log('User dismissed');
        }
      });
    }
  }}
>
  Install Internxt Drive in your device?
</button>; */
}

export default AndroidSmartBanner;
