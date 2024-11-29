import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import axios from 'axios';
import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';

interface EmailToolBarProps {
  textContent: HaveIbeenPwnedText['HeroSection']['EmailToolBar'];
  onResultChange: (result: any[]) => void;
  onResultPastesChange: (result: any[]) => void;
  onErrorChange: (error: string | null) => void;
}

export const EmailToolbar = ({
  textContent,
  onResultChange,
  onErrorChange,
  onResultPastesChange,
}: Readonly<EmailToolBarProps>) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckEmail = async () => {
    if (!email.trim()) {
      onErrorChange(textContent.pleaseEnterEmail);
      onResultChange([]);
      onResultPastesChange([]);
      return;
    }

    if (loading) return;

    setLoading(true);
    onErrorChange(null);
    onResultChange([]);
    onResultPastesChange([]);

    try {
      const response = await axios.get(`/api/dark-web-monitor/breaches?email=${encodeURIComponent(email)}`);
      if (response.data && response.data.length > 0) {
        onResultChange(response.data);
      } else {
        onResultChange([]);
        onErrorChange(textContent.noBreachesFound);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || textContent.errorPwned;
      onErrorChange(errorMessage);
    } finally {
      setLoading(false);
    }
    try {
      const responsePastes = await axios.get(`/api/dark-web-monitor/pastes?email=${encodeURIComponent(email)}`);
      if (responsePastes.data && responsePastes.data.length > 0) {
        onResultPastesChange(responsePastes.data);
      } else {
        onResultPastesChange([]);
        onErrorChange(textContent.noBreachesFound);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || textContent.errorPwned;
      onResultPastesChange(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full max-w-3xl flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 p-9 ">
      <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={textContent.placeHolder}
          className="h-14 w-full appearance-none rounded-lg border-2 border-gray-10 bg-white pl-4 pr-14 text-2xl placeholder-gray-30 shadow-subtle outline-none ring-5 ring-primary ring-opacity-0 transition-all delay-150 duration-150 ease-out focus:border-primary focus:ring-opacity-10"
        />
        <Button
          text={loading ? textContent.checking : textContent.check}
          onClick={handleCheckEmail}
          disabled={loading}
        />
      </div>

      <div className="mt-5 flex flex-row items-center space-x-1 text-sm text-gray-50">
        <Info size={16} data-tooltip-id="email-tooltip" />
        <span data-tooltip>{textContent.toolTip}</span>
        <Tooltip id="email-tooltip" place="top">
          {textContent.toolTipEmergent}
        </Tooltip>
      </div>
    </div>
  );
};

export default EmailToolbar;
