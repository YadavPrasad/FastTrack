const Contact = () => {
    return(
        <div>
            <form style={{marginTop : "20px", marginLeft : "10px"}}>
                <label style={{ paddingRight: '10px' , marginTop: "30px"}}><b style={{color : "#FFA500"}}>Email :</b></label>
                <input type = "text" style = {{width : "400px", marginBottom : "20px"}}>
                </input>
            </form>
            <p style={{color : "#FFA500", marginLeft: "10px"}}><b>Description :</b></p>
            <form>
                <input type = "text"  style={{marginLeft: "70px", height: '200px', width: '150px', paddingRight: "250px"}}>
                </input>
                <br /><br /><br />
                <button style={{marginLeft : "250px"}}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;