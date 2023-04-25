const navBarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#ffffff'
}

function NavBar() {
    return (
        <div style={navBarStyles}>
            <div>Images</div>
            <div>Links</div>
        </div>
    );
}


export default NavBar;