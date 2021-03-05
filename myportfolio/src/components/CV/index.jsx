const CV = () => {
    fileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/MihaelaS.pdf",
      "MihaelaS.pdf"
    );

    return (
        <button className="cv" onClick={CV}>
         Download File
        </button>
    )
    };
 
     
export default CV;
