import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import data from "../features.json";
import { useInfoContext } from "~/app/context";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

interface GeoProperties {
  name: string;
}

interface GeoFeature {
  rsmKey: string;
  properties: GeoProperties;
}

export default function WorldMap() {
  const router = useRouter();
  const context = useInfoContext();
  const params = useParams<{ client: string; destination: string }>();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedClientCountry, setSelectedClientCountry] = useState(null);
  const [selectedDestinationCountry, setSelectedDestinationCountry] =
    useState(null);
  const [hoveredCountry, setHoveredCountry] = useState("");

  const handleClientCountryClick = (index: number) => {
    const clickedCountry = data.objects.world.geometries[index];
    if (!clickedCountry) return;
    context.setClientCountry(clickedCountry.properties.name);
    //@ts-expect-error will fix later
    setSelectedClientCountry(clickedCountry);
    router.push(`/${clickedCountry.properties.name}`);
  };

  const handleDestinationCountryClick = (index: number) => {
    const clickedCountry = data.objects.world.geometries[index];
    if (!clickedCountry) return;
    context.setDestinationCountry(clickedCountry.properties.name);
    //@ts-expect-error will fix later
    setSelectedDestinationCountry(clickedCountry);
    router.push(`/${context.clientCountry}/${clickedCountry.properties.name}`);
  };

  const findCountryBasedOnSelectInput = (countryName: string) => {
    return data.objects.world.geometries.find(
      (geo) => geo.properties.name === countryName,
    );
  };

  useEffect(() => {
    context.setDestinationCountry(decodeURIComponent(params.destination));
    setSelectedDestinationCountry(
      //@ts-expect-error will fix later
      findCountryBasedOnSelectInput(decodeURIComponent(params.destination)),
    );

    if (
      context.destinationCountry &&
      selectedDestinationCountry &&
      //@ts-expect-error will fix later

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      selectedDestinationCountry.properties.name !== context.destinationCountry
    ) {
      setSelectedDestinationCountry(
        //@ts-expect-error will fix later
        findCountryBasedOnSelectInput(context.destinationCountry),
      );
    }

    if (selectedClientCountry !== context.clientCountry) {
      setSelectedClientCountry(
        //@ts-expect-error will fix later
        findCountryBasedOnSelectInput(context.clientCountry),
      );
    }
  }, [context, selectedClientCountry, selectedDestinationCountry, params]);

  const handleZoomEnd = (event: { zoom: number }) => {
    setZoomLevel(event.zoom);
  };

  const calculateFontSize = () => {
    return Math.max(3, 8 / zoomLevel);
  };

  const handleClick = (geo: GeoFeature, index: number) => {
    if (selectedClientCountry === null) {
      handleClientCountryClick(index);
    } else {
      if (context.isClientPage) {
        handleClientCountryClick(index);
      } else {
        const clickedCountry = data.objects.world.geometries[index];
        if (!clickedCountry) return;
        if (
          //@ts-expect-error will fix later
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          selectedClientCountry.properties.name !==
          clickedCountry.properties.name
        ) {
          handleDestinationCountryClick(index);
        }
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "15px",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50%",
          position: "relative",
        }}
      >
        <ComposableMap
          projection="geoMercator"
          style={{ backgroundColor: "white", borderRadius: "15px" }}
          projectionConfig={{
            scale: 100,
            center: [0, 0],
          }}
        >
          <ZoomableGroup
            translateExtent={[
              [-200, 0],
              [1000, 600],
            ]}
            onMoveEnd={handleZoomEnd}
          >
            <Geographies geography={data}>
              {({ geographies }) =>
                geographies.map((geo: GeoFeature, index: number) => {
                  const name = geo.properties.name;
                  const isClientCountrySelected =
                    selectedClientCountry &&
                    //@ts-expect-error will fix later
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    selectedClientCountry.properties.name === name;
                  const isDestinationCountrySelected =
                    selectedDestinationCountry &&
                    //@ts-expect-error will fix later
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    selectedDestinationCountry.properties.name === name;
                  return (
                    <React.Fragment key={geo.rsmKey}>
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => handleClick(geo, index)}
                        onMouseEnter={() => setHoveredCountry(name)}
                        onMouseLeave={() => setHoveredCountry("")}
                        style={{
                          default: {
                            fill: isClientCountrySelected
                              ? "#007bff" // Blue for client country
                              : isDestinationCountrySelected
                                ? "#28a745" // Green for destination country
                                : "#E0E0E0", // Subtle gray for default color
                            outline: "none",
                            opacity: 0.9,
                            transition: "all 0.3s ease",
                          },
                          hover: {
                            fill: "#FF5722", // Orange on hover
                            outline: "none",
                            transition: "all 0.3s ease",
                          },
                        }}
                      />
                      {zoomLevel > 1 && (
                        // @ts-expect-error this works regardless so no need to type it
                        <Marker coordinates={geoCentroid(geo)}>
                          <text
                            style={{
                              fill: "#111", // Darker text color
                              strokeWidth: 0,
                              fontSize: `${calculateFontSize()}px`,
                              fontWeight: "bold",
                              transition: "all 0.3s ease",
                              pointerEvents: "none", // Add this line
                            }}
                            textAnchor="middle"
                          >
                            {geo.properties.name}
                          </text>
                        </Marker>
                      )}
                    </React.Fragment>
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        {hoveredCountry && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {hoveredCountry}
          </div>
        )}
      </div>
    </div>
  );
}
