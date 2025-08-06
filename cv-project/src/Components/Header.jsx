import { Button } from './Button';
import '../styles/Header.css';

export function Header({ emptyButton }) {
    return (
        <header>
            <div className='content-margin header_inner'>
                <h1>CV Project</h1>
                <nav className='header_nav'>
                    <Button
                        variant='sec'
                        content='Empty button'
                        onClick={() => {
                            if (window.confirm('Empty button')) {
                                emptyButton();
                            }
                        }}
                    />
                </nav>
            </div>
        </header>
    );
}
