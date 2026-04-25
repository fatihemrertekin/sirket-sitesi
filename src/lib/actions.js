"use server";

import { prisma } from "@/lib/prisma";
import { uploadToCloudinary, deleteFromCloudinary } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session) throw new Error("Unauthorized");
}

// SERVICES
export async function createService(formData) {
  await checkAuth();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const description = formData.get("description");
  const longDescription = formData.get("longDescription");
  const iconFile = formData.get("icon");
  const heroFile = formData.get("heroImage");
  const itemsStr = formData.get("items");

  let items = null;
  try {
    if (itemsStr) {
      items = JSON.parse(itemsStr);
      if (Array.isArray(items)) {
        for (let i = 0; i < items.length; i++) {
          const file = formData.get(`item_image_${i}`);
          const existingImage = formData.get(`item_existing_image_${i}`);
          if (file && file.size > 0) {
            const imageUrl = await uploadToCloudinary(file, "services");
            items[i].image = imageUrl;
          } else {
            items[i].image = existingImage || null;
          }
        }
      }
    }
  } catch (e) {
    console.error("Failed to parse items JSON:", e);
  }

  const iconUrl = await uploadToCloudinary(iconFile, "icons");
  const heroUrl = await uploadToCloudinary(heroFile, "services");

  await prisma.service.create({
    data: {
      title,
      slug,
      description,
      longDescription,
      icon: iconUrl,
      heroImage: heroUrl,
      items,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/hizmetler");
}

export async function updateService(id, formData) {
  await checkAuth();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const description = formData.get("description");
  const longDescription = formData.get("longDescription");
  const iconFile = formData.get("icon");
  const heroFile = formData.get("heroImage");
  const itemsStr = formData.get("items");

  let items = undefined;
  if (itemsStr) {
    try {
      items = JSON.parse(itemsStr);
      if (Array.isArray(items)) {
        for (let i = 0; i < items.length; i++) {
          const file = formData.get(`item_image_${i}`);
          const existingImage = formData.get(`item_existing_image_${i}`);
          if (file && file.size > 0) {
            if (existingImage && existingImage.includes('cloudinary')) {
               await deleteFromCloudinary(existingImage);
            }
            const imageUrl = await uploadToCloudinary(file, "services");
            items[i].image = imageUrl;
          } else {
            items[i].image = existingImage || null;
          }
        }
      }
    } catch (e) {
      console.error("Failed to parse items JSON:", e);
    }
  }

  const existing = await prisma.service.findUnique({ where: { id } });

  let iconUrl = existing.icon;
  let heroUrl = existing.heroImage;

  if (iconFile && iconFile.size > 0) {
    if (existing.icon) await deleteFromCloudinary(existing.icon);
    iconUrl = await uploadToCloudinary(iconFile, "icons");
  }

  if (heroFile && heroFile.size > 0) {
    if (existing.heroImage) await deleteFromCloudinary(existing.heroImage);
    heroUrl = await uploadToCloudinary(heroFile, "services");
  }

  await prisma.service.update({
    where: { id },
    data: {
      title,
      slug,
      description,
      longDescription,
      icon: iconUrl,
      heroImage: heroUrl,
      ...(items !== undefined && { items }),
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/hizmetler");
  revalidatePath(`/hizmetler/${slug}`);
}

export async function deleteService(id) {
  await checkAuth();

  const existing = await prisma.service.findUnique({ where: { id } });
  if (existing.icon) await deleteFromCloudinary(existing.icon);
  if (existing.heroImage) await deleteFromCloudinary(existing.heroImage);

  await prisma.service.delete({ where: { id } });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/hizmetler");
}

// REFERENCES
export async function createReference(formData) {
  await checkAuth();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const category = formData.get("category");
  const description = formData.get("description");
  const location = formData.get("location");
  const year = formData.get("year");
  const longDescription = formData.get("longDescription");
  const imageFile = formData.get("image");

  const featuresStr = formData.get("features");
  const highlightsStr = formData.get("highlights");

  let features = null;
  let highlights = null;

  try {
    if (featuresStr) features = JSON.parse(featuresStr);
    if (highlightsStr) highlights = JSON.parse(highlightsStr);
  } catch (e) {
    console.error("Failed to parse reference JSON fields:", e);
  }

  const imageUrl = await uploadToCloudinary(imageFile, "references");

  await prisma.reference.create({
    data: {
      title,
      slug,
      category,
      location,
      year,
      description,
      longDescription,
      image: imageUrl,
      features,
      highlights,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/referanslar");
}

export async function updateReference(id, formData) {
  await checkAuth();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const category = formData.get("category");
  const location = formData.get("location");
  const year = formData.get("year");
  const description = formData.get("description");
  const longDescription = formData.get("longDescription");
  const imageFile = formData.get("image");

  const featuresStr = formData.get("features");
  const highlightsStr = formData.get("highlights");

  let features = undefined;
  let highlights = undefined;

  try {
    if (featuresStr) features = JSON.parse(featuresStr);
    if (highlightsStr) highlights = JSON.parse(highlightsStr);
  } catch (e) {
    console.error("Failed to parse reference JSON fields:", e);
  }

  const existing = await prisma.reference.findUnique({ where: { id } });
  let imageUrl = existing.image;

  if (imageFile && imageFile.size > 0) {
    if (existing.image) await deleteFromCloudinary(existing.image);
    imageUrl = await uploadToCloudinary(imageFile, "references");
  }

  await prisma.reference.update({
    where: { id },
    data: {
      title,
      slug,
      category,
      location,
      year,
      description,
      longDescription,
      image: imageUrl,
      ...(features !== undefined && { features }),
      ...(highlights !== undefined && { highlights }),
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/referanslar");
  revalidatePath(`/referanslar/${slug}`);
}

export async function deleteReference(id) {
  await checkAuth();

  const existing = await prisma.reference.findUnique({ where: { id } });
  if (existing.image) await deleteFromCloudinary(existing.image);

  await prisma.reference.delete({ where: { id } });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/referanslar");
}
