const images = import.meta.glob("/src/assets/images/*", {
  eager: true,
  import: "default",
});

export function getImage(filename) {
  if (!filename) return "";
  if (
    filename.startsWith("http://") ||
    filename.startsWith("https://") ||
    filename.startsWith("data:")
  ) {
    return filename;
  }
  // Strip path prefixes if provided like "../../assets/images/foo.png"
  const cleanName = filename.split("/").pop();
  const directPath = `/src/assets/images/${cleanName}`;
  if (images[directPath]) {
    return images[directPath];
  }

  // Graceful fallbacks for specialized logos
  if (cleanName.includes("arduino")) {
    return images["/src/assets/images/codeInLogo.png"] || "";
  }
  if (
    cleanName.includes("university") ||
    cleanName.includes("college") ||
    cleanName.includes("school")
  ) {
    return (
      images["/src/assets/images/iiitk_logo.png"] ||
      images["/src/assets/images/stanford_logo.png"] ||
      ""
    );
  }
  if (cleanName.includes("ict") || cleanName.includes("most")) {
    return images["/src/assets/images/deeplearning_ai_logo.png"] || "";
  }
  return "";
}

// Global runtime shim for legacy require calls in bundled code
if (typeof window !== "undefined") {
  window.require = function (modulePath) {
    if (typeof modulePath === "string") {
      return getImage(modulePath);
    }
    return modulePath;
  };
}
