const Showcase = () => {
  return (
    <div className="image-container">
      <div className="board-image-div board-div-one" id="internals-image">
        <div className="showcase-text">
          <h2 className="showcase-title">INNOVATION</h2>
          <p className="showcase-para">
            The WT60-D WEIRDFLEX PCB is supported by silicon rubber standoffs
            attached to FR4 (fiberglass) leaf springs mounted to the case. Foam
            pads underneath the leaf springs provide vibration dampening and
            force modulation.
          </p>
        </div>
        <div className="image-div">
          <img
            src="https://cdn.shopify.com/s/files/1/2193/6721/files/WILBA_TECH-SALVATION_GALLERY_01.jpg?v=1614328073"
            alt="internalImage"
            className="board-image"
          />
        </div>
      </div>
      <div className="board-image-div board-div-two" id="leaf-spring-image">
        <div className="image-div">
          <img
            src="https://cdn.shopify.com/s/files/1/2193/6721/files/WILBA_TECH-SALVATION_GALLERY_03.jpg?v=1614328177"
            alt="leafSprings"
            className="board-image"
          />
        </div>
        <div className="showcase-text">
          <p className="showcase-para">
            The leaf springs provide exceptional flexibility, allowing the
            entire plate/PCB subassembly to yield under keystrokes and vibrate
            in isolation from the case. The result is a typing experience that
            is soft and vibrant across the whole keyboard.
          </p>
        </div>
      </div>
      <div className="board-image-div board-div-three" id="switches-image">
        <div className="image-div">
          <img
            src="https://cdn.shopify.com/s/files/1/2193/6721/files/WILBA_TECH-SALVATION_GALLERY_08.jpg?v=1614328330"
            alt="switchesImage"
            className="board-image"
          />
        </div>
        <div className="showcase-text">
          <h2 className="showcase-title">CUSTOMIZATION</h2>
          <p className="showcase-para">
            Build it with the stock FR4 plate, or use third-party 60% plates
            made of metal or plastic. Build it half-plate or plateless. Tweak
            the foam pad placement to make the leaf springs more or less
            flexible. Modify the stock FR4 plate to have slots that match the
            WT60-D WEIRDFLEX PCB, or into a half-plate design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
