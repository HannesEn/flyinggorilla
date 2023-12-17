/**
 * @file reportWebVitals.js is a utility for measuring and reporting on various web vital statistics.
 *
 * @requires web-vitals - Library for measuring web vitals.
 */

/**
 * Reports web vital statistics using the provided callback function.
 *
 * The reported metrics include Cumulative Layout Shift (CLS), First Input Delay (FID),
 * First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Time to First Byte (TTFB).
 *
 * @param {Function} onPerfEntry - The callback function to use for reporting the metrics.
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
