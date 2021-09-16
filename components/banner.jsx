import React from 'react';
import 'bulma/css/bulma.css';

export default function banner({ bannerContent }) {
  return (
    <div>
      <div>
        { bannerContent }
      </div>
    </div>
  );
}
