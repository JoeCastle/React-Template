import React from 'react';

interface Props {}

/**
 * The footer component at the bottom of every page.
 * @param props
 * @returns
 */
export const Footer: React.FC<Props> = (props) => {
    return (
        <div>
            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} Name. All Rights Reserved.</p>

            <p className="version-text">v{process.env.REACT_APP_VERSION}</p>
        </div>
    );
};
