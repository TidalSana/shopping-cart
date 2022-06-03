import ReactPlayer from "react-player/youtube";

const Recommendation = () => {
  return (
    <div className="recommendation-container">
      <h2 className="recommended-title">RECOMMENDATIONS</h2>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=tWuxSFkrIew"
        controls={true}
      />
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=ZwHwf9Q3fK4&t=65s"
        controls={true}
      />
    </div>
  );
};

export default Recommendation;
