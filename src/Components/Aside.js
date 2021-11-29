// a couple of functions from the React library
import React from 'react';

const Aside = props => {

    // give new class to aside via variable
    let drawer = 'sideDrawer';

    // if the state for asideOpen changes to true, then add on second class of open
    if (props.show) {
        drawer = "sideDrawer open";
    }

    return (
        <aside className={drawer}>
            <div className="instrContainer">
                <h3>How To Use:</h3>
                <ol>
                    <li><span className="blueFont">[tab]</span>-to or click into the input field and type your message.</li>
                    <li>Press <span className="blueFont">[enter]</span> or <span className="blueFont">[tab]</span> to the send button (the paper airplane)</li>
                    <li>Your message will appear above!</li>
                    <li>Click <span className="blueFont">[New User]</span> button at the top right to give a new user name!</li>
                    <li>To clear your last message Click the "<i className="fas fa-trash-alt"></i>"!</li>
                </ol>
            </div>
        </aside>
    );
}



export default Aside;