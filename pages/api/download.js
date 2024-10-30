const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  // Get file path from query parameter, e.g., ?filePath=next.svg
  const { filePath: queryFilePath } = req.query;

  if (!queryFilePath) {
    return res.status(400).send("File path is required");
  }

  // Define the base directory for file access (e.g., 'public' directory)
  const baseDir = path.join(process.cwd(), "public");

  // Construct the full file path and filename
  const filePath = path.join(baseDir, queryFilePath);
  const fileName = path.basename(filePath); // Extracts the file name

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  // Define a mapping of file extensions to content types
  const contentTypeMap = {
    pdf: "application/pdf",
    // Add more mappings as needed for other file types
  };

  // Get the file extension
  const fileExtension = fileName
    .split(".")
    .pop()
    .toLowerCase();

  // Determine the content type based on the file extension
  const contentType = contentTypeMap[fileExtension] || "application/pdf";

  // Set headers to force download
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
  res.setHeader("Content-Type", contentType);

  // Stream the file
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}
