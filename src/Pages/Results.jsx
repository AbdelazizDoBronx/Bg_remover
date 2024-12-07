import React, { useState } from 'react';

function Results() {
  const [image, setImage] = useState(null); // State to hold the uploaded image
  const [imagePreview, setImagePreview] = useState(null); // State to hold the image preview URL
  const [processedImage, setProcessedImage] = useState(null); // State to hold the processed (background-removed) image
  const [isLoading, setIsLoading] = useState(false); // State to handle loading state

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Generate a temporary URL for the image preview
    } else {
      alert("Please upload a valid image file.");
    }
  };

  // Function to handle background removal via an API (assuming removeBg API)
  async function removeBg(blob) {
    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", blob);

    try {
      setIsLoading(true); // Start loading state
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        body: formData,
        headers: {
          'X-Api-Key': import.meta.env.VITE_BG_REMOVER_KEY, // Ensure the environment variable is correctly set
        },
      });

      if (response.ok) {
        const result = await response.blob(); // Get the image blob
        setProcessedImage(URL.createObjectURL(result)); // Set the processed image for the "After" preview
      } else {
        alert('Error removing background!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to remove background!');
    } finally {
      setIsLoading(false); // End loading state
    }
  }

  // Trigger background removal once an image is uploaded
  const handleImageSubmit = () => {
    if (image) {
      removeBg(image);
    }
  };

  // Function to handle image download
  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage; // Use the processed image for downloading
      link.download = 'image_without_bg.png'; // Set the download file name
      link.click();
    } else {
      alert('No processed image available for download!');
    }
  };

  return (
    <div className='w-full flex flex-col min-h-[650px] p-4 bg-slate-200 shadow-md rounded-md'>
      <div className="imgs flex gap-3 mt-5 mb-5">
        <div className="originalImg w-1/2 shadow-md rounded-md">
          <h2 className='mb-2 text-2xl font-semibold uppercase tracking-wide'>Before</h2>
          {/* Display image preview or a default message */}
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Uploaded Preview"
              className="w-full h-[500px] object-cover rounded-md"
            />
          ) : (
            <div className="flex justify-center items-center h-[500px] text-gray-500">No image uploaded</div>
          )}
        </div>
        <div className="withoutBgImg w-1/2 shadow-md rounded-md">
          <h2 className='mb-2 text-2xl font-semibold uppercase tracking-wide'>After</h2>
          {/* Display the processed image or static message */}
          {isLoading ? (
            <div className="flex justify-center items-center h-[500px]">
              <span className="loader"></span> {/* You can implement a loading spinner here */}
              <p className="text-gray-500">Processing...</p>
            </div>
          ) : processedImage ? (
            <img
              src={processedImage}
              alt="Image without background"
              className="w-full h-[500px] object-cover rounded-md"
            />
          ) : (
            <div className="flex justify-center items-center h-[500px] text-gray-500">No background removed yet</div>
          )}
        </div>
      </div>

      <div className="relative actionsBtns flex gap-4 justify-end mt-auto mb-3">
        <button className='relative btn btn-outline shadow-md p-3'>
          Try another image
          <input
            className="opacity-0 absolute inset-0 cursor-pointer"
            onChange={handleImageUpload}
            accept='image/*'
            type="file"
          />
        </button>
        <button
          className='btn btn-neutral shadow-md hover:bg-neutral-800 duration-150 transition-all text-white p-3'
          onClick={handleImageSubmit}
        >
          {isLoading ? "Removing background..." : "Remove background"}
        </button>
        <button
          className='btn btn-neutral shadow-md hover:bg-neutral-800 duration-150 transition-all text-white p-3'
          onClick={handleDownload}
        >
          Download image
        </button>
      </div>
    </div>
  );
}

export default Results;
