

function Header(){
    return (
        //Navbar do site
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="./">
                    Comic reader
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navBar" aria-expanded="false" aria-label="Toggle Navigation">

                    <span class="navbar-toggler-icon"></span>

                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page">Comics</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;