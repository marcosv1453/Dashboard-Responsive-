import './Sidebar.css';


const Sidebar = ({sidebarOpen, closeSidebar }) =>{
    return (
        <div className = {sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                <img src={require('../../images/logo.png') } alt="logo" />
                    <h1></h1>
                </div>

                <i 
                onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
            <h2>Menu</h2>
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                
                    <div className="sidebar__link">
                    <i class="	far fa-calendar-check"></i>
                    <   a href="#">Atendimento</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-users"></i>
                    <   a href="#">Monitoramento</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fas fa-chart-line"></i>
                    <   a href="#">Estatistica</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-flag"></i>
                    <   a href="#">Relatorios</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-book"></i>
                    <   a href="#">Cadastros</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="far fa-money-bill-alt"></i>
                    <   a href="#">Accounts</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-upload"></i>
                    <   a href="#">Imports</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-cog"></i>
                    <   a href="#">Configurações</a>
                    </div>
                    <div className="sidebar__logout">
                        <i className="fa fa-power-off"></i>
                    <   a href="#">Log out</a>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar;