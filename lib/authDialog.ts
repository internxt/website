export default function openAuthDialog(view: 'login' | 'signup') {
  if (view === 'login') {
    window.top?.postMessage('openDialogLogin', window.location.origin);
  } else if (view === 'signup') {
    window.top?.postMessage('openDialogSignup', window.location.origin);
  }
}
