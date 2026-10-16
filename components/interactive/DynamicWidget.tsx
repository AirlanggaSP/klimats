'use client';

import React, { useState, useEffect } from 'react';
import { InteractiveWidget } from '@/types/content';
import { Calculator, Code } from 'lucide-react';
import { calcRegistry } from './calcRegistry';

interface DynamicWidgetProps {
  widget: InteractiveWidget;
}

export default function DynamicWidget({ widget }: DynamicWidgetProps) {
  const [inputs, setInputs] = useState<Record<string, number>>({});
  const [result, setResult] = useState<{ value: string | number; unit: string; status: string; isGood?: boolean } | null>(null);

  useEffect(() => {
    const initialValues: Record<string, number> = {};
    widget.inputs.forEach(i => {
      initialValues[i.key] = i.defaultValue;
    });
    setInputs(initialValues);
  }, [widget]);

  useEffect(() => {
    if (Object.keys(inputs).length > 0) {
      const calcFn = calcRegistry[widget.calcId];
      if (calcFn) {
        setResult(calcFn(inputs));
      } else {
        setResult({ value: 'Error', unit: '-', status: 'calcId not found' });
      }
    }
  }, [inputs, widget]);

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: parseFloat(value) || 0 }));
  };

  return (
    <div className="bg-card-base border border-white/10 rounded-xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent-primary/10 rounded-lg">
          <Calculator className="w-5 h-5 text-accent-primary" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">{widget.title}</h3>
          <p className="text-xs text-text-secondary">{widget.subtitle}</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {widget.inputs.map(input => (
          <div key={input.key} className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-text-body">{input.label}</label>
              <span className="text-xs font-mono-sci text-text-code">{inputs[input.key] || 0}{input.unit}</span>
            </div>
            <input
              type="range"
              min={input.min ?? 0}
              max={input.max ?? 100}
              step={input.step ?? 1}
              value={inputs[input.key] || input.defaultValue}
              onChange={(e) => handleInputChange(input.key, e.target.value)}
              className="w-full h-1.5 bg-canvas-base rounded-lg appearance-none cursor-pointer accent-accent-primary"
            />
          </div>
        ))}
      </div>

      <div className="p-4 bg-canvas-base rounded-xl border border-white/5 mb-6 relative overflow-hidden">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[10px] font-mono-sci text-text-muted uppercase mb-1">Calculated Value</div>
            <div className="text-3xl font-mono-sci font-bold text-text-primary">
              {result?.value} <span className="text-sm text-text-secondary">{result?.unit}</span>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            result?.isGood ? 'bg-accent-primary/20 text-accent-primary' : 'bg-accent-danger/20 text-accent-danger'
          }`}>
            {result?.status}
          </div>
        </div>
        <div className={`absolute -right-4 -bottom-4 w-24 h-24 blur-3xl opacity-20 rounded-full ${
          result?.isGood ? 'bg-accent-primary' : 'bg-accent-danger'
        }`} />
      </div>

      <div className="relative group">
        <div className="absolute -top-3 left-3 px-2 py-0.5 bg-card-base border border-white/10 rounded text-[10px] font-mono-sci text-text-muted flex items-center gap-1">
          <Code className="w-3 h-3" /> Logic Preview
        </div>
        <pre className="p-4 bg-[#050708] rounded-xl border border-white/10 text-xs font-mono-sci text-text-code overflow-x-auto leading-relaxed">
          {widget.codeSnippet}
        </pre>
      </div>
    </div>
  );
}
