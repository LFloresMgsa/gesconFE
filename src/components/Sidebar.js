import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './Sidebar.css'
import mgsaImage from '../imagenes/mgsa2.jpg';
import manualImage from '../imagenes/manual.jpg';
import Cookies from 'universal-cookie';


const cookies = new Cookies();


const Nav = styled.div`
  background: #6f0b1f;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 145px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #6f0b1f;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%').toString()};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  let tabs = SidebarData
    .map(item => {
      const subarrayFiltrado = item.subNav.filter(subitem => subitem.role.indexOf("All") > 0);
      return { ...item, subNav: subarrayFiltrado };
    })
    .filter(_temp_tabs => _temp_tabs.role.indexOf("All") > 0);



  if (cookies.get('Sgm_cUsuario') != "" && cookies.get('Sgm_cUsuario') != null) {

    tabs = SidebarData
      .map(item => {
        const subarrayFiltrado = item.subNav.filter(subitem => subitem.role.indexOf(cookies.get('Sgm_cPerfil')) > 0);
        return { ...item, subNav: subarrayFiltrado };
      })
      .filter(_temp_tabs => _temp_tabs.role.indexOf(cookies.get('Sgm_cPerfil')) > 0);
  }


  const sortMenuItems = tabs.sort((a, b) => (a.tabOrder > b.tabOrder ? 1 : -1));


  // useEffect(() => {



  // }, []);


  return (
    <>
      {/* <img className='Imageninicio' src={manualImage} alt='' /> */}
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          {/* <div className='Manual'><h6>Manual de Usuarios - PDF</h6></div> */}
        </Nav>
        <SidebarNav sidebar={sidebar.toString()}> {/* Modificación aquí */}
          <SidebarWrap>
            <NavIcon to='#'>
              {/* <img className='Imagen' src={mgsaImage} alt='' /> */}
            </NavIcon>

            {sortMenuItems.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
