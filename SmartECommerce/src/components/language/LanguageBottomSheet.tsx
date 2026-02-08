import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import AppText from '../texts/AppText'
import AppButton from '../buttons/AppButton'
import { s, vs } from 'react-native-size-matters'
import RadiowithTitle from '../inputs/RadiowithTitle'
import { languagesArr } from '../../localization/languages'
import i18n from '../../localization/i18n'
import { set } from 'react-hook-form'

const LanguageBottomSheet = () => {
  const [selectedLang, setSelectedLang] = useState(i18n.language)

  const onConfirm = (code : string) => {
    setSelectedLang(code)
  }

  const handleConfirm  = () => {
      i18n.changeLanguage(selectedLang)
      SheetManager.hide("LANG_SHEET")
  }

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={{ marginBottom: vs(20), textAlign: 'center' }}>
          Change Language
        </AppText>

        {languagesArr.map(lang => (
          <RadiowithTitle
            key={lang.code}
            title={lang.name}
            selected={selectedLang === lang.code}
            onPress={() => setSelectedLang(lang.code)}
          />
        ))}

        <AppButton title="Confirm" onPress={handleConfirm }  />
      </View>
    </ActionSheet>
  )
}

export default LanguageBottomSheet

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },
})
