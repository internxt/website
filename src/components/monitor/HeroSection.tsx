import React, { useState } from 'react';
import axios from 'axios';
import Header from '@/components/shared/Header';
import EmailToolbar from './components/EmailToolBar';
import { HaveIbeenPwnedText, Breach, Paste } from '@/assets/types/have-i-been-pawned';
import PwnedStatusSection from './PwnedStatusSection';
import LoadingPulse from '../shared/loader/LoadingPulse';
import { ErrorSection } from './ErrorSection';

interface HeroSectionProps {
  textContent: HaveIbeenPwnedText['HeroSection'];
}

type ViewProps = 'default' | 'success' | 'loading' | 'error';

export const HeroSection: React.FC<HeroSectionProps> = ({ textContent }) => {
  const [breaches, setBreaches] = useState<Breach[]>([]);
  const [pastes, setPastes] = useState<Paste[]>([]);
  const [view, setView] = useState<ViewProps>('default');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const isFetchingData = view === 'loading';

  const onResultBreachesChange = (data: Breach[]) => setBreaches(data);
  const onResultPastesChange = (data: Paste[]) => setPastes(data);
  const onErrorChange = (err: string) => {
    setBreaches([]);
    setPastes([]);
    setErrorMessage(err);
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleCheckEmail = async (email: string) => {
    if (!email.trim()) {
      onErrorChange(textContent.EmailToolBar.pleaseEnterEmail);
      setView('error');
      return;
    }

    if (isFetchingData) return;

    setView('loading');
    onErrorChange('');
    onResultBreachesChange([]);
    onResultPastesChange([]);

    try {
      const breachesPromise = axios.get(`/api/dark-web-monitor/breaches?email=${encodeURIComponent(email)}`);
      await sleep(7000);
      const pastesPromise = axios.get(`/api/dark-web-monitor/pastes?email=${encodeURIComponent(email)}`);

      const promises = await Promise.all([breachesPromise, pastesPromise]);

      const [breaches, pastes] = promises;
      onResultBreachesChange(breaches.data);
      onResultPastesChange(pastes.data);
      setView('success');
    } catch (err: any) {
      const statusCode = err.response?.status;

      if (statusCode === 400) {
        onErrorChange(textContent.breaches.error400);
      } else if (statusCode === 500) {
        onErrorChange(textContent.breaches.error500);
      } else {
        onErrorChange(textContent.breaches.error405);
      }

      setView('error');
    }
  };

  return (
    <section className="flex justify-center overflow-hidden pt-32">
      <div className="flex w-full flex-col items-center justify-center space-y-5 px-4 md:max-w-[1000px]">
        <div className="flex w-full max-w-[895px] flex-col items-center justify-center text-center">
          <Header isToolsPage>{textContent.title}</Header>
          <p className="pt-5 text-xl font-bold text-gray-80">{textContent.subtitle}</p>
          <p className="font-regular pt-5 text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center pb-10">
          <EmailToolbar
            textContent={textContent.EmailToolBar}
            isFetchingData={isFetchingData}
            handleCheckEmail={handleCheckEmail}
          />
        </div>
        {isFetchingData ? (
          <div className="relative flex h-40 w-full flex-col">
            <LoadingPulse />
          </div>
        ) : view === 'error' ? (
          <ErrorSection errorMessage={errorMessage} />
        ) : (
          view === 'success' && (
            <PwnedStatusSection
              breaches={breaches}
              resultPastes={pastes}
              textContent={{
                PwnedSection: textContent.PwnedSection,
                AllGoodSection: textContent.AllGoodSection,
              }}
            />
          )
        )}
      </div>
    </section>
  );
};
