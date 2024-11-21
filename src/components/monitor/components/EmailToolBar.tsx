import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import axios from 'axios';

interface EmailToolBarProps {
  textContent: {
    placeHolder: string;
    toolTip: string;
    toolTipEmergent: string;
  };
  onResultChange: (result: any[]) => void;
  onErrorChange: (error: string | null) => void;
}

function EmailToolbar({ textContent, onResultChange, onErrorChange }: Readonly<EmailToolBarProps>) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckEmail = async () => {
    if (!email) {
      onResultChange([]);
      return;
    }

    setLoading(true);
    onErrorChange(null);
    onResultChange([]);

    try {
      const response = await axios.get(`/api/breaches?email=${encodeURIComponent(email)}`);
      if (response.data && response.data.length > 0) {
        onResultChange(response.data);
      } else {
        onResultChange([]);
      }
    } catch (err: any) {
      onErrorChange(err.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full max-w-3xl flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 p-9">
      <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={textContent.placeHolder}
          className="h-14 w-full appearance-none rounded-lg border-2 border-gray-10 bg-white pl-4 pr-14 text-2xl placeholder-gray-30 shadow-subtle outline-none ring-5 ring-primary ring-opacity-0 transition-all delay-150 duration-150 ease-out focus:border-primary focus:ring-opacity-10"
        />
        <Button text={loading ? 'Checking...' : 'Check'} onClick={handleCheckEmail} disabled={loading} />
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
}

export default EmailToolbar;
