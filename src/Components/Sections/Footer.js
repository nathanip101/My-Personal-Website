import { memo } from 'react';
import Socials from '../Socials';

const Footer = memo(() => {
    return (
        <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
            <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
            </div>
            <div className="flex flex-col items-center gap-y-6">
                <div className="flex gap-x-4 text-neutral-500">
                    <Socials />
                </div>
                <span className="text-sm text-neutral-700">© Copyright 2024 Nathan Ip</span>
            </div>
        </div>
    );
});

Footer.displayName = 'Footer';
export default Footer;