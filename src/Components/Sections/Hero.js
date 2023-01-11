import { memo } from "react";

const Hero = memo(() => {
    return (
        <header className="App-header">
            <p>
                Site Coming Soon
            </p>
        </header>
    );
});

Hero.displayName = 'Hero';
export default Hero;