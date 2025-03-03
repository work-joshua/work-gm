
import { Menu } from './clients/header';


export function Header({ page=null }) {

    return (
        <>
            <Menu page={page} />
        </>
    );
}
