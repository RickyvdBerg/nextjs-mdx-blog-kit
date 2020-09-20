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
    <div
      className={`cursor-pointer text-primary ${!isDark() ? 'is-dark' : ''}`}
    >
      <VscColorMode onClick={() => onToggleClicked()}></VscColorMode>
      <style jsx>
        {`
          .is-dark {
            transform: rotate(-180deg);
            transition: all 1s;
          }
          :not(.is-dark) {
            transform: rotate(180deg);
            transition: all 1s;
          }
        `}
      </style>
    </div>
  )
}
