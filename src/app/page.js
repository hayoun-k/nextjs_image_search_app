"use client"
import { useState } from "react";
import searchImages from "./components/api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <main>
      <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images} />
      </div>
    </main>
  )
}
