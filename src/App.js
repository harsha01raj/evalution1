import Avatar from "./Components/Avatar";
import Button from "./Components/Button";
const App = () => {
  return (
    <div className="App">
      <Button />
      <Avatar
        caption="This is the image"
        image="https://cdn.vox-cdn.com/thumbor/Dtl0EGQ3bYjAVBNuqxp2ZvAXVng=/0x0:1920x1200/920x613/filters:focal(810x375:1116x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg"
      />
    </div>
  );
};
export default App;
