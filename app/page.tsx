import { uploadFile } from "./actions";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">File Upload</h1>
          <p className="mt-2 text-gray-600">Upload a file to get started</p>
        </div>

        <form action={uploadFile} className="space-y-6">
          <div>
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              Choose a file
            </label>
            <input
              type="file"
              id="file"
              name="file"
              required
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Upload File
          </button>
        </form>
      </div>
    </div>
  );
}
