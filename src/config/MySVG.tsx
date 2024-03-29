function MySVG() {
  const svgCode = `
  <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="#eee" stroke-width="3" fill="transparent">
    <animate attributeName="stroke-dasharray" values="251.2;0" dur="1.5s" begin="0.5s" />
    <animate attributeName="stroke-dashoffset" values="0;-251.2" dur="1.5s" begin="0.5s" />
  </circle>
  <text x="50%" y="62%" fill="#eee" font-size="40" font-family="Arial" text-anchor="middle" opacity="0">
    <animate attributeName="opacity" dur="0.5s" to="1" fill="freeze" begin="2s" />
    R
  </text>
</svg>
`;

  return <div dangerouslySetInnerHTML={{ __html: svgCode }} />;
}
export default MySVG;
