import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { simulateChromatogram, calculateChromatographicParameters } from "@/utils/simulation";

const Index = () => {
  const [formData, setFormData] = useState({
    columnLength: "",
    columnDiameter: "",
    particleSize: "",
    mobilePhaseWater: "",
    mobilePhaseAcetonitrile: "",
    mobilePhaseMethanol: "",
    flowRate: 1,
    columnTemperature: 25,
    injectionVolume: "",
    gradientProgram: "",
  });

  const [chromatogram, setChromatogram] = useState([]);
  const [chromatographicParams, setChromatographicParams] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const simulatedChromatogram = simulateChromatogram(formData);
    setChromatogram(simulatedChromatogram);
    const params = calculateChromatographicParameters(simulatedChromatogram);
    setChromatographicParams(params);
  };

  const chartData = {
    labels: chromatogram.map((point) => point.time),
    datasets: [
      {
        label: "Chromatogram",
        data: chromatogram.map((point) => point.intensity),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>HPLC Parameter Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="columnLength">Column Length (mm)</Label>
              <Input
                id="columnLength"
                name="columnLength"
                type="number"
                value={formData.columnLength}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="columnDiameter">Column Diameter (mm)</Label>
              <Input
                id="columnDiameter"
                name="columnDiameter"
                type="number"
                value={formData.columnDiameter}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="particleSize">Particle Size (µm)</Label>
              <Input
                id="particleSize"
                name="particleSize"
                type="number"
                value={formData.particleSize}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="mobilePhaseWater">Mobile Phase - Water (%)</Label>
              <Input
                id="mobilePhaseWater"
                name="mobilePhaseWater"
                type="number"
                value={formData.mobilePhaseWater}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="mobilePhaseAcetonitrile">Mobile Phase - Acetonitrile (%)</Label>
              <Input
                id="mobilePhaseAcetonitrile"
                name="mobilePhaseAcetonitrile"
                type="number"
                value={formData.mobilePhaseAcetonitrile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="mobilePhaseMethanol">Mobile Phase - Methanol (%)</Label>
              <Input
                id="mobilePhaseMethanol"
                name="mobilePhaseMethanol"
                type="number"
                value={formData.mobilePhaseMethanol}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="flowRate">Flow Rate (mL/min)</Label>
              <Slider
                id="flowRate"
                name="flowRate"
                min={0.1}
                max={10}
                step={0.1}
                value={[formData.flowRate]}
                onValueChange={(value) => handleSliderChange("flowRate", value[0])}
              />
              <div>{formData.flowRate} mL/min</div>
            </div>
            <div>
              <Label htmlFor="columnTemperature">Column Temperature (°C)</Label>
              <Slider
                id="columnTemperature"
                name="columnTemperature"
                min={10}
                max={100}
                step={1}
                value={[formData.columnTemperature]}
                onValueChange={(value) => handleSliderChange("columnTemperature", value[0])}
              />
              <div>{formData.columnTemperature} °C</div>
            </div>
            <div>
              <Label htmlFor="injectionVolume">Injection Volume (µL)</Label>
              <Input
                id="injectionVolume"
                name="injectionVolume"
                type="number"
                value={formData.injectionVolume}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="gradientProgram">Gradient Program (optional)</Label>
              <Input
                id="gradientProgram"
                name="gradientProgram"
                type="text"
                value={formData.gradientProgram}
                onChange={handleChange}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
      {chromatogram.length > 0 && (
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Simulated Chromatogram</CardTitle>
            </CardHeader>
            <CardContent>
              <Line data={chartData} />
              <div className="mt-4">
                <h3>Chromatographic Parameters</h3>
                <p>Resolution: {chromatographicParams.resolution}</p>
                <p>Theoretical Plates: {chromatographicParams.theoreticalPlates}</p>
                <p>Tailing Factor: {chromatographicParams.tailingFactor}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;