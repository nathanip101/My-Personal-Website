import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { classnames } from 'tailwindcss-classnames';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About = memo(() => {
    const { profileImageSrc, description, aboutItems } = aboutData;
    return (
        <Section className="bg-neutral-800" sectionId={SectionId.About}>
            <div className={classnames('grid grid-cols-1 gap-y-4', { 'md:grid-cols-4': !!profileImageSrc })}>
                {!!profileImageSrc && (
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                            <img className="object-cover h-full w-full" alt="about-me-image" src={profileImageSrc} />
                        </div>
                    </div>
                )}
                <div className={classnames('col-span-1 flex flex-col gap-y-6', { 'md:col-span-3': !!profileImageSrc })}>
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-2xl font-bold text-white text-left">About me</h2>
                        <p className="prose prose-sm text-gray-300 sm:prose-base text-left">{description}</p>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                        {aboutItems.map(({ label, text, Icon }, idx) => (
                            <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                                {<FontAwesomeIcon icon={Icon} className="h-5 w-5 text-white" />}
                                <span className="text-sm font-bold text-white">{label}:</span>
                                <span className=" text-sm text-gray-300">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
});

About.displayName = 'About';
export default About;
