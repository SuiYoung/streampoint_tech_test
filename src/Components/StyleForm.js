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
                r: '241',
                g: '112',
                b: '19',
                a: '1',
                },
            color2:{
                r: '250',
                g: '100',
                b: '250',
                a: '1',
                },
            color3:{
                r: '241',
                g: '112',
                b: '19',
                a: '1',
                },
            }
        }

        handleClick = () => {
            this.setState({ displayColorPicker: !this.state.displayColorPicker })
        };

        handleClose = () => {
            this.setState({ displayColorPicker: false })
        };

        handleChange = (color) => {
            this.setState({ color: color.rgb })
        };

        handleClick2 = () => {
            this.setState({ displayColorPicker2: !this.state.displayColorPicker2 })
        };

        handleClose2 = () => {
            this.setState({ displayColorPicker2: false })
        };

        handleChange2 = (color2) => {
            this.setState({ color2: color2.rgb })
        };

        handleClick3 = () => {
            this.setState({ displayColorPicker3: !this.state.displayColorPicker3 })
        };

        handleClose3 = () => {
            this.setState({ displayColorPicker3: false })
        };

        handleChange3 = (color3) => {
            this.setState({ color3: color3.rgb })
        };

        render() {

            const styles = reactCSS({
                'default': {
                    color: {
                        width: '30px',
                        height: '30px',
                        borderRadius: '2px',
                        background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
                    },
                    color2: {
                        width: '30px',
                        height: '30px',
                        borderRadius: '2px',
                        background: `rgba(${ this.state.color2.r }, ${ this.state.color2.g }, ${ this.state.color2.b }, ${ this.state.color2.a })`,
                        },
                    color3: {
                        width: '30px',
                        height: '30px',
                        borderRadius: '2px',
                        background: `rgba(${ this.state.color3.r }, ${ this.state.color3.g }, ${ this.state.color3.b }, ${ this.state.color3.a })`,
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
            <form className="styleForm">
                <div className="formFieldSet">
                    <h3>Title</h3>
                    <div className="formFlex">
                        <label htmlFor="titleSize">Size
                            <input type="text" id="titleSize" name="titleSize" placeholder="36px" />
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
                            <input type="text" id="bodyStyle" name="bodyStyle" placeholder="16px" />
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
                            <input type="text" id="panel" name="panel" placeholder="16px" />
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
            </form>
        );  
    }
}

    

export default StyleForm;