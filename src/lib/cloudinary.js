import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file, folder) {
  if (!file || file.size === 0) return null;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: `sirket-sitesi/${folder}`,
        resource_type: 'auto',
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    ).end(buffer);
  });
}

export async function deleteFromCloudinary(url) {
  if (!url || !url.includes('cloudinary.com')) return;

  try {
    // Extract public_id from URL
    // Example: https://res.cloudinary.com/demo/image/upload/v12345678/sirket-sitesi/folder/filename.jpg
    const parts = url.split('/');
    const folderIndex = parts.indexOf('sirket-sitesi');
    if (folderIndex === -1) return;

    const publicIdWithExtension = parts.slice(folderIndex).join('/');
    const publicId = publicIdWithExtension.split('.')[0]; // Remove extension

    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary delete error:', error);
  }
}
