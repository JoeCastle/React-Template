import { Helmet } from 'react-helmet-async';
import React from 'react';

interface Props {
    isDarkMode: boolean;
}

/**
 * The home page.
 * @param props
 * @returns
 */
export const Home: React.FC<Props> = (props) => {
    return (
        <div id="Home">
            <Helmet>
                <title>Home page title</title>
                <meta
                    name="description"
                    content="Home page description."
                />
                <meta property="og:title" content="Home page title" />
                <meta
                    property="og:description"
                    content="Home page description."
                />
                <meta property="og:image" content={process.env.PUBLIC_URL + `/Projects_section.jpg`} />
                <meta name="twitter:title" content="Home page title" />
                <meta
                    name="twitter:description"
                    content="Home page description."
                />
                <meta name="twitter:image" content={process.env.PUBLIC_URL + `/Projects_section.jpg`} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div>This is the home page.</div>
        </div>
    );
};
