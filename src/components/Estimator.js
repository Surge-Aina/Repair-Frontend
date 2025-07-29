import React, { useState } from 'react';
import './Estimator.css';

// Price data for estimates
const priceData = {
  '': { range: 'Select a service for an estimate', requiresUnit: false },
  'faucet': { range: '$150 - $250', unit: 'faucet', requiresUnit: true },
  'fan': { range: '$200 - $350', unit: 'fan', requiresUnit: true },
  'drywall': { range: '$100 - $300', unit: 'patch', requiresUnit: true },
  'painting': { range: '$400 - $800', unit: 'room', requiresUnit: true },
};

const Estimator = () => {
  const [service, setService] = useState('');
  const [units, setUnits] = useState(1);

  const selectedPrice = priceData[service];

  return (
    <section id="estimator" className="estimator-section">
      <div className="estimator-container">
        <h2>Get an Instant Estimate</h2>
        <p>This tool provides a rough, non-binding estimate for common jobs.</p>

        <div className="estimator-controls">
          <select className="estimator-select" onChange={(e) => setService(e.target.value)}>
            <option value="">-- Select a Service --</option>
            <option value="faucet">Replace a Faucet</option>
            <option value="fan">Install a Ceiling Fan</option>
            <option value="drywall">Repair Drywall</option>
            <option value="painting">Paint a Room</option>
          </select>

          {selectedPrice && selectedPrice.requiresUnit && (
            <input
              type="number"
              className="estimator-input"
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              min="1"
            />
          )}
        </div>

        <div className="estimator-result">
          <h3>Estimated Cost:</h3>
          <p className="price-range">{selectedPrice.range}</p>
        </div>

         <div className="estimator-disclaimer">
            For a firm quote, please contact us directly.
         </div>
      </div>
    </section>
  );
};

export default Estimator;