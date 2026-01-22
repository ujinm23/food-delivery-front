"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageUploadIcon } from "@/app/_icons/ImageUploadIcon.js";
import { toast } from "sonner";

const UPLOAD_PRESET = "food-delivery";
const CLOUD_NAME = "di7kfwrvb";

export function UploadImage({ imageURL, setImageURL }) {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();
    return data.secure_url;
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ✅ instant local preview
    setPreview(URL.createObjectURL(file));

    setUploading(true);
    const toastId = toast.loading("Uploading image...");

    try {
      const url = await uploadToCloudinary(file);
      setImageURL(url); // ✅ send URL to parent
      toast.success("Image uploaded successfully", { id: toastId });
    } catch (error) {
      toast.error("Image upload failed", { id: toastId });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-103 h-34.5 bg-[#ECF1FE] rounded-md border border-dashed border-[#2563EB33] flex flex-col justify-center items-center gap-2 relative">
      {!preview && (
        <>
          <div className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
            <ImageUploadIcon />
          </div>
          <p className="text-sm font-medium">Choose a file or drag & drop</p>
        </>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        disabled={uploading}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />

      {preview && (
        <div className="relative w-full h-full">
          <Image
            src={preview}
            alt="Food preview"
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}

      {uploading && <p className="text-blue-600 text-sm">Uploading...</p>}
    </div>
  );
}
