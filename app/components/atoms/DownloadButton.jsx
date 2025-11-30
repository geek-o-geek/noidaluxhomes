"use client";

/**
 * A reusable download button component.
 * 
 * @param {string} filePath - required path to the downloadable file
 * @param {string} [label="Download Brochure"] - optional label for the button
 * @param {string} [className=""] - optional tailwind CSS classes
 * @param {boolean} [forceDownload=true] - optional flag to force download instead of opening in a new tab
 * @param {function} [onClick] - optional callback function when the button is clicked
 * @param {SVGElement} [icon] - optional SVG icon to display next to the label
 * @param {function} [onClose] - optional callback function to close a drawer when the button is clicked
 */
export default function DownloadButton({
  filePath,          // required → "/brochure_images/brochure.pdf"
  label = "Download Brochure",
  className = "",
  forceDownload = true,   // if false → opens in new tab
  onClick,           // optional callback
  icon = null,       // pass SVG icon if needed
  onClose            // optional close drawer callback
}) {
  const handleClick = (e) => {
    if (onClick) onClick();
    if (onClose) onClose();

    if (forceDownload) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = filePath;
      link.download = filePath.split("/").pop(); // filename auto-detected
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <a
      href={filePath}
      target={forceDownload ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-semibold text-[15px] ${className}`}
      onClick={handleClick}
    >
      {icon}
      {label}
    </a>
  );
}
