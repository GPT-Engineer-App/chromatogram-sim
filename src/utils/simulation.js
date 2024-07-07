export const simulateChromatogram = (params) => {
  const {
    columnLength,
    columnDiameter,
    particleSize,
    mobilePhaseWater,
    mobilePhaseAcetonitrile,
    mobilePhaseMethanol,
    flowRate,
    columnTemperature,
    injectionVolume,
    gradientProgram,
  } = params;

  // Placeholder for actual simulation logic
  const peaks = [
    { retentionTime: 2, width: 0.1, area: 100 },
    { retentionTime: 5, width: 0.2, area: 200 },
  ];

  const gaussian = (x, mean, stdDev) => {
    const exponent = -((x - mean) ** 2) / (2 * stdDev ** 2);
    return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
  };

  const chromatogram = peaks.map((peak) => {
    const data = Array.from({ length: 100 }, (_, i) => {
      const time = i * 0.1;
      return { time, intensity: gaussian(time, peak.retentionTime, peak.width) * peak.area };
    });
    return data;
  });

  return chromatogram.flat();
};

export const calculateChromatographicParameters = (chromatogram) => {
  // Placeholder for actual calculation logic
  return {
    resolution: 1.5,
    theoreticalPlates: 5000,
    tailingFactor: 1.2,
  };
};