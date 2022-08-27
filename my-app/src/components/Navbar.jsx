export default function Navbar() {
    return (
        <nav className="nav-container">
            <h1 className="nav-item-name"><span>😴</span>Expiro</h1>
            <button>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12V10H6V12H0ZM0 7V5H12V7H0ZM0 2V0H18V2H0Z" fill="#1C1B1F" />
                </svg>
            </button>
            <button>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z" fill="#1C1B1F" />
                </svg>
            </button>
            <button>
                Add Item
            </button>
        </nav>
    );
}