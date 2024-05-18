import { CiSearch } from "react-icons/ci";
const Header = () => {
    return (
        <nav>
            <div className="main" >
                <div className="logo">QTity</div>
                <div>
                    <input className="textbox" type="text" placeholder="Search a song of your choice" />
                    <CiSearch  style={{height:"100%",width:"30px"}}/>
                </div>
                
                <button type="button" class="btn btn-dark" style={{height:"47px",color: "#34C94B"}}>Give Feedback</button>
            </div>
        </nav>
    );
};
export default Header;
