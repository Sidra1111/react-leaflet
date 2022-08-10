import React, { Component } from "react";
import { MapContainer,  TileLayer, Marker, Popup } from "react-leaflet";
import { Card,  Col,  CardBody } from "reactstrap";

class Map extends Component {

    
  render() {
    return (
      <div className="Map">
        <h1 className="App_tilte"> Open Street Map</h1>
        <Col>
          <Card>
            <CardBody>
                
              <MapContainer
                center={[33.6844, 73.0479]}
                zoom={1}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                  url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Y1H1qhyFkWqTvXcK7kj"
                />
                <Marker position={[33.6844, 73.0479]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Map;