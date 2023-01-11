import classnames from 'tailwindcss-classnames';
import { memo } from 'react';


const Section = memo(
    ({ children, sectionId, noPadding = false, className }) => {
        return (
            <section className={classnames(className, { 'px-4 py-16 md:py-24 lg:px-8': !noPadding })} id={sectionId}>
                <div className={classnames({ 'mx-auto max-w-screen-lg': !noPadding })}>{children}</div>
            </section>
        );
    },
);

Section.displayName = 'Section';
export default Section;
