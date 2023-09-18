import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * The 404 page displayed when no page exists.
 * @returns
 */
export const FourZeroFour: React.FC = () => {
    return (
        <div className="page not-found-page">
            <Helmet>
                <title>404 page title</title>
                <meta
                    name="description"
                    content="404 page description."
                />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="fourzerofour" id="404">
                <div className="content-container">
                    <div className="">
                        <h1>Oops! This page could not be found!</h1>
                    </div>
                    <div className="">
                        <p>
                            Page not found, click <Link to={'/'}>here</Link> to get back to the home page
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
