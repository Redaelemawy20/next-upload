import { NextRequest, NextResponse } from "next/server";
import { del } from "@vercel/blob";

export async function POST(request: NextRequest) {
  try {
    const { filepath } = await request.json();

    if (!filepath) {
      return NextResponse.json(
        { error: "Filepath is required" },
        { status: 400 }
      );
    }

    // Download file from Vercel Blob using fetch
    const response = await fetch(filepath);

    if (!response.ok) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Convert response to text and log it
    const fileContent = await response.text();

    // don't do it in the background
    await del(filepath);

    return NextResponse.json({
      success: true,
      message: "File downloaded and logged successfully",
    });
  } catch (error) {
    console.error("Error processing file:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
