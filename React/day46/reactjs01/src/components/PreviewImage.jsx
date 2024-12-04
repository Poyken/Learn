import { useEffect, useState } from "react";

export default function PreviewImage() {
  const [image, setImage] = useState({});
  const handleChooseFile = (e) => {
    const imagePreviewUrl = URL.createObjectURL(e.target.files[0]);
    setImage({ ...image, preview: imagePreviewUrl, file: e.target.files[0] });
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview); // Clean up
    };
  }, [image.preview, image.imageUrl]);
  const handleUploadFile = async (e) => {
    const { file } = image;
    const formData = new FormData();
    formData.append("file", file);
    e.target.innerText = "Uploading...";
    e.target.disabled = true;
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/files/upload`,
      { method: "POST", body: formData }
    );
    const data = await response.json();
    setImage({ ...image, imageUrl: data.location });
    e.target.innerText = "Upload";
    e.target.disabled = false;
  };
  return (
    <div>
      <input type="file" onChange={handleChooseFile} />
      <button onClick={handleUploadFile}>Upload</button>
      <div>{image.preview && <img src={image.preview} width={200} />}</div>
      {image.imageUrl && (
        <div>
          Image URL:
          <a href={image.imageUrl} target="_blank" rel="noopener noreferrer">
            {image.imageUrl}
          </a>
        </div>
      )}
    </div>
  );
}
//45
