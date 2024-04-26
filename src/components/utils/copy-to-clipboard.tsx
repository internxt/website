import { notificationService } from '../Snackbar';

export default function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  notificationService.openSuccessToast('Copied to clipboard');
}
