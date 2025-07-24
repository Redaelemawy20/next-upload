"use server";

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      return { success: false, message: "No file provided" };
    }

    // Log file information
    console.log("File uploaded:", {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: new Date(file.lastModified).toISOString(),
    });

    return { success: true, message: "File uploaded successfully!" };
  } catch (error) {
    console.error("Upload error:", error);
    return { success: false, message: "Upload failed" };
  }
}
