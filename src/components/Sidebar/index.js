import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarRoute to="/hacking">Hacking</SidebarRoute>
                    <SidebarRoute to="/bugbounty">BugBounty</SidebarRoute>
                    <SidebarRoute to="/oscp">OSCP</SidebarRoute>
                    <SidebarRoute to="/writeups">Writeups</SidebarRoute>
                    <SidebarRoute to="/creators">Creators</SidebarRoute>
                    <SidebarRoute to="/mobilepentesting">Mobile Pentesting</SidebarRoute>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;