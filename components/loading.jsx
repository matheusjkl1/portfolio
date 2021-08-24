import React from 'react';
import 'bulma/css/bulma.css';

export default function Loading() {
  return (
    <div>
      <progress className="progress is-small is-primary" max="100">15%</progress>
    </div>
  );
}
