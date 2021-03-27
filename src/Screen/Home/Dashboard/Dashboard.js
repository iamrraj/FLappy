import React, {Component} from 'react';
import {LogBox, Image, View} from 'react-native';
import MapView, {
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  Callout,
  Circle,
  AnimatedRegion,
} from 'react-native-maps';
import BottomSheetData from './BottomSheet';
import styles from './style';
import Spinner from '../../../Service/Spinner/Spinner.js';

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapa: [],
      score: [],
      segment: [],
      stats: [],
      cord: [],
      start: [],
      loading: true,
    };
    //this.mapRef = createRef();
    this.mapRef = null;
  }

  componentDidMount() {
    this.getData('');
    // this.map.fitToElements(true);
  }

  getData = async () => {
    const apiUrl = `https://digitalfleet.eu/api/1/trips/121095/`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + 'szmaEUWgWEmReGy7Op137bKABz5hrr',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          mapa: data,
          score: data.scores,
          segment: data.shapes,
          stats: data.stats,
          cord: data.coordinates,
          start: data.coordinates[0],
          loading: false,
        });

        // console.log(data);
      })
      .catch((reject) => {
        console.log(reject);
        this.setState({loading: false});
      });
  };
  render() {
    // LogBox.ignoreLogs(['Animated']);
    const speed = this.state.segment.filter((c) => c.slug === 'speed');
    const acceleration = this.state.segment.filter(
      (c) => c.slug === 'acceleration',
    );
    const breaking = this.state.segment.filter((c) => c.slug === 'braking');
    const fuel = this.state.segment.filter((c) => c.slug === 'fuel');

    const lastpoint =
      this.state.cord.length > 0
        ? this.state.cord[this.state.cord.length - 1]
        : this.state.start;
    const dotImage = require('../../../Static/Image/girl.png');
    return (
      <>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <MapView
              style={styles.mapStyle}
              provider={PROVIDER_GOOGLE}
              minZoomLevel={0}
              paddingAdjustmentBehavior="automatic"
              ref={(ref) => {
                this.mapRef = ref;
              }}
              onLayout={() =>
                this.mapRef.fitToCoordinates(this.state.cord, {
                  // edgePadding: {
                  //   top: 1110,
                  //   right: 2110,
                  //   bottom: 1000,
                  //   left: 1000,
                  // },
                  animated: true,
                })
              }
              onMapReady={() => this.mapRef.fitToElements(true)}
              followUserLocation={false}
              showsUserLocation={true}
              fitToElements={true}
              initialCamera={{
                altitude: 15000,
                center: {
                  latitude: this.state.start[0],
                  longitude: this.state.start[1],
                },
                heading: 0,
                pitch: 0,
                zoom: 9,
              }}
              // region={{
              //   latitude: this.state.start[0],
              //   longitude: this.state.start[1],
              //   latitudeDelta: 0.0922,
              //   longitudeDelta: 0.0421,
              // }}
              // initialRegion={{
              //   latitude: this.state.start[0],
              //   longitude: this.state.start[1],
              //   latitudeDelta: 0.0922,
              //   longitudeDelta: 0.0421,
              //   }}
            >
              <Circle
                center={{
                  latitude: this.state.start[0],
                  longitude: this.state.start[1],
                }}
                radius={100}
                strokeColor={'blue'}
                strokeWidth={6}
                fillColor={'#fff'}
                zIndex={1}
              />
              <Marker
                coordinate={{
                  latitude: this.state.start[0],
                  longitude: this.state.start[1],
                }}
                title="Flatiron School Atlanta"
                description="This is where the magic happens!"></Marker>

              {this.state.cord.length > 0 && (
                <Marker
                  coordinate={{latitude: lastpoint[0], longitude: lastpoint[1]}}
                  title="Flatiron School Atlanta"
                  description="This is where the magic happens!"
                  anchor={{x: 0.5, y: 0.1}}>
                  <Image source={dotImage} style={{height: 55, width: 45}} />
                </Marker>
              )}

              {speed.map((d) =>
                d.segments.map((c, i) => (
                  <Polyline
                    key={i}
                    coordinates={c.coordinates.map((c) => ({
                      latitude: c[0],
                      longitude: c[1],
                    }))}
                    strokeColor={'#8f17b7'}
                    strokeWidth={4}></Polyline>
                )),
              )}
            </MapView>

            <View style={styles.container1}>
              <BottomSheetData />
            </View>
          </>
        )}
      </>
    );
  }
}

export default Dashboard;
