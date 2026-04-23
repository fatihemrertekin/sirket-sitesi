"use client";

import { useState } from "react";
import Image from "next/image";

export default function CustomImage(props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary-950/20 backdrop-blur-sm pointer-events-none">
          <div className="w-8 h-8 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        {...props}
        onLoad={(e) => {
          setIsLoading(false);
          if (props.onLoad) props.onLoad(e);
        }}
        onError={() => setIsLoading(false)} // Hata durumunda loading sonsuza kadar dönmesin
      />
    </>
  );
}
