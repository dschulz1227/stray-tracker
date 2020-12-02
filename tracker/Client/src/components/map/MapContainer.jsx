import React from 'react';
// import axios from 'axios'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import {formatRelative} from 'date-fns';
import "@reach/combobox/styles.css";
import MapStyles from '../map/MapStyles';
import DisplayCats from '../cats/DisplayCats'


//

const googleKey = process.env.REACT_APP_API_KEY

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
}
const center = {
    lat: 30.369770,
    lng: -89.091537
}
const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true
}


//

export default function MyMap(props) {
    console.log(props.user)
    const user = props.user
    console.log(user)

  //   componentDidMount() {
  //     this.getCollection('All')
  //     console.log(this.props.user)
  // }

  //get entire collection

  
  // const useEffect = (_Id) => {
  //     console.log(this.props.user)
  //     console.log(this.state.cats)

  //     axios
  //         .get(`http://localhost:5000/api/kittys/getByUserId/${this.props.user._id}`)
  //         .then(res => {
  //             console.log('you will see me', res.data)
  //             const cats = res.data
  //             console.log(cats)
  //             this.setState({cats: cats})
  //         })
  // }



    const {isLoaded, loadError} = useLoadScript({googleMapsApiKey: googleKey, libraries});

    const [markers,
        setMarkers] = React.useState([]);

    const [selected,
        setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current, {
                lat: e
                    .latLng
                    .lat(),
                lng: e
                    .latLng
                    .lng(),
                time: new Date()
            }
        ]);
    }, []);

    const mapRef = React.useRef();

    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef
            .current
            .panTo({lat, lng});
        mapRef
            .current
            .setZoom(14);
    }, []);

    if (loadError) 
        return "error loading maps";
    if (!isLoaded) 
        return "is loading"

    return (
        <div>
            <h1>Strays{" "}<span role="img" aria-label="cat">🐱</span>
            </h1>
      console.log(props.userInfo)
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

            <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}>
                {markers.map((marker) => (<Marker
                    key={marker
                    .time
                    .toISOString()}
                    position
                    ={{
                    lat: marker.lat,
                    lng: marker.lng
                }}
                    onClick=
                    {()=>{ setSelected(marker) }}
                    icon={{
                    url: `/pawprint.svg`,
                    origin: new window
                        .google
                        .maps
                        .Point(0, 0),
                    anchor: new window
                        .google
                        .maps
                        .Point(15, 15),
                    scaledSize: new window
                        .google
                        .maps
                        .Size(30, 30)
                }}/>))}

                {selected
                    ? (
                        <InfoWindow
                            position={{
                            lat: selected.lat,
                            lng: selected.lng
                        }}
                            onCloseClick={() => {
                            setSelected(null);
                        }}>
                            <div>
                                {/* <h2>
                                    <span role="img" aria-label="cat">
                                        🐱
                                    </span>{" "}
                                    Alert
                                </h2> */}
                                <DisplayCats user={user} />
                                <p>Spotted {formatRelative(selected.time, new Date())}</p>
                            </div>
                        </InfoWindow>
                    )
                    : null}

            </GoogleMap>
        </div>
    )
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}


