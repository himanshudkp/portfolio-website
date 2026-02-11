import { MapPin } from "lucide-react";

export const LocationPin = ({
  location,
  className = "",
}: {
  location: string;
  className?: string;
}) => (
  <p className={`flex items-center gap-1 ${className}`}>
    <MapPin className="w-3.5 h-3.5" />
    <span>{location}</span>
  </p>
);
