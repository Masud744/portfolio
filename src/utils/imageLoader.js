const images = import.meta.glob("/src/assets/images/*", {
  eager: true,
  import: "default",
});

export function getImage(filename) {
  if (!filename) return "";
  if (
    filename.startsWith("http://") ||
    filename.startsWith("https://") ||
    filename.startsWith("data:") ||
    filename.startsWith("/")
  ) {
    return filename;
  }
  // Strip path prefixes if provided like "../../assets/images/foo.png"
  const cleanName = filename.split("/").pop();
  const directPath = `/src/assets/images/${cleanName}`;
  if (images[directPath]) {
    return images[directPath];
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
