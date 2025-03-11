import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://apis.mapmyindia.com/advancedmaps/v1/81980f98579028a0c919bd0ef06ff687/map_load?v=1.5`;
    script.async = true;
    script.onload = () => {
      const map = new window.L.Map("map", {
        center: [28.6139, 77.2090],
        zoom: 15,
      });
      window.L.marker([22.689444, 88.445944]).addTo(map);
    };

    document.body.appendChild(script);
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};


export default Map;
