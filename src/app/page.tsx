"use client";

import { useState } from "react";

export default function Home() {
  const [license, setLicense] = useState("");

  const suscribe = async () => {
    await fetch("/api/license", {
      method: "POST",
      body: JSON.stringify({
        license,
      }),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw Error;
      })
      .then((data) => {
        if (data.someError) throw Error;
        return data.valid ? alert("Valid license") : alert("Invalid license");
      })
      .catch(() => {
        alert("Error");
      });
  };

  return (
    <>
      <input
        type="license"
        value={license}
        onChange={(e) => setLicense(e.target.value)}
      />
      <button onClick={suscribe}>Check license</button>
    </>
  );
}
