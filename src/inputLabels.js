import { valuesArray } from './arrayCreator';

export const DisplayInputLabels = () => {
  return (
    <ul className="labels-list">
      {valuesArray.map((names) => (
        <p className="labels" key={`label-${names}`}>{names}:</p>
      ))}
    </ul>
  );
}

