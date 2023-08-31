import { useThemeState } from '../../context/useThemeState';
import { Switch } from 'antd';
import { THEMES, THEME_NAMES } from '../../theme';
import { BsSun } from 'react-icons/bs';
import { FaRegMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
    const { setTheme, theme } = useThemeState();
    const { PEACH, PURPLE } = THEME_NAMES;
    const { themeName } = theme;

    const onChange = () => {
        setTheme(PEACH === theme.themeName ? PURPLE : PEACH);
    };

    return (
        <Switch
            style={{ backgroundColor: THEMES[themeName].switchThemeToggle }}
            onChange={onChange}
            checked={PEACH !== theme.themeName}
            checkedChildren={<BsSun size={14} style={{ marginBottom: '-3px' }} />}
            unCheckedChildren={<FaRegMoon size={14} style={{ marginBottom: '-3px' }} />}
        />
    );
};

export default ThemeToggle;
