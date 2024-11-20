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
}

function EmailToolbar({ textContent }: Readonly<EmailToolBarProps>) {
  const [email, setEmail] = useState(''); // State for the email input
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [result, setResult] = useState<string | null>(null); // State for result or error
  const [error, setError] = useState<string | null>(null); // State for error

  const handleCheckBreaches = async () => {
    if (!email) {
      setError('Please enter an email address.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.get(`/api/breaches?email=${encodeURIComponent(email)}`);
      setResult(JSON.stringify(response.data, null, 2));
    } catch (err: any) {
      console.error('Error response:', err.response || err); // Log detailed error
      setError(err.response?.data?.error || err.message || 'Something went wrong.');
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
          onChange={(e) => setEmail(e.target.value)} // Update state on input
          placeholder={textContent.placeHolder}
          className="h-14 w-full appearance-none rounded-lg border-2 border-gray-10 bg-white pl-4 pr-14 text-2xl placeholder-gray-30 shadow-subtle outline-none ring-5 ring-primary ring-opacity-0 transition-all delay-150 duration-150 ease-out focus:border-primary focus:ring-opacity-10"
        />
        <Button text={loading ? 'Checking...' : 'Check'} onClick={handleCheckBreaches} disabled={loading} />
      </div>
      <div className="mt-5 flex flex-row items-center space-x-1 text-sm text-gray-50">
        <Info size={16} data-tooltip-id="email-tooltip" />
        <span data-tooltip>{textContent.toolTip}</span>
        <Tooltip id="email-tooltip" place="top">
          {textContent.toolTipEmergent}
        </Tooltip>
      </div>

      {/* Display Result */}
      {result && (
        <div className="bg-green-100 mt-5 w-full max-w-lg rounded-lg p-4 text-sm shadow-md">
          <pre>{result}</pre>
        </div>
      )}

      {/* Display Error */}
      {error && (
        <div className="bg-red-100 text-red-700 mt-5 w-full max-w-lg rounded-lg p-4 text-sm shadow-md">{error}</div>
      )}
    </div>
  );
}

export default EmailToolbar;
