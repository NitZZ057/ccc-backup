import "../../css/Spinner.css";
const Spinner = () => {
  return (
    <div className="backdrop">
      <div className="container">
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
