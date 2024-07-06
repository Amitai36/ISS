import { useMap } from "react-leaflet";

export default function CenterMap({ x, y }: { x: number; y: number }) {
    const map = useMap();
    map.setView({ lat: y, lng: x });
    return null;
}
