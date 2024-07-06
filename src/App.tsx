import { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { socket } from "./api/sockect";
import { toast } from "react-toastify";
import CenterMap from "./component/CenterMap";

function App() {
  const [position, setPosition] = useState<{ x: number; y: number }>();
  useEffect(() => {
    socket.on("connect", () => console.log(socket.id));
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.on("sendLocation", (e) => {
      console.log(e);
      setPosition({ x: e.x, y: e.y });
    });
    socket.on("sendCountry", (e) => {
      toast(`the new country is: ${e}`)
    });
    return () => {
      socket.off("sendLocation");
      socket.off("sendCountry");
    };
  }, [socket]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer
        style={{ height: "100vh", width: "100wh" }}
        center={[position?.x ?? 30, position?.y ?? 20]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <CenterMap x={position?.x ?? 30} y={position?.y ?? 20} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
