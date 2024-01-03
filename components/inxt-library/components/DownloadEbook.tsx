import { FileArrowDown } from '@phosphor-icons/react';
import TextInput from '../../components/TextInput';
import { useState } from 'react';
import Header from '../../shared/Header';
import { notificationService } from '../../Snackbar';
import axios from 'axios';
import CheckboxItem from '../../shared/CheckboxItem';

const DownloadEbook = ({ textContent, bookUrl, setBannerVisible }) => {
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const isDownloadButtonDisabled = !secondCheckbox || firstName === '' || emailAddress === '';

  const subscribeToMailerlite = async (email) => {
    await axios
      .post(`api/subscribe`, {
        email,
        firstName,
        groups: [process.env.NEXT_PUBLIC_EBOOK_GROUP_ID],
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const downloadPdf = async (eBook) => {
    const link = document.createElement('a');
    link.href = eBook;
    link.download = eBook.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadEbook = async () => {
    try {
      await downloadPdf(bookUrl);

      await subscribeToMailerlite(emailAddress);

      window.gtag('event', `${bookUrl.split('/').pop().split('.')[0]}_downloaded`);

      notificationService.openSuccessToast('eBook downloaded');
    } catch (error) {
      notificationService.openErrorToast('Error downloading eBook');
    } finally {
      setFirstName('');
      setEmailAddress('');
      setFirstCheckbox(false);
      setSecondCheckbox(false);
      setBannerVisible(true);
    }
  };

  return (
    <div className="flex max-w-[533px] flex-col items-center space-y-6 lg:items-start">
      <div className="flex w-max flex-row items-center space-x-3 rounded-lg bg-gray-5 py-2 px-4">
        <FileArrowDown className="text-primary" size={32} />
        <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
      </div>
      <div className="flex flex-col space-y-8 text-center lg:text-left">
        <Header>{textContent.title}</Header>
        <p className="text-center text-xl text-gray-80 lg:text-left">{textContent.subtitle}</p>
      </div>
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <TextInput
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
            className="lg:max-w-[240px]"
            placeholder={textContent.firstPlaceholder}
            name={textContent.firstPlaceholder}
            value={firstName}
          />
          <TextInput
            type="text"
            onChange={(e) => setEmailAddress(e.target.value)}
            className="lg:max-w-[240px]"
            autoComplete="off"
            placeholder={textContent.secondPlaceholder}
            name={textContent.secondPlaceholder}
            value={emailAddress}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-gray-80">{textContent.checkboxTitle}</p>
          <div className="flex flex-col space-y-3">
            <CheckboxItem checked={firstCheckbox} setCheckbox={setFirstCheckbox} label={textContent.firstCheckbox} />
            <CheckboxItem checked={secondCheckbox} setCheckbox={setSecondCheckbox} label={textContent.secondCheckbox} />
          </div>
        </div>
        <button
          onClick={() => {
            handleDownloadEbook();
          }}
          className={`w-full rounded-lg lg:w-max ${
            isDownloadButtonDisabled ? 'bg-gray-10' : 'bg-primary hover:bg-primary-dark'
          } py-3 px-14 font-medium text-white`}
          disabled={isDownloadButtonDisabled}
        >
          {textContent.cta}
        </button>
      </div>
    </div>
  );
};

export default DownloadEbook;
