import React from 'react';
import {
    AppRegistry,
    asset,
    Image,
    NativeModules,
    StyleSheet,
    Text,
    View,
    VrButton
} from 'react-360';

import { Surface } from 'react-360-web';
const surfaceModule = NativeModules.surfaceModule;

class InfoPanel extends React.Component {
    state = {
        img: {
            name: 'info.png',
            width: 100,
            height: 100
        }
    }

    render() {
        let { img } = this.state;

        return (
          <View style = {styles.displayPanel}>
            <Image source={asset('${img.name}')} style={{width: img.width, height: img.height}}/>
          </View>
        )
    }

    transformDisplay(id) {
        this._changeSurfaceDimensions(500, 400, id);
        this.setState({
            img: {
                name: `${id}.jpg`,
                width: 500,
                height: 300
            }
        });
    }

    resetPanel(id) {
        this._changeSurfaceDimensions(100, 100, id);
        this.setState({
            img: {
                name: 'info.png',
                width: 100,
                height: 100
            }
        });
    }

    _changeSurfaceDimensions(width, height, id) {
        surfaceModule.resizeSurface(width, height, id);
    }

    render() {
        let { img } = this.state;

        return (
         <View style={styles.displayPanel}
               hitSlop={2}
               onEnter={() => this.transformDisplay(this.props.id)}
               onExit={() => this.resetPanel(this.props.id)}>
           <Image source={asset(`${img.name}`)} style={{width: img.width, height: img.height}} />
           <View style={styles.attractionBox}>
             <Text style={styles.attractionText}>
               {this.props.text}
             </Text>
           </View>
         </View>
        );
    }
};


export default class BW extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset('bw.jpg')} style={{width: 500, height: 300}} />
        <View style={styles.attractionBox}>
          <VrButton onClick={() => surfaceModule.start()}>
            <Text style={styles.attractionText}>
              Welcome to Botswana! Click Here to view what our tourism industry has for you!
            </Text>
          </VrButton>
        </View>
      </View>
        );
    }
};

const styles = StyleSheet.create({
    displayPanel: {
        width: 100,
        height: 100,
        flexDirection: 'column',
    },
    attractionBox: {
        padding: 5,
        backgroundColor: '#F7F7F7',
        borderColor: 'blue',
        borderWidth: 2,
        width: 500
    },
    attractionText: {
        fontSize: 28,
        color: 'black'
    },
});

AppRegistry.registerComponent('BW', () => BW);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
