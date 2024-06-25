"use client";
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
import { useParams, useRouter } from "next/navigation";

interface GeoProperties {
  name: string;
}

interface GeoFeature {
  rsmKey: string;
  properties: GeoProperties;
}

export default function WorldMap() {
  const router = useRouter();
  const params = useParams<{ client: string; destination: string }>();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedClientCountry, setSelectedClientCountry] = useState(null);
  const [selectedDestinationCountry, setSelectedDestinationCountry] =
    useState(null);
  const [hoveredCountry, setHoveredCountry] = useState("");

  const handleClientCountryClick = (index: number) => {
    const clickedCountry = data.objects.world.geometries[index];
    if (!clickedCountry) return;
    //@ts-expect-error will fix later
    setSelectedClientCountry(clickedCountry);

    router.push(`/${clickedCountry.properties.name}`);
  };

  const handleDestinationCountryClick = (index: number) => {
    const clickedCountry = data.objects.world.geometries[index];
    if (!clickedCountry) return;
    //@ts-expect-error will fix later
    setSelectedDestinationCountry(clickedCountry);
    router.push(`/${params.client}/${clickedCountry.properties.name}`);
  };

  const findCountryBasedOnSelectInput = (countryName: string) => {
    return data.objects.world.geometries.find(
      (geo) => geo.properties.name.toLowerCase() === countryName.toLowerCase(),
    );
  };

  useEffect(() => {
    setSelectedDestinationCountry(
      //@ts-expect-error will fix later
      findCountryBasedOnSelectInput(decodeURIComponent(params.destination)),
    );

    if (
      params.destination &&
      selectedDestinationCountry &&
      //@ts-expect-error will fix later

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      selectedDestinationCountry.properties.name !==
        decodeURIComponent(params.destination)
    ) {
      setSelectedDestinationCountry(
        //@ts-expect-error will fix later
        findCountryBasedOnSelectInput(decodeURIComponent(params.destination)),
      );
    }

    if (selectedClientCountry !== decodeURIComponent(params.client)) {
      setSelectedClientCountry(
        //@ts-expect-error will fix later
        findCountryBasedOnSelectInput(decodeURIComponent(params.client)),
      );
    }
    if (params.client) {
      setSelectedClientCountry(
        //@ts-expect-error will fix later
        findCountryBasedOnSelectInput(decodeURIComponent(params.client)),
      );
    } else {
      setSelectedClientCountry(null);
    }
  }, [selectedClientCountry, selectedDestinationCountry, params]);

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
      const clickedCountry = data.objects.world.geometries[index];
      if (!clickedCountry) return;
      if (
        //@ts-expect-error will fix later
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        selectedClientCountry.properties.name !== clickedCountry.properties.name
      ) {
        handleDestinationCountryClick(index);
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <ComposableMap
        data-cy="world-map"
        projection="geoMercator"
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          // borderColor: "black",
          // borderWidth: "1px",
          // borderStyle: "solid",
        }}
        projectionConfig={{
          scale: 100,
          center: [0, 0],
        }}
      >
        <ZoomableGroup
          translateExtent={[
            [-100, 0],
            [800, 600],
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
                      data-cy={`country-${name}`}
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
                    {zoomLevel > 3 && (
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
  );
}
