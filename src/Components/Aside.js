import React from 'react';
import Form from './Form';
import StyleForm from './StyleForm';

//import tabs and tabpain from antd
import { Tabs } from 'antd';
import { Button } from 'antd';

//import css for the antd design for react
// import 'antd/dist/antd.css';

//import fontawesomeicon from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCog, faPaintRoller } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCog, faPaintRoller )


const Aside = (props) => {

    // give new class to aside via variable
    let drawer = 'sideDrawer';

    // if the state for asideOpen changes to true, then add on second class of open for additional css styling
    if (props.show) {
        drawer = "sideDrawer open";
    }

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    const settings = <FontAwesomeIcon icon={faCog} />;
    const styles = <FontAwesomeIcon icon={faPaintRoller} />;

    

    return (
        <aside className={drawer}>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab={settings} key="1">
                    <Form />
                </TabPane>
                <TabPane tab={styles} key="2">
                    <StyleForm />
                </TabPane>
            </Tabs>
        </aside>
    );
}



export default Aside;