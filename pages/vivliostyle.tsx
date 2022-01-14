import { useState } from 'react';
import { Renderer } from '@vivliostyle/react';

export default function Vivliostyle() {
  const [page, setPage] = useState(1);

  function next() {
    setPage((page) => page + 1);
  }

  function prev() {
    setPage((page) => page - 1);
  }

  const sample =
    'https://vivliostyle.github.io/vivliostyle_doc/samples/gon/index.html';

  return (
    <div>
      <Renderer
        source={sample}
        page={page}
        onLoad={(state) => {
          console.log(state.epageCount, state.docTitle);
        }}
      />
      <button onClick={next}>Next</button>
      <button onClick={prev}>Prev</button>
    </div>
  );
}
