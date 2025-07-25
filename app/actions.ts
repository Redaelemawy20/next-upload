"use server";

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      console.log("No file provided");
      return;
    }

    // Log file information
    console.log("File uploaded:", {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: new Date(file.lastModified).toISOString(),
    });

    console.log("File uploaded successfully!");
  } catch (error) {
    console.error("Upload error:", error);
  }
}
