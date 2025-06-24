// hooks/useImagePreloader.ts
import { useEffect, useState } from 'react';

interface Props {
  backgroundUrls: string[];
}

export default function useImagePreloader({ backgroundUrls }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (backgroundUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    let loaded = 0;
    const handleLoad = () => {
      loaded++;
      if (loaded >= backgroundUrls.length) {
        setIsLoading(false);
      }
    };

    backgroundUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleLoad;
      img.onerror = handleLoad;
    });
  }, [backgroundUrls]);

  return isLoading;
}
