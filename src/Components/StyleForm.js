import React, { Component } from 'react';
import reactCSS from 'reactcss';

//import color picker;
import { BlockPicker  } from 'react-color';


class StyleForm extends Component {
    constructor() {
        super();
        this.state = {
            displayColorPicker: false,
            displayColorPicker2: false,
            displayColorPicker3: false,
            color:{
                hex: '#000000',
                },
            color2:{
                hex: '#000000',
                },
            color3:{
                hex: '#000000',
                },
            newStyles: {
                titleSize:'36px',
                titleColor: "#00000",
                bodySize: '16px',
                bodyColor: "#00000",
                panelCorners: '16px',
                panelColor: "#FFFFFF"
            }
        };
    }

        newStyles= {
            titleSize: "",
            titleColor: "",
            bodySize: "",
            bodyColor: "",
            panelCorners: "",
            panelColor: ""
        } 
        //title color
        handleClick = () => {
            this.setState({ displayColorPicker: !this.state.displayColorPicker })
        };

        handleClose = () => {
            this.setState({ displayColorPicker: false })
        };

        handleChange = (colorPicked) => {
            let newColor = {...this.state.color};
            newColor.hex = colorPicked.hex;
            this.setState({ color: newColor });

            this.handleStyleChange({
                style: "titleColor",
                value: colorPicked.hex,
            });
        };

        //body color
        handleClick2 = () => {
            this.setState({ displayColorPicker2: !this.state.displayColorPicker2 })
        };

        handleClose2 = () => {
            this.setState({ displayColorPicker2: false })
        };

        handleChange2 = (colorPicked2) => {
            let newColor2 = {...this.state.color2};
            newColor2.hex = colorPicked2.hex;
            this.setState({ color2: colorPicked2 })

            this.handleStyleChange({
                style: "bodyColor",
                value: colorPicked2.hex,
            });
        };

        //panel color
        handleClick3 = () => {
            this.setState({ displayColorPicker3: !this.state.displayColorPicker3 })
        };

        handleClose3 = () => {
            this.setState({ displayColorPicker3: false })
        };

        handleChange3 = (colorPicked3) => {
            let newColor3 = {...this.state.color3};
            newColor3.hex = colorPicked3.hex;
            this.setState({ color3: colorPicked3 })

            this.handleStyleChange({
                style: "panelColor",
                value: colorPicked3.hex,
            });
        };

        handleStyleChange = (styleChanged) => {
            switch (styleChanged.style) {
            case "titleSize":
                let stateTitle = { ...this.state.newStyles };
                stateTitle.titleSize = styleChanged.value;
                this.setState({ newStyles: stateTitle });
                break;
            case "titleColor":
                let stateTitleColor = { ...this.state.newStyles };
                stateTitleColor.titleColor = styleChanged.value;
                this.setState({ newStyles: stateTitleColor });
                break;
            case "bodySize":
                let stateBody = { ...this.state.newStyles };
                stateBody.bodySize = styleChanged.value;
                this.setState({ newStyles: stateBody });
                break;
            case "bodyColor":
                let bodyColor = { ...this.state.newStyles };
                bodyColor.bodyColor = styleChanged.value;
                this.setState({ newStyles: bodyColor });
                break;
            case "panelCorners":
                let statePanel = { ...this.state.newStyles };
                statePanel.panelCorners = styleChanged.value;
                this.setState({ newStyles: statePanel });
                break;
            case "panelColor":
                let panelColor = { ...this.state.newStyles };
                panelColor.panelColor = styleChanged.value;
                this.setState({ newStyles: panelColor });
                break;
            default:
        return null;
    }
  };

        render() {

            const styles = reactCSS({
                'default': {
                    color: {
                        width: '30px',
                        height: '30px',
                        borderRadius: '2px',
                        background: `${this.state.color.hex}`,
                    },
                    color2: {
                        width: '30px',
                        height: '30px',
                        borderRadius: '2px',
                        background: `${this.state.color2.hex}`,
                        },
                    color3: {
                        width: '30px',
                        height: '30px',
                        borderRadius: '2px',
                        background: `${this.state.color3.hex}`,
                        },
                    swatch: {
                        padding: '5px',
                        background: '#fff',
                        borderRadius: '1px',
                        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                        display: 'inline-block',
                        cursor: 'pointer',
                    },
                    popover: {
                        position: 'absolute',
                        zIndex: '2',
                    },
                    cover: {
                        position: 'fixed',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                    },
                },
            });



        return(
            <form className="styleForm" onSubmit={() => {this.props.onStyleChange(this.state.newStyles)}}>
                <div className="formFieldSet">
                    <h3>Title</h3>
                    <div className="formFlex">
                        <label htmlFor="titleSize">Size
                            <input type="text" id="titleSize" name="titleSize" placeholder="36px"
                            onChange={(e) => {
                                this.handleStyleChange({
                                  style: "titleSize",
                                  value: e.target.value,
                                });
                              }} />
                        </label>

                        <div>
                        <label>Color
                            <div style={ styles.swatch } onClick={ this.handleClick }>
                            <div style={ styles.color } />
                            </div>
                            { this.state.displayColorPicker ? <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={ this.handleClose }/>
                                <BlockPicker color={ this.state.color } onChange={ this.handleChange } className="blockPicker1" />
                            </div> : null }
                            </label>
                        </div>
                    </div>
                </div>

                <div className="formFieldSet">
                    <h3>Body</h3>
                    <div className="formFlex">

                        <label htmlFor="bodyStyle">Size
                            <input type="text" id="bodyStyle" name="bodyStyle" placeholder="16px"
                            onChange={(e) => {
                                this.handleStyleChange({
                                  style: "bodySize",
                                  value: e.target.value,
                                });
                              }} />
                        </label>

                        <div>
                            <label>Color
                            <div style={ styles.swatch } onClick={ this.handleClick2 }>
                            <div style={ styles.color2 } />
                            </div>
                            { this.state.displayColorPicker2 ? <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={ this.handleClose2 }/>
                            <BlockPicker color={ this.state.color2 } onChange={ this.handleChange2 } className="blockPicker2" />
                            </div> : null }
                            </label>
                        </div>
                    </div>
                </div>
                <div className="formFieldSet">
                    <h3>Panel</h3>
                    <div className="formFlex">

                        <label htmlFor="panel">Corner Radius
                            <input type="text" id="panel" name="panel" placeholder="16px" onChange={(e) => {
                                this.handleStyleChange({
                                    style: "panelCorners",
                                    value: e.target.value,
                                });
                            }} />
                        </label>

                        <div>
                            <label>Color
                            <div style={ styles.swatch } onClick={ this.handleClick3 }>
                            <div style={ styles.color3 } />
                            </div>
                            { this.state.displayColorPicker3 ? <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={ this.handleClose3 }/>
                            <BlockPicker color={ this.state.color3 } onChange={ this.handleChange3 } className="blockPicker3" />
                            </div> : null }
                            </label>
                        </div>
                    </div>
                </div>
                <input className="hiddenInput" type="submit"/>
            </form>
        );  
    }
}

    

export default StyleForm;