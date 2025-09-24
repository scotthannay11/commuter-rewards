"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function StravaProfile() {
  const params = useSearchParams();
  const token = params.get("token");
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (token) {
      fetch("https://www.strava.com/api/v3/athlete", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then(setProfile);
    }
  }, [token]);

  if (!token) return <div>No Strava token found.</div>;
  if (!profile) return <div>Loading Strava profile...</div>;

  return (
    <div>
      <h1>Strava Profile</h1>
      <p><b>Name:</b> {profile.firstname} {profile.lastname}</p>
      <img src={profile.profile} alt="Strava avatar" style={{ borderRadius: "50%" }} />
      <p><b>City:</b> {profile.city}</p>
      <p><b>Country:</b> {profile.country}</p>
      {/* Add more profile fields as desired */}
    </div>
  );
}
