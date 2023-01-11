import { memo } from 'react';
import { SectionId } from '../../data/data';

const NavBar = memo(() => {
    const baseClass = "-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100";
    const navSections = [SectionId.About, SectionId.Resume, SectionId.Work, SectionId.Testimonials, SectionId.Contact];
    return (
        <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block">
            <nav className="flex justify-center gap-x-8">
                {navSections.map((section) =>
                    <a
                        key={section}
                        href={`/#${section}`}
                        className={baseClass}>{section}
                    </a>
                )}
            </nav>
        </header>
    );
});

NavBar.displayName = 'NavBar';
export default NavBar;

