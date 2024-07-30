'use client';

import React, { useState, useEffect } from 'react';

const fonts = [
  { name: 'Roboto', value: "'Roboto', sans-serif" },
  { name: 'Open Sans', value: "'Open Sans', sans-serif" },
  { name: 'Lato', value: "'Lato', sans-serif" },
  { name: 'Poppins', value: "'Poppins', sans-serif" },
  { name: 'Montserrat', value: "'Montserrat', sans-serif" },
];

interface TypeScale {
  name: string;
  size: number;
  weight: number;
  category: 'body' | 'display';
}

const CustomTypescaleGenerator: React.FC = () => {
  const [baseFontSize, setBaseFontSize] = useState<number>(16);
  const [bodyFont, setBodyFont] = useState<string>(fonts[0].value);
  const [displayFont, setDisplayFont] = useState<string>(fonts[0].value);
  const [scale, setScale] = useState<TypeScale[]>([]);

  const generateScale = (base: number): TypeScale[] => [
    { name: "Caption", size: Math.round(base * 0.75), weight: 400, category: 'body' },
    { name: "Body Small", size: Math.round(base * 0.875), weight: 400, category: 'body' },
    { name: "Body Medium", size: base, weight: 400, category: 'body' },
    { name: "Body Large", size: Math.round(base * 1.125), weight: 400, category: 'body' },
    { name: "Title Small", size: Math.round(base * 1.25), weight: 500, category: 'body' },
    { name: "Title Medium", size: Math.round(base * 1.5), weight: 500, category: 'body' },
    { name: "Title Large", size: Math.round(base * 1.75), weight: 500, category: 'body' },
    { name: "Headline Small", size: Math.round(base * 2), weight: 400, category: 'display' },
    { name: "Headline Medium", size: Math.round(base * 2.25), weight: 400, category: 'display' },
    { name: "Headline Large", size: Math.round(base * 2.5), weight: 400, category: 'display' },
    { name: "Display Small", size: Math.round(base * 3), weight: 400, category: 'display' },
    { name: "Display Medium", size: Math.round(base * 3.5), weight: 400, category: 'display' },
    { name: "Display Large", size: Math.round(base * 4), weight: 400, category: 'display' },
  ];

  useEffect(() => {
    setScale(generateScale(baseFontSize));
  }, [baseFontSize]);

  const getStyleForType = (type: string): React.CSSProperties => {
    const item = scale.find(s => s.name === type);
    if (!item) return {};
    return {
      fontSize: `${item.size}px`,
      fontWeight: item.weight,
      fontFamily: item.category === 'body' ? bodyFont : displayFont,
      color: 'black'
    };
  };

  return (
    <div className="h-screen flex flex-col">
      <h2 className="text-2xl font-bold p-4 text-gray-800 bg-white">Custom Typescale Generator (Material 3.0 + iOS)</h2>
      <div className="flex-grow overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Scrollable Typescale Generator */}
          <div className="overflow-y-auto p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2 text-gray-700">Base Font Size (px):</label>
                <input
                  type="number"
                  value={baseFontSize}
                  onChange={(e) => setBaseFontSize(Math.max(1, Math.round(Number(e.target.value))))}
                  className="w-full p-2 border rounded text-gray-800"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Body & Titles Font:</label>
                <select
                  value={bodyFont}
                  onChange={(e) => setBodyFont(e.target.value)}
                  className="w-full p-2 border rounded text-gray-800"
                >
                  {fonts.map((font) => (
                    <option key={font.name} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Headlines & Display Font:</label>
                <select
                  value={displayFont}
                  onChange={(e) => setDisplayFont(e.target.value)}
                  className="w-full p-2 border rounded text-gray-800"
                >
                  {fonts.map((font) => (
                    <option key={font.name} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Generated Typescale:</h3>
              <div className="space-y-6">
                {scale.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200">
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-sm text-gray-600">{item.name}</p>
                      <p className="text-sm text-gray-500">{`${item.size}px / ${item.weight}`}</p>
                    </div>
                    <p style={getStyleForType(item.name)} className="text-gray-800">
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Fixed Article Preview */}
          <div className="lg:overflow-y-auto p-6 bg-white border-l">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Article Preview</h3>
            <article className="text-black">
              <h1 style={getStyleForType("Display Medium")} className="mb-4">
                The Art of Typography
              </h1>
              <h2 style={getStyleForType("Headline Medium")} className="mb-3">
                A Journey Through Fonts and Layouts
              </h2>
              <p style={getStyleForType("Body Medium")} className="mb-4">
                Typography is more than just words on a page; it's an art form that combines readability with visual appeal. 
                From the choice of typeface to the spacing between letters, every detail matters in creating a harmonious design.
              </p>
              <h3 style={getStyleForType("Title Medium")} className="mb-2">
                The Importance of Hierarchy
              </h3>
              <p style={getStyleForType("Body Medium")} className="mb-4">
                A well-structured typographic hierarchy guides readers through content, emphasizing key points and improving overall comprehension. 
                By varying font sizes, weights, and styles, designers can create a clear and intuitive reading experience.
              </p>
              <blockquote style={getStyleForType("Body Large")} className="border-l-4 pl-4 italic mb-4">
                "Typography is the craft of endowing human language with a durable visual form." - Robert Bringhurst
              </blockquote>
              <h3 style={getStyleForType("Title Medium")} className="mb-2">
                Responsive Typography
              </h3>
              <p style={getStyleForType("Body Medium")}>
                In the age of diverse screen sizes, responsive typography ensures that text remains legible and aesthetically pleasing across all devices. 
                This approach involves more than just scaling font sizes; it requires a thoughtful adaptation of the entire typographic system.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTypescaleGenerator;