/**
 * Renders a white logo component.
 * @returns The white logo component.
 */
import './Logo.scss'
export default function Logo() {
    return (
        <div className="logo-white">
            <img src="/images/logo-horizontal.png" alt="logo" />
            <img
                src="/images/mask-group.png"
                className="text-logo"
                alt="logo"
            />
        </div>
    );
}
