import './FigmaThumbnail.css';

const characterImage =
  'http://localhost:3845/assets/36ac1033e463cb57f3b4b0ad013e3d18d3b8c205.png';
const pouchImage =
  'http://localhost:3845/assets/1cfaeab1d0f2c10e322b0ee7351ed0257b2cbf8a.svg';

export default function FigmaThumbnail() {
  return (
    <figure className="figma-thumbnail" data-node-id="199:11488">
      <img
        className="figma-thumbnail__character"
        src={characterImage}
        alt="blue character"
        data-node-id="199:11480"
      />
      <span className="figma-thumbnail__pouch-wrap">
        <img
          className="figma-thumbnail__pouch"
          src={pouchImage}
          alt=""
          data-node-id="199:11481"
        />
      </span>
    </figure>
  );
}
