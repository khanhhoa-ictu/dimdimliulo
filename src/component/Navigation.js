import {Route, NavLink, Link} from 'react-router-dom';

const menus = [
	{to: '/'		, exact: true, name: 'Home'},
	{to: '/about'	, exact: true, name: 'About'},
	{to: '/blog'	, exact: false, name: 'Blog'},
	{to: '/cv', exact: true, name: 'CV'}
];


function Navigation() {

	const MenuLink = ({ menu }) => {
		return (
			<Route 
				path={menu.to}
				exact={menu.exact}
				children=
					{ 
						({ match }) => {
							let active = (match !== null) ? "active" : "";
							return (
								<li className={`nav-item px-lg-4 ${active}`} >
									<Link to={menu.to} className="nav-link text-uppercase text-expanded">
										{menu.name}
									</Link>
								</li>
							)
						}
					}
			/>
		)
	}
	
	function showMenusTwo(menus){
		let xhtml = null;
		
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				return (
					<MenuLink menu={menu} key={index} />
				);
			});
		}
	
		return xhtml;
	}

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
			    <div className="container">
			    	<NavLink to='/' className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none">
						Dim Dim liu lo
					</NavLink>
			        
			        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon" />
			        </button>
			        <div className="collapse navbar-collapse" id="navbarResponsive">
			            <ul className="navbar-nav mx-auto">
			            	{showMenusTwo(menus)}
			            </ul>
			        </div>
			    </div>
			</nav>
    );
   
  }
  
  
  export default Navigation;
  