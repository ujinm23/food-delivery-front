"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageUploadIcon } from "@/app/_icons/ImageUploadIcon.js";

const UPLOAD_PRESET = "food-delivery";
const CLOUD_NAME = "di7kfwrvb";

export function UploadImage(imageURL, setImageURL) {
  const [logoUrl, setLogoUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadToCloudinary = async (file) => {
    console.log("Uploading file:", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log("Cloudinary response status:", response.status);

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  };

  // const handleLogoUpload = async (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;

  //   setUploading(true);
  //   try {
  //     const url = await uploadToCloudinary(file);
  //     setLogoUrl(url);
  //   } catch (error) {
  //     console.log("Failed to upload logo:" + error.message);
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  console.log("Logo URL:", logoUrl);

  return (
    <div className="relative w-103] bg-[#ECF1FE] rounded-md border border-[#2563EB33] gap-2 border-dashed flex flex-col justify-center items-center ">
      {/* <div className=" h-8 w-8 bg-white rounded-full flex justify-center items-center ">
        <ImageUploadIcon />
      </div>
      <p className="font-medium text-[14px]">
        Choose a file or drag & drop it here
      </p> */}
      {/*  bg-[#2563EB33]opacity-20 */}
      <input
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        disabled={uploading}
        // className="w-103 h-34.5 rounded-md "
      />
      {uploading && <p className="text-blue-600">Uploading...</p>}
      {logoUrl && (
        <div className="mt-4">
          <p className="text-green-600 font-semibold mb-2">Logo uploaded!</p>
          <div className="relative w-full h-full">
            <Image
              src={logoUrl}
              alt="Uploaded Logo"
              fill
              className="object-cover rounded border border-gray-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}
