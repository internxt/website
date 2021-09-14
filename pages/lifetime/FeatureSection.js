import React, { useEffect, useState } from 'react';

const FeatureSection = ({ lang, textContent }) => {

  return (
    <section>
      <div className="flex flex-col items-center my-20 mb-32">

        <div className="flex flex-col items-center text-center mb-24 font-semibold px-6">
          <h2 className="eyebrow text-4xl">
            {textContent.title.line1}<br className="hidden sm:inline-flex"/> {textContent.title.line2}
          </h2>
        </div>

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">

          <div className="flex flex-col items-center text-center space-y-8">
            <img className="h-12 select-none" loading="lazy" src="../../images/lifetime/icons/privacy-icon.png" alt="Eye slash" draggable="false"/>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="font-semibold text-xl text-neutral-900">
                {textContent.features.privacy.title}
              </span>
              <span className="text-neutral-500">
                {textContent.features.privacy.description.line1}<br/>{textContent.features.privacy.description.line2}<br/>{textContent.features.privacy.description.line3}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-8">
            <img className="h-12 select-none" loading="lazy" src="../../images/lifetime/icons/unlimited-icon.png" alt="Infinity" draggable="false"/>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="font-semibold text-xl text-neutral-900">
                {textContent.features.unlimited.title}
              </span>
              <span className="text-neutral-500">
                {textContent.features.unlimited.description.line1}<br/>{textContent.features.unlimited.description.line2}<br/>{textContent.features.unlimited.description.line3}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-8">
            <img className="h-12 select-none" loading="lazy" src="../../images/lifetime/icons/improvement-icon.png" alt="Person group" draggable="false"/>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="font-semibold text-xl text-neutral-900">
                {textContent.features.improvement.title}
              </span>
              <span className="text-neutral-500">
                {textContent.features.improvement.description.line1}<br/>{textContent.features.improvement.description.line2}<br/>{textContent.features.improvement.description.line3}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-8">
            <img className="h-12 select-none" loading="lazy" src="../../images/lifetime/icons/security-icon.png" alt="Lock" draggable="false"/>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="font-semibold text-xl text-neutral-900">
                {textContent.features.security.title}
              </span>
              <span className="text-neutral-500">
                {textContent.features.security.description.line1}<br/>{textContent.features.security.description.line2}<br/>{textContent.features.security.description.line3}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-8">
            <img className="h-12 select-none" loading="lazy" src="../../images/lifetime/icons/new-icon.png" alt="List numbers" draggable="false"/>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="font-semibold text-xl text-neutral-900">
                {textContent.features.new.title}
              </span>
              <span className="text-neutral-500">
                {textContent.features.new.description.line1}<br/>{textContent.features.new.description.line2}<br/>{textContent.features.new.description.line3}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-8">
            <img className="h-12 select-none" loading="lazy" src="../../images/lifetime/icons/support-icon.png" alt="Person group signal" draggable="false"/>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="font-semibold text-xl text-neutral-900">
                {textContent.features.support.title}
              </span>
              <span className="text-neutral-500">
                {textContent.features.support.description.line1}<br/>{textContent.features.support.description.line2}<br/>{textContent.features.support.description.line3}
              </span>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default FeatureSection;
