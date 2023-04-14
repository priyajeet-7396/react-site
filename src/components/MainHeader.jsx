import {Link} from 'react-router-dom'
import Image from  '../images/main_header.png'



const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100 days of w0rk out</h4>
          <h1>join the legend of the fitness world </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Link to='/plans' className='btn lg '>get started</Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'>
          </div>
            <div className='main__header-image'>
              <img src={Image} alt=' main Header-image'/>
            </div>
          
          </div>
      </div>
    </header>
  )
}

export default MainHeader