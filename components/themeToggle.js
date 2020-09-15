import { ThemeContext } from '../themeContext'
import { VscColorMode } from 'react-icons/vsc'

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  function onToggleClicked() {
    setTheme(!isDark() ? 'dark' : 'light')
  }

  return (
    <div className={(isDark() ? 'is-dark' : 'is-light') + ' cursor-pointer'}>
      <VscColorMode onClick={(e) => onToggleClicked(e)}></VscColorMode>
    </div>
  )
}
