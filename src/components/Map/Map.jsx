import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';

const Map = ({ selectedStateId, setSelectedStateId }) => {
    const [geoJsonData, setGeoJsonData] = useState(null);
    const { stateLists } = useSelector((state) => state.covidState);

    useEffect(() => {
        // Load the GeoJSON for Indian states (you can fetch it from a file or an API)
        setGeoJsonData(stateLists?.name);
    }, [stateLists]);

    const highlightFeature = (e) => {
        const layer = e.target;
        layer.setStyle({
            weight: 3,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
    };

    const resetHighlight = (e) => {
        const layer = e.target;
        layer.setStyle({
            weight: 1,
            color: '#3388ff',
            fillOpacity: 0.2
        });
    };

    const onEachState = (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: () => {
                // Highlight the state and set its ID when clicked
                setSelectedStateId(feature.properties.id); // Assuming the GeoJSON has an 'id' property
            }
        });
    };

    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geoJsonData && (
                <GeoJSON
                    data={geoJsonData}
                    style={(feature) => ({
                        fillColor: feature.properties.id === selectedStateId ? '#FF6347' : '#3388ff',
                        weight: 1,
                        opacity: 1,
                        color: '#3388ff',
                        fillOpacity: feature.properties.id === selectedStateId ? 0.7 : 0.2
                    })}
                    onEachFeature={onEachState}
                />
            )}
        </MapContainer>
    );
};

export default Map;
