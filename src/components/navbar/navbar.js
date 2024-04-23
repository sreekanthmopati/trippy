import { Component } from 'react';
import './navbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { Link } from 'react-router-dom';


class Navbar extends Component{
    state = {
        clicked : false
    }
    handleclick = ()=>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav id='navbar'>
                <h1 id='logo'>Trippy</h1>
<div className='menu-icons' onClick={this.handleclick}>
<i className={this.state.clicked ? "fa-regular fa-circle-xmark": "fa-solid fa-bars"}></i>
</div>
                <ul className={this.state.clicked?'navmenu active':'navmenu'}>
                    <li><Link to='/' className='nav-link'><IoHomeOutline className='ic'/>Home</Link> </li>
                    <li><Link to='/about'  className='nav-link'><IoIosInformationCircleOutline className='ic'/>about</Link> </li>
                    <li><Link to='/service'  className='nav-link'><MdOutlineWorkspacePremium className='ic'/>services</Link> </li>
                    <li><Link to='/contact'  className='nav-link'><MdOutlineContactSupport className='ic'/>contact</Link> </li> 
                    <li><Link to=''  className='signup-mobile'>Sign-up</Link> </li>
                    <button>Sign up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar