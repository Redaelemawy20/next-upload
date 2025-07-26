# Next.js File Upload with Vercel Blob

A simple file upload application using Next.js and Vercel Blob storage.

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables:

   - Copy `.env.local.example` to `.env.local`
   - Add your Vercel Blob token:

   ```
   BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here
   ```

3. Get your Vercel Blob token:

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to Storage > Blob
   - Create a new Blob store or use existing one
   - Copy the `BLOB_READ_WRITE_TOKEN`

4. Run the development server:

```bash
pnpm dev
```

## Features

- File upload to Vercel Blob storage
- Progress feedback
- Error handling
- File logging

## Environment Variables

- `BLOB_READ_WRITE_TOKEN`: Your Vercel Blob read/write token (required)
