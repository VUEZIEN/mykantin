import { useState, useEffect, ChangeEvent } from "react";

interface ProfileHook {
  selectedImage: string;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useProfile = (): ProfileHook => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataURL = event.target?.result as string;

        localStorage.setItem("profileImage", dataURL);

        setSelectedImage(dataURL);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);

  return { selectedImage, handleImageUpload };
};

export default useProfile;
