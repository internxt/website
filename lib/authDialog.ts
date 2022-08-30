export default function openAuthDialog(view: 'login' | 'signup') {
  if (view === 'login') {
    window.top?.postMessage('openDialogLogin', '*');
  } else if (view === 'signup') {
    window.top?.postMessage('openDialogSignup', '*');
  }
}
