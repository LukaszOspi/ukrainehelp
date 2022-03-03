import React from 'react'
import { useTranslation } from 'react-i18next'

function LocaleSwitcher() {
  const { i18n } = useTranslation()
  return (
    <div>
      <select
        class="button button-primary button-wide-mobile button-sm"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="de">Deutsche</option>
        <option value="uk">Ukrainian</option>
      </select>
    </div>
  )
}

export default LocaleSwitcher
